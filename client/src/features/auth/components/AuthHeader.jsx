import React from "react";

export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="text-center space-y-1">
      <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>

      <p className="text-xs text-[#818384]">{subtitle}</p>
    </div>
  );
}
