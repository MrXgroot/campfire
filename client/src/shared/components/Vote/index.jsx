import { ArrowUp } from "lucide-react";

export default function Vote({ value, onUpvote }) {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <button
        aria-label="Upvote"
        onClick={onUpvote}
        className="text-[#5A5E63] hover:text-[#C68A46] transition-colors"
      >
        <ArrowUp size={14} strokeWidth={2.25} />
      </button>

      <span className="font-mono tabular-nums text-[12px] text-[#93979C] min-w-[1.6em] text-center">
        {value}
      </span>
    </div>
  );
}
