"use client"
import useFetchData from "@/src/hooks/use-data-fetch";
import UserProfile from "../shared/user-profile";
import { usePayroll } from "@/src/context/payroll-context";
import Image from "next/image";

export default function UserProfileLoader() {
    const { loading } = usePayroll();
    useFetchData();

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <Image src={`/icons/loading.gif`} alt="" width={200} height={200} />
            </div>
        );
    }

    return <UserProfile />;
}