import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { X } from 'lucide-react';
import PayrollButton from '../../ui/payroll-button';
import { EmployeesRowData } from '@/src/types/employees-table';
import { Divider, List, ListItem, ListItemText } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
    data: EmployeesRowData;
}

export default function FullScreenDialog({ data }: FullScreenDialogProps) {
    const [open, setOpen] = React.useState<boolean>(false);

    const employeeDetails = [
        { label: "User Id", value: data.id?.toString() ?? 'N/A' },
        { label: "User Name", value: data.userName ?? 'N/A' },
        { label: "Start Work", value: data.startWork ?? 'N/A' },
        { label: "Total Salary", value: data.totalSalary?.toString() ?? 'N/A' },
        { label: "Total Hours", value: data.totalHours?.toString() ?? 'N/A' }
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <PayrollButton title="Show User Contract" onClick={handleClickOpen} />
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
                            User Contract - {data.userName}
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
