"use client";
import React, { createContext, useContext, useState } from "react";
import { PaymentDataContextType, PayrollContextType, PayrollProviderProps, UserDataContextType } from "../types/payroll-context";


const PayrollContext = createContext<PayrollContextType | undefined>(undefined);

export function PayrollProvider({ children }: PayrollProviderProps) {
    const [userData, setUserData] = useState<UserDataContextType | null>(null)
    const [userPayment, setUserPayment] = useState<PaymentDataContextType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <PayrollContext.Provider value={{ userData, setUserData, loading, setLoading, error, setError, userPayment, setUserPayment }}>
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
