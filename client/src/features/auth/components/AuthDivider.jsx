import React from "react";

export default function AuthDivider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 bg-[#343536]" />

      <span className="text-[10px] text-[#818384] font-bold tracking-wider uppercase">
        OR
      </span>

      <div className="h-px flex-1 bg-[#343536]" />
    </div>
  );
}
