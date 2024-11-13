"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { getUserDataFromSession } from '@/src/utils/session';

interface UserData {
    name: string;
    username: string;
    avatar: {
        url: string;
    };
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function ActiveAvatars() {
    const [userData, setUserData] = React.useState<UserData | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const data = getUserDataFromSession();
        if (data) {
            setUserData(data); 
        }
        setLoading(false); 
    }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar
                    alt={userData?.name}
                    src={userData?.avatar.url}
                    style={{ width: '50px', height: '50px' }}
                />
            </StyledBadge>

            <div>
                <h1 className="text-base font-semibold">{userData?.username}</h1>
            </div>
        </>
    );
}