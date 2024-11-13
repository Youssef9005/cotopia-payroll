import PayrollInput from "@/src/components/ui/payroll-input"

export default function PaymentDetails() {
    return (
        <div className="w-full flex items-center gap-x-7">
            <PayrollInput inputId="payment-address" label="Payment Address" />
            <PayrollInput inputId="total-hours" label="Total Hours" value={1100} disabled />
        </div>
    )
}