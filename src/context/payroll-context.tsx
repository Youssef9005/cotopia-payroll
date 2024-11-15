"use client"
import React, { createContext, useContext, useState } from "react";
import { ContractDataContextType, PaymentDataContextType, PayrollContextType, PayrollProviderProps, UserDataContextType } from "../types/payroll-context";
import { getStoredUserData } from "../utils/session";

const PayrollContext = createContext<PayrollContextType | undefined>(undefined);

export function PayrollProvider({ children }: PayrollProviderProps) {
    const storedUserData = getStoredUserData();
    const initialUserData = storedUserData ? {
        userName: storedUserData.username,
        userEmail: storedUserData.email,
        name: storedUserData.username,
        id: storedUserData.id,
        userAvatar: storedUserData.avatar?.url,
        isAdmin: storedUserData.id === Number(process.env.NEXT_PUBLIC_ADMIN_ID),
    } : null;

    const [userData, setUserData] = useState<UserDataContextType | null>(initialUserData);
    const [userPayment, setUserPayment] = useState<PaymentDataContextType[] | null>(null);
    const [userContract, setUserContract] = useState<ContractDataContextType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <PayrollContext.Provider value={{ userData, setUserData, loading, setLoading, error, setError, userPayment, setUserPayment, userContract, setUserContract }}>
            {children}
        </PayrollContext.Provider>
    );
}

export function usePayroll(): PayrollContextType {
    const context = useContext(PayrollContext);
    if (!context) {
        throw new Error("usePayroll must be used within a PayrollProvider");
    }
    return context;
}
