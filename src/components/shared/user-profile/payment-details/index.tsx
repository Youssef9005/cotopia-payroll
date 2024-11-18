import PayrollInput from "@/src/components/ui/payroll-input"
import { usePayroll } from "@/src/context/payroll-context"

export default function PaymentDetails() {
    const { userContract, userData } = usePayroll();
    const userContracts = userContract?.filter((contract) => contract.user_id === userData?.id);
    const contract = userContracts && userContracts.length > 0 ? userContracts[userContracts.length - 1] : null;

    return (
        <div className="w-full flex items-center gap-x-7">
            <PayrollInput inputId="payment-address" label="Payment Address" value={contract?.payment_address ?? ""} disabled />
            <PayrollInput inputId="total-hours" label="Total Hours" value={1100} disabled />
        </div>
    )
}