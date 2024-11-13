import SideBarContent from "../../shared/side-bar/content";
import SideBarHeader from "../../shared/side-bar/header";

export default function SideBar() {
    return (
        <div className="p-3 min-w-80 bg-white min-h-screen">
            <SideBarHeader />
            <SideBarContent />
        </div>
    )
}