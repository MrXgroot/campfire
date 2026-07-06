import { Menu } from "lucide-react";

import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import UserDropdown from "./components/UserDropdown";
import {
  PopularAction,
  NotificationsAction,
  CreateCommunityAction,
} from "./components/NavActions";

import useAppLayoutStore from "../../app/layouts/AppLayout/store/useAppLayoutStore";

export default function GlobalNavbar() {
  const toggleSidebar = useAppLayoutStore((state) => state.toggleSidebar);

  return (
    <header className="sticky top-0 z-50 h-14 bg-[#1a1a1b] border-b border-[#343536] px-5 flex items-center justify-between selection:bg-[#343536] py-2">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-full hover:bg-[#343536] transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <Logo />
      </div>

      {/* Center Search Utility */}
      <SearchBar />

      {/* Right Actions & Controls */}
      <div className="flex items-center gap-1 sm:gap-2">
        <PopularAction />
        <NotificationsAction />
        <CreateCommunityAction />
        <UserDropdown />
      </div>
    </header>
  );
}
