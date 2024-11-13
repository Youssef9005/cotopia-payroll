import { SideBarLinkItem } from "@/src/types/sidebar-link-item";
import Link from "next/link";

export default function SidebarLinkItem({ href, icon, title, isActive } : SideBarLinkItem) {
    const linkStyle = "transition-all duration-200 ease-out hover:bg-gray-100 hover:rounded-md hover:border-l-4 hover:border-blue-600";
    const activeClass = "bg-gray-100 rounded-md border-l-4 border-blue-600";

    return (
        <li className={`w-full flex items-center gap-x-8 p-3 ${isActive ? activeClass : linkStyle}`}>
            {icon}
            <Link href={href} className="text-base font-medium">{title}</Link>
        </li>
    );
}
