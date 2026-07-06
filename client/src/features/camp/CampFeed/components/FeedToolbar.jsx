import React, { useState } from "react";
import { LayoutGrid, ChevronDown } from "lucide-react";

export default function FeedToolbar() {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="flex items-center justify-between border-b border-[#343536] text-sm font-bold select-none px-2">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("for-you")}
          className={`pb-3 relative transition-colors ${
            activeTab === "for-you"
              ? "text-white"
              : "text-[#818384] hover:text-[#d7dadc]"
          }`}
        >
          <span>For You</span>
          {activeTab === "for-you" && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`pb-3 relative transition-colors ${
            activeTab === "following"
              ? "text-white"
              : "text-[#818384] hover:text-[#d7dadc]"
          }`}
        >
          <span>Following</span>
          {activeTab === "following" && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
      </div>

      <button className="flex items-center gap-1.5 pb-3 text-xs font-bold text-[#818384] hover:text-[#d7dadc] transition-colors">
        <LayoutGrid className="w-3.5 h-3.5" />
        <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
