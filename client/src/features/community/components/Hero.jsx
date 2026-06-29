//=============
// File: Hero.jsx
//=============

import React from "react";

export default function CommunityHero({ community }) {
  return (
    <div className="bg-[#1a1a1b] border border-[#343536] rounded-2xl overflow-hidden shadow-sm select-none">
      {/* Structural Community Background Banner - now contained by rounded corners */}
      <div className="w-full h-32 md:h-40 bg-[#272729] relative overflow-hidden">
        {community.banner && (
          <img
            src={community.banner}
            alt={`${community.name} Header Banner Blueprint`}
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
            loading="lazy"
          />
        )}
      </div>

      {/* Profile Row Information Block */}
      <div className="px-4 pb-4 relative flex items-start gap-3">
        {/* Floating Avatar Frame - adjusted sizing for contained hero */}
        <div className="w-14 h-14 rounded-full border-4 border-[#1a1a1b] bg-[#272729] overflow-hidden -mt-6 shrink-0 z-10 shadow-lg">
          {community.avatar ? (
            <img
              src={community.avatar}
              alt={`${community.name} Node Identifier`}
              className="w-full h-full object-cover select-none"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-bold text-lg text-orange-500 font-mono">
              c/
            </div>
          )}
        </div>

        {/* Text Layout Metadata Info */}
        <div className="pt-7 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-md font-bold tracking-tight text-white leading-none">
              {community.name}
            </h1>
            <span className="text-[10px] font-mono font-medium bg-[#272729]/60 text-[#818384] px-1.5 py-0.5 rounded border border-[#343536]">
              c/{community.slug}
            </span>
          </div>
          <p className="text-xs text-[#818384] mt-1.5 font-sans font-medium">
            Node orchestrated by{" "}
            <span className="text-[#d7dadc] hover:underline cursor-pointer">
              u/{community.owner.username}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
