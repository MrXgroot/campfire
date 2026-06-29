//=============
// File: LeftSidebar.jsx
//=============

import React from "react";
import { Home, TrendingUp, Compass, Plus } from "lucide-react";

export default function LeftSidebar() {
  // Mock data matching the c/ community domain source of truth
  const subscribedCamps = [
    "javascript",
    "webgl_creations",
    "reactjs",
    "nextjs",
    "rust_lang",
  ];
  const activeCamp = "reactjs"; // Tracks current route view for highlight styling

  return (
    <aside className="w-[240px] shrink-0 hidden lg:flex flex-col pt-5 text-sm sticky top-14 h-[calc(100vh-56px)] overflow-y-auto selection:bg-[#343536]">
      {/* =========================================
          PRIMARY FEEDS SECTION
         ========================================= */}
      <div className="space-y-0.5 pr-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-[#272729] text-white font-medium text-left transition-colors focus:outline-none">
          <Home className="w-5 h-5" />
          <span>Home Feed</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 text-left transition-colors focus:outline-none">
          <TrendingUp className="w-5 h-5 text-[#818384]" />
          <span>Popular Index</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 text-left transition-colors focus:outline-none">
          <Compass className="w-5 h-5 text-[#818384]" />
          <span>Explore Nodes</span>
        </button>
      </div>

      {/* Standard Divider Block */}
      <hr className="border-[#343536] my-4 mr-2" />

      {/* =========================================
          SUBSCRIBED CAMPS NAVIGATION SECTION
         ========================================= */}
      <div className="space-y-0.5 pr-2">
        <div className="flex items-center justify-between px-3 mb-2 select-none">
          <p className="text-[10px] font-bold text-[#818384] uppercase tracking-wider">
            My Subscribed Camps
          </p>
          <button
            className="p-0.5 text-[#818384] hover:text-white rounded transition-colors focus:outline-none"
            title="Discover more camps"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {subscribedCamps.map((camp) => {
          const isSelected = camp === activeCamp;
          return (
            <button
              key={camp}
              className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-left transition-colors focus:outline-none group ${
                isSelected
                  ? "text-orange-400 font-bold bg-[#272729]/30 border border-[#343536]/40"
                  : "text-[#d7dadc] hover:bg-[#272729]/60"
              }`}
            >
              {/* Token Avatar Badge */}
              <span
                className={`w-4 h-4 rounded-full text-[8px] text-white flex items-center justify-center font-bold font-mono transition-colors shrink-0 ${
                  isSelected
                    ? "bg-[#ff4500]"
                    : "bg-[#272729] group-hover:bg-[#ff4500]"
                }`}
              >
                c/
              </span>
              <span className="truncate">c/{camp}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
