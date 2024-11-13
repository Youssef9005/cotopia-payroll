"use client"
import { usePayroll } from "@/src/context/payroll-context"

export default function UserGreetingHeader() {
    const { userData } = usePayroll();
    return (
        <div>
            <h1 className="text-xl font-medium">
                {userData ? `Welcome Back, ${userData.name}` : "Welcome to Cotopia Payroll"}
            </h1>
        </div>
    );
}
