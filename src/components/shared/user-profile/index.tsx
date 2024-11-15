import PaymentDetails from "./payment-details";
import UserEmail from "./user-email";
import UserName from "./user-name";
import UserAvatar from "./user-avatar";
import AdminsDialog from "../admins-dialog";
import { usePayroll } from "@/src/context/payroll-context";
import SectionHeader from "../section-header";
import ContractDialog from "../contract-dialog";

export default function UserProfile() {
    const { userData, userContract } = usePayroll();

    return (
        <main className="flex-1 h-screen p-4 flex flex-col gap-y-8">
            <SectionHeader title={`Welcome Back , ${userData?.name}`} />
            <UserAvatar />
            <UserName />
            <PaymentDetails />

            <div className="flex items-center gap-x-5">
                <UserEmail />
                {userData?.isAdmin && (
                    <AdminsDialog />
                )}
            </div>

            <ContractDialog data={userContract} icon={true}/>
        </main>
    )
}