import PayrollButton from "@/src/components/ui/payroll-button";
import React from "react";

interface SubmitButtonProps {
    loading: boolean;
}

export default function SubmitButton({ loading }: SubmitButtonProps) {
    return (
        <PayrollButton
            title={loading ? "Submitting..." : "Submit"}
            extraClassName="w-1/2 py-3"
            type="submit"
            disabled={loading}
        >

        </PayrollButton>
    )
}