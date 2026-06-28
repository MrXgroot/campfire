import React from "react";
import FeedToolbar from "./components/FeedToolbar";
import ActiveFilters from "./components/ActiveFilters";
import CampFeed from "../../../features/camp/CampFeed";
import FeedFooter from "./components/FeedFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#d7dadc] font-sans antialiased selection:bg-[#343536] flex justify-center">
      <main className="flex-1 max-w-[640px] px-4 md:px-0 pt-5 space-y-4">
        <FeedToolbar />
        <ActiveFilters />
        <CampFeed />
        <FeedFooter />
      </main>
    </div>
  );
}
