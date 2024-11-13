import { SidebarLink } from "@/src/types/sidebar-links";

export const sidebarLinksData: SidebarLink[] = [
    { title: "Dashboard", href: "/dashboard", icon: <CircleGauge /> },
    { title: "Employees", href: "/all-employees", icon: <Users /> },
    { title: "Payments", href: "/payments", icon: <WalletCards /> },
    { title: "Advance", href: "/advance", icon: <Banknote /> },
    { title: "Messages", href: "/messages", icon: <MailCheck /> },
    { title: "Report", href: "/report", icon: <MessageCircleWarning /> },
];
import { Banknote, CircleGauge, MailCheck, MessageCircleWarning, Users, WalletCards } from "lucide-react";