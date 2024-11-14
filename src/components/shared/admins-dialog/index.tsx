"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { X } from 'lucide-react';
import PayrollButton from '../../ui/payroll-button';
import { getStoredUserData } from '@/src/utils/session';
import { toast } from 'sonner';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminsDialog() {
    const [open, setOpen] = React.useState(false);
    const userData = getStoredUserData();


    const handleClickOpen = () => {
        setOpen(true);
        console.log(userData?.id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddAdmin = () => {
        setOpen(false);
        toast.success("Admin has been added successfully!")
    }

    return (
        <>
            <PayrollButton title="Show All Admin" extraClassName="py-3 w-1/2 mt-auto" onClick={handleClickOpen}></PayrollButton>

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
                            All Admin
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                        <Button autoFocus color="inherit" onClick={handleAddAdmin}>
                            Add new admin
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>

                    <ListItemButton>
                        <ListItemText primary={userData?.username} secondary={`${userData?.id}`} />
                    </ListItemButton>


                    <Divider />
                    <ListItemButton>
                        <ListItemText primary={userData?.username} secondary={`${userData?.id}`} />
                    </ListItemButton>

                </List>
            </Dialog>
        </>
    );
}