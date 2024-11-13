import { usePayroll } from "@/src/context/payroll-context";
import PayrollInput from "@/src/components/ui/payroll-input"

export default function UserName() {
    const { userData } = usePayroll();

    return (
        <div className="w-full flex items-center gap-x-7">
            <PayrollInput inputId="name" label="Your Name" value={userData?.name} disabled />
            <PayrollInput inputId="user-name" label="User Name" value={userData?.userName} disabled />
        </div>)
}