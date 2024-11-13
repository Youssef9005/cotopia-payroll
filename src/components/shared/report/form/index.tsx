"use client"
import { useState, useCallback } from "react";
import { getUserDataFromSession } from "@/src/utils/session";
import PayrollInput from "@/src/components/ui/payroll-input";
import PayrollTextarea from "@/src/components/ui/payroll-textarea";
import SubmitButton from "../submiting-button";
import ErrorMessage from "../error-message";
import { handleSubmitReport } from "@/src/utils/report-submit";

interface FormData {
    title: string;
    description: string;
}

export default function ReportForm() {
    const userData = getUserDataFromSession();
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();  
            if (!formData.title || !formData.description) {
                setError("Both title and description are required.");
                return;
            }
            setError(null); 
            handleSubmitReport(e, formData, userData, formattedDate, setLoading, setError);
        },
        [formData, userData, formattedDate]
    );

    return (
        <form className="flex flex-col items-center w-full gap-y-8" onSubmit={handleSubmit}>
            <div className="w-1/2">
                <PayrollInput
                    inputId="problemTitle"
                    label="Problem Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="w-1/2">
                <PayrollTextarea
                    inputId="problemDescription"
                    label="Problem Description"
                    rows={7}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <SubmitButton loading={loading} />
            {error && <ErrorMessage error={error} />}
        </form>
    );
}
