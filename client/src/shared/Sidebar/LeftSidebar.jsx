import React from "react";
import { Home, TrendingUp, Compass, Plus, X } from "lucide-react";

import useAppLayoutStore from "../../app/layouts/AppLayout-v2/store/useAppLayoutStore";

export default function LeftSidebar() {
  const { isSidebarOpen, closeSidebar } = useAppLayoutStore();

  const subscribedCamps = [
    "javascript",
    "webgl_creations",
    "reactjs",
    "nextjs",
    "rust_lang",
  ];

  const activeCamp = "reactjs";

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[240px]
          bg-[#030303]
          border-r border-[#343536]
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          selection:bg-[#343536]

          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:sticky
          lg:top-14
          lg:h-[calc(100vh-56px)]
          lg:translate-x-0
          lg:flex
          lg:flex-col
          lg:shrink-0
          lg:border-r-0
          lg:bg-transparent
          lg:z-auto
          lg:hidden lg:w-[240px]
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between h-14 px-4 border-b border-[#343536] lg:hidden">
          <span className="font-semibold">Navigation</span>

          <button
            onClick={closeSidebar}
            className="p-2 rounded-full hover:bg-[#272729]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="pt-5 px-2 text-sm">
          {/* =========================================
              PRIMARY FEEDS SECTION
             ========================================= */}

          <div className="space-y-0.5">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-[#272729] text-white font-medium text-left transition-colors">
              <Home className="w-5 h-5" />
              <span>Home Feed</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 transition-colors text-left">
              <TrendingUp className="w-5 h-5 text-[#818384]" />
              <span>Popular Index</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 transition-colors text-left">
              <Compass className="w-5 h-5 text-[#818384]" />
              <span>Explore Nodes</span>
            </button>
          </div>

          <hr className="border-[#343536] my-4" />

          {/* =========================================
              SUBSCRIBED CAMPS
             ========================================= */}

          <div className="space-y-0.5">
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[10px] font-bold text-[#818384] uppercase tracking-wider">
                My Subscribed Camps
              </p>

              <button className="p-0.5 text-[#818384] hover:text-white transition-colors">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {subscribedCamps.map((camp) => {
              const isSelected = camp === activeCamp;

              return (
                <button
                  key={camp}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-colors text-left group ${
                    isSelected
                      ? "text-orange-400 font-bold bg-[#272729]/30 border border-[#343536]/40"
                      : "text-[#d7dadc] hover:bg-[#272729]/60"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full text-[8px] flex items-center justify-center font-bold font-mono shrink-0 text-white ${
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
        </div>
      </aside>
    </>
  );
}
