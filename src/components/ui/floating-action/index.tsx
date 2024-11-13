import { Fab, Tooltip } from "@mui/material";
import { PlusIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface FloatingActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    tooltipTitle?: string;
}

export default function FloatingAction({ icon, tooltipTitle = "New Advance Request", ...props }: FloatingActionProps) {
    return (
        <button className="absolute bottom-12 right-3" {...props}>
            <Tooltip title={tooltipTitle} placement="top">
                <Fab color="default" aria-label={tooltipTitle.toLowerCase().replace(/\s+/g, '-')} >
                    {icon || <PlusIcon />}
                </Fab>
            </Tooltip>
        </button>
    );
}
