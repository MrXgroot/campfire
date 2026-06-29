import React from "react";
import { Users, Layers, Calendar, Shield } from "lucide-react";

export default function CommunitySidebar({ community }) {
  return (
    <aside className="w-[312px] shrink-0 hidden xl:flex flex-col text-xs sticky top-14 h-fit space-y-4">
      <div className="bg-[#1a1a1b] border border-[#343536] rounded-2xl p-4 space-y-4 shadow-sm">
        <div>
          <p className="text-[10px] font-bold tracking-wider text-[#818384] uppercase mb-1.5">
            About Community
          </p>
          <p className="text-[#d7dadc] text-xs leading-relaxed font-normal">
            {community.description}
          </p>
        </div>

        {/* Numeric Contract V1 Data Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-[#343536] pt-4 select-none">
          <div className="space-y-0.5">
            <p className="text-white text-base font-bold tracking-tight flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#818384]" />
              {community.metrics?.members?.toLocaleString() ?? 0}
            </p>
            <p className="text-[10px] text-[#818384] font-bold uppercase">
              Members
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-white text-base font-bold tracking-tight flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#818384]" />
              {community.metrics?.camps?.toLocaleString() ?? 0}
            </p>
            <p className="text-[10px] text-[#818384] font-bold uppercase">
              Camps
            </p>
          </div>
        </div>

        {/* Meta Records Row Logs */}
        <div className="border-t border-[#343536] pt-3 space-y-2 text-xs text-[#818384]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Created {community.createdAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 shrink-0" />
            <span>
              Owner ID:{" "}
              <span className="font-mono text-[11px] text-zinc-400">
                {community.owner?.id}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Copy Stamp Disclaimer Footer */}
      <div className="px-3 text-[#818384] text-[11px] leading-normal font-sans select-none">
        <p>© 2026 Campfire Infrastructure, Inc. All rules applied.</p>
      </div>
    </aside>
  );
}
