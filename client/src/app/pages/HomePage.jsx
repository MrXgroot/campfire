//=============
// File: HomePage.jsx
//=============

import React, { useState } from "react";
import {
  Flame,
  MessageSquare,
  Share2,
  ArrowUp,
  ArrowDown,
  Search,
  Bell,
  Plus,
  Home,
  TrendingUp,
  Compass,
  ChevronDown,
  MoreHorizontal,
  Bookmark,
  Menu,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("for-you");

  const mockPosts = [
    {
      id: 1,
      author: "alex_dev",
      camp: "javascript",
      time: "2 hours ago",
      title:
        "Why Signals might completely replace standard state management in 2026",
      content:
        "After rewriting our core internal dashboard using Signals, the memory footprint dropped drastically. No more unnecessary re-renders across parent components. What's your take on the current state of vanilla React state?",
      upvotes: 342,
      comments: 89,
      userVoted: "up",
    },
    {
      id: 2,
      author: "sarah_pixels",
      camp: "webgl_creations",
      time: "5 hours ago",
      title: "Finished rendering my latest abstract fluid simulation!",
      content:
        "Used custom shaders to mimic a digital campfire effect. Heavy math on the fragment shader, but optimized it enough to hit a locked 120fps on mobile browsers. Code breakdown coming tonight.",
      upvotes: 512,
      comments: 43,
      userVoted: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#d7dadc] font-sans antialiased selection:bg-[#343536]">
      {/* =========================================
          GLOBAL TOP NAVIGATION BAR
         ========================================= */}
      <header className="sticky top-0 z-50 h-14 bg-[#1a1a1b] border-b border-[#343536] px-5 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2 min-w-[140px]">
          <button className="p-2 -ml-2 text-zinc-400 hover:bg-[#272729] rounded-full lg:hidden">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ff4500] flex items-center justify-center shadow-lg shadow-orange-950/20">
              <Flame className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="text-[18px] font-black tracking-tight text-white hidden sm:block font-sans lowercase">
              campfire
            </span>
          </a>
        </div>

        {/* Center Section: Search Bar */}
        <div className="relative max-w-[690px] w-full mx-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#818384]" />
          <input
            type="text"
            placeholder="Search Campfire"
            className="w-full h-10 bg-[#272729] hover:bg-[#2d2d30] border border-[#343536] focus:border-[#d7dadc] focus:bg-[#1a1a1b] rounded-full pl-11 pr-4 text-sm text-[#d7dadc] placeholder-[#818384] focus:outline-none transition-colors"
          />
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 text-white hover:bg-[#272729] rounded-full"
            title="Popular Feed"
          >
            <TrendingUp className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-white hover:bg-[#272729] rounded-full"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button className="hidden md:flex items-center gap-1.5 bg-[#d7dadc] hover:bg-white text-[#1a1a1b] text-xs font-bold px-4 py-1.5 rounded-full transition-colors ml-2">
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Create Post</span>
          </button>

          {/* Profile Dropdown Trigger */}
          <button className="flex items-center gap-1 p-1 hover:border-[#343536] border border-transparent rounded-sm transition-colors ml-2">
            <div className="w-6 h-6 rounded-sm bg-[#ff4500] overflow-hidden">
              <div className="w-full h-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                U
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#818384] hidden sm:block" />
          </button>
        </div>
      </header>

      {/* =========================================
          THREE COLUMN MAIN APP LAYOUT
         ========================================= */}
      <div className="max-w-[1248px] mx-auto px-6 flex justify-center gap-6">
        {/* LEFT COLUMN: NAVIGATION SIDEBAR */}
        <aside className="w-[240px] shrink-0 hidden lg:flex flex-col pt-5 text-sm sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
          <div className="space-y-0.5 pr-2">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-[#272729] text-white font-medium text-left">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 text-left transition-colors">
              <TrendingUp className="w-5 h-5 text-[#818384]" />
              <span>Popular</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 text-left transition-colors">
              <Compass className="w-5 h-5 text-[#818384]" />
              <span>Explore</span>
            </button>
          </div>

          <hr className="border-[#343536] my-4 mr-2" />

          <div className="space-y-0.5 pr-2">
            <p className="px-3 text-[10px] font-bold text-[#818384] uppercase tracking-wider mb-2">
              Camps
            </p>
            {["javascript", "webgl_creations", "reactjs", "nextjs"].map(
              (camp) => (
                <button
                  key={camp}
                  className="w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-[#d7dadc] hover:bg-[#272729]/60 text-left text-xs transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-[#ff4500] text-[8px] text-white flex items-center justify-center font-bold">
                    c/
                  </span>
                  <span className="truncate">c/{camp}</span>
                </button>
              ),
            )}
          </div>
        </aside>

        {/* CENTER COLUMN: PRIMARY STREAM */}
        <main className="flex-1 max-w-[640px] pt-5 space-y-4">
          {/* Sub-Tab Selector Menu */}
          <div className="flex gap-4 border-b border-[#343536] text-sm font-bold select-none px-2">
            <button
              onClick={() => setActiveTab("for-you")}
              className={`pb-3 relative transition-colors ${activeTab === "for-you" ? "text-white" : "text-[#818384] hover:text-[#d7dadc]"}`}
            >
              <span>For You</span>
              {activeTab === "for-you" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("following")}
              className={`pb-3 relative transition-colors ${activeTab === "following" ? "text-white" : "text-[#818384] hover:text-[#d7dadc]"}`}
            >
              <span>Following</span>
              {activeTab === "following" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          </div>

          {/* Posts Stream Content */}
          <section
            className="space-y-2.5"
            aria-label="Campfire Activity Stream Feed"
          >
            {mockPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#1a1a1b] hover:bg-[#222224] border border-[#343536] rounded-2xl p-3.5 transition-colors flex gap-2.5 relative cursor-pointer"
              >
                {/* Embedded Left Vote Column */}
                <div className="flex flex-col items-center bg-[#272729]/30 rounded-full px-1 py-1.5 h-fit text-[#818384] select-none z-10">
                  <button
                    className={`p-1 hover:text-[#ff4500] hover:bg-[#272729] rounded-full transition-colors ${post.userVoted === "up" ? "text-[#ff4500]" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Upvote"
                  >
                    <ArrowUp className="h-4 w-4 stroke-[2.5]" />
                  </button>
                  <span
                    className={`text-xs font-bold my-0.5 tracking-tight min-w-[24px] text-center ${post.userVoted === "up" ? "text-[#ff4500]" : "text-[#d7dadc]"}`}
                  >
                    {post.upvotes}
                  </span>
                  <button
                    className="p-1 hover:text-[#7193ff] hover:bg-[#272729] rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Downvote"
                  >
                    <ArrowDown className="h-4 w-4 stroke-[2.5]" />
                  </button>
                </div>

                {/* Right Area: Content Layout */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  {/* Community Sub-line Meta Header */}
                  <div className="flex items-center gap-1.5 text-xs text-[#818384]">
                    <a
                      href={`/c/${post.camp}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-bold text-[#d7dadc] hover:underline"
                    >
                      c/{post.camp}
                    </a>
                    <span>•</span>
                    <span className="truncate">{post.time}</span>
                    <span>•</span>
                    <span className="truncate">by u/{post.author}</span>
                  </div>

                  {/* Text Blocks */}
                  <div className="space-y-1">
                    <h2 className="text-[16px] leading-[20px] font-semibold text-white tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#b3b3b3] font-normal leading-relaxed line-clamp-3">
                      {post.content}
                    </p>
                  </div>

                  {/* Operational Action Sub-metrics Toolbar */}
                  <div className="flex items-center gap-2 pt-1 text-xs text-[#818384] font-bold select-none z-10">
                    <button className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors">
                      <MessageSquare className="h-4 w-4 text-[#818384]" />
                      <span>{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors">
                      <Share2 className="h-4 w-4 text-[#818384]" />
                      <span>Share</span>
                    </button>

                    <button className="flex items-center gap-2 bg-[#272729]/40 hover:bg-[#272729] px-3 py-2 rounded-full transition-colors">
                      <Bookmark className="h-4 w-4 text-[#818384]" />
                      <span>Save</span>
                    </button>

                    <button
                      className="ml-auto p-2 text-[#818384] hover:bg-[#272729] rounded-full transition-colors"
                      aria-label="More Options"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        {/* RIGHT COLUMN: SIDEBAR CONTEXT CARD */}
        <aside className="w-[312px] shrink-0 hidden xl:flex flex-col pt-5 text-xs sticky top-14 h-[calc(100vh-56px)]">
          <div className="bg-[#1a1a1b] border border-[#343536] rounded-2xl p-4 space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#818384] uppercase mb-1">
                Rules & Framework
              </p>
              <h3 className="text-[#d7dadc] font-bold tracking-tight text-sm">
                Welcome to c/Home
              </h3>
            </div>
            <p className="text-[#818384] leading-relaxed text-xs">
              Your personal Campfire frontpage. Come here to gather and check in
              with your favorite technology segments.
            </p>
            <div className="border-t border-[#343536] pt-3 space-y-2">
              <div className="flex justify-between text-[#d7dadc]">
                <span>Creators Online</span>
                <span className="font-bold text-emerald-500">24.2k</span>
              </div>
            </div>
          </div>

          <div className="px-3 mt-4 text-[#818384] text-[11px] leading-normal font-sans space-y-1 select-none">
            <p>© 2026 Campfire, Inc. All rights reserved.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
