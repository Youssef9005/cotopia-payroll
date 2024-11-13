import { AdvanceFormProps } from "@/src/types/advance-form";
import { TextField } from "@mui/material";
import React from "react";

export function AdvanceForm({ advanceReason, advanceAmount, setAdvanceReason, setAdvanceAmount }: AdvanceFormProps) {
    return (
        <>
            <TextField
                autoFocus
                required
                margin="normal"
                id="advance-reason"
                label="Advance's reason"
                type="text"
                variant="filled"
                fullWidth
                value={advanceReason}
                onChange={(e) => setAdvanceReason(e.target.value)}
            />

            <TextField
                required
                margin="normal"
                id="advance-amount"
                label="Advance's amount"
                type="number"
                variant="filled"
                fullWidth
                value={advanceAmount}
                onChange={(e) => setAdvanceAmount(e.target.value)}
            />
        </>
    );
}
