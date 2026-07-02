import React from "react";

export default function CommunityHero({ community }) {
  return (
    <div className="bg-[#1a1a1b] border border-[#343536] rounded-2xl overflow-hidden shadow-sm">
      <div className="w-full h-24 bg-[#272729] relative overflow-hidden">
        {community.banner && (
          <img
            src={community.banner}
            alt="Node Banner"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        )}
      </div>

      <div className="px-4 pb-4 relative flex items-start gap-3 -mt-6">
        <div className="w-14 h-14 rounded-full border-4 border-[#1a1a1b] bg-[#272729] overflow-hidden shrink-0 shadow-md">
          <img
            src={community.avatar}
            alt="Node Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-7 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-md font-bold text-white truncate">
              {community.name}
            </h1>
            <span className="text-[10px] font-mono bg-[#272729] text-[#818384] px-1.5 py-0.5 rounded border border-[#343536]">
              c/{community.slug}
            </span>
          </div>
          <p className="text-xs text-[#818384] mt-0.5">
            Orchestrated by u/{community.owner.username}
          </p>
        </div>
      </div>
    </div>
  );
}
