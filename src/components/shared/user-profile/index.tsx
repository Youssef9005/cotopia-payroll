import PaymentDetails from "./payment-details";
import UserEmail from "./user-email";
import UserName from "./user-name";
import UserGreetingHeader from "./user-greeting-header";
import UserAvatar from "./user-avatar";
import AdminsDialog from "../admins-dialog";
import { usePayroll } from "@/src/context/payroll-context";

export default function UserProfile() {
    const { userData } = usePayroll();

    return (
        <main className="flex-1 h-screen p-4 flex flex-col gap-y-8">
            <UserGreetingHeader />
            <UserAvatar />
            <UserName />
            <PaymentDetails />



            <div className="flex items-center gap-x-5">
                <UserEmail />
                {userData?.isAdmin && (
                    <AdminsDialog />
                )}
            </div>

        </main>
    )
}