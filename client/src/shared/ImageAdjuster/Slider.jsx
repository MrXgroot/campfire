import React from "react";

export default function Slider({ min, max, step, value, onChange, ariaLabel }) {
  // Calculates the current percentage position to style the active track line dynamically
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full flex items-center group py-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={ariaLabel}
        onChange={onChange}
        className="absolute w-full h-4 opacity-0 cursor-pointer z-20"
      />

      {/* Visual Slider Container */}
      <div className="relative w-full h-[3px] bg-stone-900 rounded-full overflow-hidden transition-all duration-200 group-hover:h-[4px]">
        {/* Active Fill Track */}
        <div
          className="absolute top-0 left-0 h-full bg-stone-400 rounded-full transition-colors group-hover:bg-white"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Custom Slider Thumb Handle */}
      <div
        className="absolute w-3 h-3 bg-white border border-black rounded-full pointer-events-none z-10 shadow-md transition-transform duration-150 ease-out scale-100 group-hover:scale-110 -translate-x-1/2"
        style={{ left: `${percentage}%` }}
      />
    </div>
  );
}
