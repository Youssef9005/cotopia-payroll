import { usePayroll } from "@/src/context/payroll-context";
import Image from "next/image";

export default function UserAvatar() {
    const { userData } = usePayroll();

    if (!userData) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-52 h-52 relative rounded-full border-2 border-gray-400">
                <Image 
                    src={userData.userAvatar || ""} 
                    alt={userData?.userName || "User Avatar"} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-full" 
                />
            </div>
        </div>
    )
}
