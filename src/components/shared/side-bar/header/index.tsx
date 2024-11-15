import Logo from "@/src/components/shared/logo";
import Link from "next/link";
import ActiveAvatars from "../../../ui/active-avatar";

export default function SideBarHeader() {
    return (
        <>
            <Logo />
            <Link href={`/`} className="w-full flex items-center justify-center">

                <div className="w-3/4 mt-5 flex items-center justify-between gap-x-7 rounded-2xl bg-gray-50 dark:bg-gray-800 py-1 px-5 border border-gray-100 dark:border-gray-700">
                    <ActiveAvatars />
                </div>

            </Link>
        </>
    )
}