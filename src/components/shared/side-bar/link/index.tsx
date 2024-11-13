"use client"
import { usePathname } from "next/navigation";
import { sidebarLinksData } from "../link-data";
import SidebarLinkItem from "../link-item";

export default function SideBarLink() {
    const pathname = usePathname();

    return (
        <>
            {sidebarLinksData.map((link) => (
                <SidebarLinkItem
                    key={link.title}
                    href={link.href}
                    icon={link.icon}
                    title={link.title}
                    isActive={pathname === link.href} />
            ))}
        </>
    )
}