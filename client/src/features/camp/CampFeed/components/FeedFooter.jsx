import React from "react";
import { Sparkles } from "lucide-react";

export default function FeedFooter() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-12 text-center select-none">
      <div className="w-8 h-8 rounded-full bg-[#272729] flex items-center justify-center border border-[#343536]">
        <Sparkles className="w-4 h-4 text-orange-400" />
      </div>
      <p className="text-xs font-bold text-[#818384]">
        You've gathered around the deepest part of the flame.
      </p>
      <p className="text-[10px] text-[#565859] tracking-normal font-sans mt-1">
        © 2026 Campfire, Inc. All rights reserved.
      </p>
    </footer>
  );
}
