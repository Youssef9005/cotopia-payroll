import { useState } from 'react';
import axios from 'axios';
import { toast } from "sonner";
import FloatingAction from '../../ui/floating-action';
import { AdvanceRequestDialog } from './advance-request';
import { sendEmailToDeveloper, sendEmailToUser } from '@/src/service/email-service';
import { getUserDataFromSession } from '@/src/utils/session';

interface UserData {
    username: string;
    email: string;
}

export default function AdvanceFormDialog() {
    const [open, setOpen] = useState(false);
    const [advanceReason, setAdvanceReason] = useState('');
    const [advanceAmount, setAdvanceAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const currentDate = new Date().toLocaleString();
    const data: UserData | null = getUserDataFromSession();
    const firebaseUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

    const handleClickOpen = () => {
        setOpen(true);
        setAdvanceReason('');
        setAdvanceAmount('');
    };

    const handleClose = () => setOpen(false);

    const validateInputs = (): boolean => {
        if (!advanceReason || !advanceAmount) {
            toast.error("Please fill in all fields.");
            return false;
        }
        if (isNaN(Number(advanceAmount)) || Number(advanceAmount) <= 0) {
            toast.error("Please enter a valid amount.");
            return false;
        }
        return true;
    };

    async function handleSendRequest() {
        if (!validateInputs()) return;

        setLoading(true);
        try {
            if (!data) {
                toast.error("User data not found.");
                return;
            }

            const message = `Hello ${data.username}, admin has received your advance request: ${advanceReason} for the amount: ${advanceAmount}`;

            await axios.post(`${firebaseUrl}/messages.json`, {
                messages: { date: currentDate, message }
            });
            await axios.post(`${firebaseUrl}/advance.json`, {
                date: currentDate,
                amount: advanceAmount,
                reason: advanceReason,
                action: 0,
                status: 0,
            });

            toast.success("Advance request sent successfully!");

            await sendEmailToUser(data.username, data.email, `We have received your advance request for ${advanceAmount}.`);
            await sendEmailToDeveloper(
                "New Advance Request",
                `User ${data.username} has requested an advance: ${advanceReason} for the amount: ${advanceAmount}`,
                data.username,
                data.email
            );
            handleClose();
        } catch (error: unknown) {
            toast.error("Error in sending advance request!");

            if (axios.isAxiosError(error)) {
                console.error("Axios error: ", error.response?.data || error.message);
            } else {
                console.error("Unknown error: ", error);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <FloatingAction onClick={handleClickOpen} />
            <AdvanceRequestDialog
                open={open}
                onClose={handleClose}
                onSubmit={handleSendRequest}
                loading={loading}
                advanceReason={advanceReason}
                advanceAmount={advanceAmount}
                setAdvanceReason={setAdvanceReason}
                setAdvanceAmount={setAdvanceAmount}
            />
        </>
    );
}
