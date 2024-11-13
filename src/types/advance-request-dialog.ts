export interface AdvanceRequestDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    loading: boolean;
    advanceReason: string;
    advanceAmount: string;
    setAdvanceReason: (value: string) => void;
    setAdvanceAmount: (value: string) => void;
}