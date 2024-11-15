import FloatingAction from "@/src/components/ui/floating-action";
import { usePayroll } from "@/src/context/payroll-context";
import { UserPen } from "lucide-react";
import Image from "next/image";

export default function UserAvatar() {
    const { userData } = usePayroll();

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center">
                <div className="w-52 h-52 relative rounded-full border-2 border-gray-400">
                    <Image src={userData!.userAvatar} alt={userData!.userName} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
            </div>
            <FloatingAction icon={<UserPen />} tooltipTitle="Show User Contract" />
        </div>
    )
}