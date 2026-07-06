import { useState } from "react";
import { CornerUpLeft, X } from "lucide-react";

import Vote from "../../../../../shared/components/Vote";
export default function Comment() {
  const [replying, setReplying] = useState(false);

  const comment = {
    id: "comment-1",
    author: {
      username: "MountainGoat88",
    },
    createdAt: "4h ago",
    content:
      "Sleep with your water filters inside your sleeping bag. If a hollow-fiber filter freezes with moisture inside, the fibers can crack without you noticing.",
    metrics: {
      votes: 85,
      replies: 1,
    },
  };

  return (
    <article className="py-4">
      <header className="flex items-baseline gap-2 mb-2">
        <span className="font-semibold text-[13px] text-[#ECE8DF]">
          {comment.author.username}
        </span>

        <span className="font-mono text-[10px] tracking-wide text-[#5A5E63]">
          {comment.createdAt}
        </span>
      </header>

      <p className="max-w-[56ch] text-[14px] leading-7 text-[#93979C]">
        {comment.content}
      </p>

      <footer className="flex items-center gap-4 mt-3">
        <Vote value={comment.metrics.votes} />

        <button
          onClick={() => setReplying((prev) => !prev)}
          className="flex items-center gap-1 font-mono text-[11px] tracking-wide text-[#5A5E63] hover:text-[#C68A46] transition-colors"
        >
          {replying ? (
            <>
              <X size={12} />
              Cancel
            </>
          ) : (
            <>
              <CornerUpLeft size={12} />
              Reply
            </>
          )}
        </button>
      </footer>

      {replying && <div className="mt-4">{/* ReplyComposer */}</div>}

      {/* ReplyTree */}
    </article>
  );
}
