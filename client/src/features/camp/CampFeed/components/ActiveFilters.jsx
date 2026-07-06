import React from "react";
import { X } from "lucide-react";

export default function ActiveFilters() {
  const activeTags = ["javascript", "reactjs"];

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-2">
      <span className="text-[10px] font-bold text-[#818384] uppercase tracking-wider mr-1">
        Filtering:
      </span>
      {activeTags.map((tag) => (
        <div
          key={tag}
          className="flex items-center gap-1 bg-[#272729] hover:bg-[#2d2d30] text-[#d7dadc] text-xs font-semibold pl-2.5 pr-1.5 py-1 rounded-full border border-[#343536] transition-colors cursor-pointer group"
        >
          <span>c/{tag}</span>
          <button className="p-0.5 text-[#818384] group-hover:text-[#d7dadc] hover:bg-[#343536] rounded-full transition-colors">
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
}
