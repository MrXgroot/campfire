import { MessageSquare, Share2, Bookmark } from "lucide-react";

import Vote from "../../../../../../shared/components/Vote";

export default function CampActions({ metrics, onUpvote, onShare, onSave }) {
  return (
    <footer className="flex items-center gap-6 mt-5">
      <Vote value={metrics.votes} onUpvote={onUpvote} />

      <span className="flex items-center gap-1.5 font-mono text-[12px] text-[#5A5E63]">
        <MessageSquare size={13} />
        {metrics.comments} replies
      </span>

      <div className="ml-auto flex items-center gap-5 font-mono text-[11px] tracking-wide text-[#5A5E63]">
        <button
          onClick={onShare}
          className="flex items-center gap-1.5 hover:text-[#93979C] transition-colors"
        >
          <Share2 size={13} />
          share
        </button>

        <button
          onClick={onSave}
          className="flex items-center gap-1.5 hover:text-[#93979C] transition-colors"
        >
          <Bookmark size={13} />
          save
        </button>
      </div>
    </footer>
  );
}
