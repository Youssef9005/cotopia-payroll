import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, CircularProgress } from '@mui/material';
import { useCallback } from 'react';

interface AdvanceRequestDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    loading: boolean;
    advanceReason: string;
    advanceAmount: string;
    setAdvanceReason: (reason: string) => void;
    setAdvanceAmount: (amount: string) => void;
}

export const AdvanceRequestDialog = ({
    open,
    onClose,
    onSubmit,
    loading,
    advanceReason,
    advanceAmount,
    setAdvanceReason,
    setAdvanceAmount
}: AdvanceRequestDialogProps) => {

    const handleReasonChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAdvanceReason(e.target.value);
    }, [setAdvanceReason]);

    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) && Number(value) >= 0) {
            setAdvanceAmount(value);
        }
    }, [setAdvanceAmount]);

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="advance-request-dialog" aria-describedby="request-advance-dialog-description">
            <DialogTitle id="advance-request-dialog">Advance Request</DialogTitle>
            <DialogContent dividers>
                <TextField
                    label="Reason"
                    fullWidth
                    value={advanceReason}
                    onChange={handleReasonChange}
                    margin="normal"
                    variant="outlined"
                    aria-label="Reason for advance request"
                />
                <TextField
                    label="Amount"
                    type="number"
                    fullWidth
                    value={advanceAmount}
                    onChange={handleAmountChange}
                    margin="normal"
                    variant="outlined"
                    aria-label="Amount for advance request"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    color="secondary"
                    disabled={loading}
                    aria-label="Cancel the advance request"
                >
                    Cancel
                </Button>
                <Button
                    onClick={onSubmit}
                    color="primary"
                    disabled={loading || !advanceReason || !advanceAmount}
                    aria-label="Submit the advance request"
                >
                    {loading ? <CircularProgress size={24} /> : 'Submit Request'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
