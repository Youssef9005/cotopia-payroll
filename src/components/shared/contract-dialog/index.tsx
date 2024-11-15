import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { UserPen, X } from 'lucide-react';
import PayrollButton from '../../ui/payroll-button';
import { EmployeesRowData } from '@/src/types/employees-table';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { usePayroll } from '@/src/context/payroll-context';
import { ContractDataContextType } from '@/src/types/payroll-context';
import FloatingAction from '../../ui/floating-action';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
    // data: EmployeesRowData;
    data: any;
    icon?: boolean
}

export default function ContractDialog({ data, icon = false }: FullScreenDialogProps) {
    const [open, setOpen] = React.useState<boolean>(false);
    const { userContract, userData } = usePayroll();
    const userContracts = userContract?.filter((contract) => contract.user_id === userData?.id);
    const contract = userContracts && userContracts.length > 0 ? userContracts[userContracts.length - 1] : null;

    const employeeDetails = [
        { label: "User Id", value: userData?.id ?? 'N/A' },
        { label: "User Name", value: userData?.userName ?? 'N/A' },
        { label: "Start Work", value: contract?.start_at ?? 'N/A' },
        { label: "Amount", value: contract?.amount ?? 'N/A' },
        { label: "Total Hours", value: data.totalHours?.toString() ?? 'N/A' },
        { label: "Payment Address", value: contract?.payment_address ?? 'N/A' },
        { label: "Payment Method", value: contract?.payment_method ?? 'N/A' },
        { label: "Contract Type", value: contract?.type ?? 'N/A' },
        { label: "User Role", value: contract?.role ?? 'N/A' }

    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {icon ? (
                <FloatingAction icon={<UserPen />} tooltipTitle='Show Your Contract' onClick={handleClickOpen} />
            )
                : (
                    <PayrollButton title="Show User Contract" onClick={handleClickOpen} />
                )}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <X />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            User Contract -  : {userData?.userName}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="p-3">
                    <List>
                        {employeeDetails.map((detail) => (
                            <React.Fragment key={detail.label}>
                                <ListItem>
                                    <ListItemText primary={detail.label} secondary={detail.value} />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            </Dialog>
        </>
    );
}
