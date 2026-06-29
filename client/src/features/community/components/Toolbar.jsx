import React from "react";

export default function CommunityToolbar({
  activeTab,
  setActiveTab,
  campCount,
}) {
  return (
    <div className="flex gap-4 border-b border-[#343536] text-sm font-bold select-none px-2">
      <button
        onClick={() => setActiveTab("all-camps")}
        className={`pb-3 relative transition-colors ${
          activeTab === "all-camps"
            ? "text-white"
            : "text-[#818384] hover:text-[#d7dadc]"
        }`}
      >
        <span>All Camps ({campCount})</span>
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
  );
}
