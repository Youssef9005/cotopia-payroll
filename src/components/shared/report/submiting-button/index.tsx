import React from "react";

interface SubmitButtonProps {
    loading: boolean;
}

export default function SubmitButton({ loading }: SubmitButtonProps) {
    return (
        <button
            className="w-1/2 p-3 bg-black rounded-md text-white font-medium"
            type="submit"
            disabled={loading}
        >
            {loading ? "Submitting..." : "Submit"}
        </button>
    )
}