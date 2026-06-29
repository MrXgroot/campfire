import React from "react";
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

export default function CommunityFeed({ camps, activeTab }) {
  if (activeTab === "pinned") {
    return (
      <div className="text-center py-8 text-zinc-500 text-xs border border-dashed border-[#343536] rounded-2xl">
        No pinned system documentation found here.
      </div>
    );
  }

  return (
    <section className="space-y-2.5">
      {camps.map((post) => (
        <article
          key={post.id}
          className="bg-[#1a1a1b] hover:bg-[#222224] border border-[#343536] rounded-2xl p-3.5 transition-colors flex gap-2.5 relative cursor-pointer shadow-sm"
        >
          {/* Internal Upvote Tracks */}
          <div className="flex flex-col items-center bg-[#272729]/30 rounded-full px-1 py-1.5 h-fit text-[#818384] select-none z-10">
            <button
              className={`p-1 hover:text-[#ff4500] hover:bg-[#272729] rounded-full transition-colors ${post.userVoted === "up" ? "text-[#ff4500]" : ""}`}
            >
              <ArrowUp className="h-4 w-4 stroke-[2.5]" />
            </button>
            <span
              className={`text-xs font-bold my-0.5 tracking-tight min-w-[24px] text-center ${post.userVoted === "up" ? "text-[#ff4500]" : "text-[#d7dadc]"}`}
            >
              {post.upvotes}
            </span>
            <button className="p-1 hover:text-[#7193ff] hover:bg-[#272729] rounded-full transition-colors">
              <ArrowDown className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Text Content Block */}
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-[#818384]">
              <span className="font-bold text-[#d7dadc]">c/{post.camp}</span>
              <span>•</span>
              <span className="truncate">by u/{post.author}</span>
              <span>•</span>
              <span className="truncate">{post.time}</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-[16px] leading-[20px] font-semibold text-white tracking-tight">
                {post.title}
              </h2>
              <p className="text-xs text-[#b3b3b3] font-normal leading-relaxed line-clamp-3">
                {post.content}
              </p>
            </div>

            {/* Sub-Metrics Controls */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#818384] font-bold select-none z-10">
              <button className="flex items-center gap-1.5 bg-[#272729]/40 hover:bg-[#272729] px-3 py-1.5 rounded-full transition-colors">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#272729]/40 hover:bg-[#272729] px-3 py-1.5 rounded-full transition-colors">
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#272729]/40 hover:bg-[#272729] px-3 py-1.5 rounded-full transition-colors">
                <Bookmark className="h-3.5 w-3.5" />
                <span>Save</span>
              </button>
              <button className="ml-auto p-1.5 text-[#818384] hover:bg-[#272729] rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
