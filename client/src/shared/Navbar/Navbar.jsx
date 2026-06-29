import React from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import UserDropdown from "./components/UserDropdown";
import {
  PopularAction,
  NotificationsAction,
  CreatePostAction,
} from "./components/NavActions";

export default function GlobalNavbar() {
  return (
    <header className="sticky top-0 z-50 h-14 bg-[#1a1a1b] border-b border-[#343536] px-5 flex items-center justify-between selection:bg-[#343536]">
      {/* Brand Identity */}
      <Logo />

      {/* Center Search Utility */}
      <SearchBar />

      {/* Right Actions & Controls */}
      <div className="flex items-center gap-1 sm:gap-2">
        <PopularAction />
        <NotificationsAction />
        <CreatePostAction />
        <UserDropdown />
      </div>
    </header>
  );
}
