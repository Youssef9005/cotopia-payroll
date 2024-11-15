import { Fab, Tooltip } from "@mui/material";
import { PlusIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface FloatingActionProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: ReactNode;
    tooltipTitle?: string;
}

export default function FloatingAction({ icon, tooltipTitle = "New Advance Request", ...props }: FloatingActionProps) {
    return (
        <div className="absolute bottom-12 right-3 shadow-2xl" {...props}>
            <Tooltip title={tooltipTitle} placement="top">
                <Fab color="default" aria-label={tooltipTitle.toLowerCase().replace(/\s+/g, '-')} >
                    {icon || <PlusIcon />}
                </Fab>
            </Tooltip>
        </div>
    );
}
