import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function CampCard({ camp, actions = {} }) {
  const { onVote, onComment, onShare, onSave, onMenu } = actions;
  return (
    <article className="bg-[#1a1a1b] hover:bg-[#222224] border border-[#343536] rounded-2xl p-3.5 transition-colors flex gap-2.5 relative cursor-pointer">
      {/* Vote Bar */}
      <div className="flex flex-col items-center bg-[#272729]/30 rounded-full px-1 py-1.5 h-fit text-[#818384] select-none">
        <button
          className="p-1 hover:text-[#ff4500] hover:bg-[#272729] rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onVote?.(camp, "up");
          }}
        >
          <ArrowUp className="h-4 w-4 stroke-[2.5]" />
        </button>

        <span className="text-xs font-bold my-0.5 min-w-[24px] text-center text-[#d7dadc]">
          {camp.metrics.votes}
        </span>

        <button
          className="p-1 hover:text-[#7193ff] hover:bg-[#272729] rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onVote?.(camp, "down");
          }}
        >
          <ArrowDown className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Content */}
      <Link
        to={`communities/${camp.community.slug}/camps/${camp.slug}`}
        className="flex-1 min-w-0 space-y-2"
      >
        <div className="flex items-center gap-1.5 text-xs text-[#818384]">
          <span className="font-bold text-[#d7dadc]">
            c/{camp.community.name}
          </span>

          <span>•</span>

          <span>u/{camp.author.username}</span>

          <span>•</span>

          <span>{camp.createdAt}</span>
        </div>

        <div className="space-y-1">
          <h2 className="text-[16px] font-semibold text-white">{camp.title}</h2>

          <p className="text-xs text-[#b3b3b3] leading-relaxed line-clamp-3">
            {camp.content}
          </p>
        </div>

        {camp.media?.length > 0 && (
          <img
            src={camp.media[0].url}
            alt={camp.title}
            className="w-full rounded-xl border border-[#343536] object-cover max-h-96"
          />
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1 text-xs font-bold text-[#818384]">
          <button
            className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onComment?.(camp);
            }}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{camp.metrics.comments}</span>
          </button>

          <button
            className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onShare?.(camp);
            }}
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>

          <button
            className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSave?.(camp);
            }}
          >
            <Bookmark className="h-4 w-4" />
            <span>Save</span>
          </button>

          <button
            className="ml-auto p-2 hover:bg-[#272729] rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onMenu?.(camp);
            }}
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </Link>
    </article>
  );
}
