import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative max-w-[690px] w-full mx-4">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#818384]" />
      <input
        type="text"
        placeholder="Search Campfire"
        className="w-full h-10 bg-[#272729] hover:bg-[#2d2d30] border border-[#343536] focus:border-[#d7dadc] focus:bg-[#1a1a1b] rounded-full pl-11 pr-4 text-sm text-[#d7dadc] placeholder-[#818384] focus:outline-none transition-colors"
      />
    </div>
  );
}
