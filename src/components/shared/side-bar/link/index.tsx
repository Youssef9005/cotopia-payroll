"use client"
import { usePathname } from "next/navigation";
import { sidebarLinksData } from "../link-data";
import SidebarLinkItem from "../link-item";
import { usePayroll } from "@/src/context/payroll-context";


export default function SideBarLink() {
    const pathname = usePathname();
    const { userData } = usePayroll();

    return (
        <>
            {sidebarLinksData
                .filter(link => !link.adminOnly || userData?.isAdmin)
                .map(link => (
                    <SidebarLinkItem
                        key={link.title}
                        href={link.href}
                        icon={link.icon}
                        title={link.title}
                        isActive={pathname === link.href}
                    />
                ))
            }
        </>
    );
}
