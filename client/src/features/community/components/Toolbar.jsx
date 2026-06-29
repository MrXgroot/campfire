import React, { useState } from "react";
import { LayoutGrid, ChevronDown } from "lucide-react";

export default function CommunityToolbar({ community }) {
  const [activeTab, setActiveTab] = useState("all-camps");

  return (
    <div className="flex items-center justify-between border-b border-[#343536] text-sm font-bold select-none px-2 mt-2">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("all-camps")}
          className={`pb-3 relative transition-colors ${
            activeTab === "all-camps"
              ? "text-white"
              : "text-[#818384] hover:text-[#d7dadc]"
          }`}
        >
          <span>All Camps</span>
          {activeTab === "all-camps" && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("pinned")}
          className={`pb-3 relative transition-colors ${
            activeTab === "pinned"
              ? "text-white"
              : "text-[#818384] hover:text-[#d7dadc]"
          }`}
        >
          <span>Pinned Notes</span>
          {activeTab === "pinned" && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
          )}
        </button>
      </div>

      <button className="flex items-center gap-1 pb-3 text-xs text-[#818384] hover:text-[#d7dadc] transition-colors">
        <LayoutGrid className="w-3.5 h-3.5" />
        <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
