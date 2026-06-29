import React from "react";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 min-w-[140px]">
      <Link to="/" className="flex items-center gap-2 select-none group">
        <div className="w-8 h-8 rounded-full bg-[#ff4500] flex items-center justify-center shadow-lg shadow-orange-950/20 transition-transform group-hover:scale-105">
          <Flame className="h-5 w-5 text-white fill-white" />
        </div>
        <span className="text-[18px] font-black tracking-tight text-white hidden sm:block font-sans lowercase">
          campfire
        </span>
      </Link>
    </div>
  );
}
