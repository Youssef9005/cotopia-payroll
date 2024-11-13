import { ReactNode } from "react";

export interface SideBarLinkItem {
  href: string;
  icon: ReactNode;
  title: string;
  isActive: boolean;
}
