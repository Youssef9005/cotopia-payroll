import { usePayroll } from "@/src/context/payroll-context";
import PayrollInput from "@/src/components/ui/payroll-input"

export default function UserEmail() {
    const { userData } = usePayroll();

    return (
        <div className="w-full flex items-center gap-x-7">
            <PayrollInput inputId="user-email" label="User Email" value={userData?.userEmail} disabled />
        </div>
    )
}