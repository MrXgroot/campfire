import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSidebar from "../../shared/Sidebar/LeftSidebar";
import CommunityPage from "../pages/community/CommunityPage";
export default function AppLayout() {
  return (
    // 1. Lock the outer viewport frame to eliminate layout shifting and erratic scrollbars
    <div className="h-screen w-screen bg-[#030303] text-[#d7dadc] font-sans antialiased overflow-hidden flex flex-col selection:bg-[#343536]">
      {/* Global Locked Top Header Strip */}
      <Navbar />

      {/* 2. Main Viewport Scroll Container */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden review-scrollbar">
        {/* Exact Reddit Desktop structural constraint width matrix */}
        <div className="max-w-[1248px] mx-auto px-6 flex justify-center gap-6">
          {/* Left Navigation Command Sidebar (Stays pinned via sticky top matching Navbar height) */}
          <LeftSidebar />

          {/* 3. Primary Activity Space (Acts cleanly as the route content injection dock) */}
          <main className="flex-1 max-w-[640px] min-w-0 pt-5 pb-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
