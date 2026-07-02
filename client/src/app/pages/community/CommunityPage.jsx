import React from "react";
import CampFeed from "../../../features/camp/CampFeed";
import { mockCommunity } from "../../../mocks/community.mock";
import CommunityHero from "../../../features/community/CommunityDetails/components/Hero";
import CommunitySidebar from "../../../features/community/CommunityDetails/components/Sidebar";
import CommunityToolbar from "../../../features/community/CommunityDetails/components/Toolbar";
export default function CommunityPage() {
  const community = mockCommunity;

  return (
    <div className="min-h-screen bg-[#030303] text-[#d7dadc] font-sans antialiased selection:bg-[#343536]">
      {/* 1. Hero / Banner occupies full viewport width above columns */}
      <CommunityHero community={community} />

      {/* 2. Structured App Column Content Layout Frame */}
      <div className="max-w-[1248px] mx-auto px-6 py-5 flex justify-center gap-6">
        {/* Main Feed Column (Toolbar + Post List Content) */}
        <main className="flex-1 max-w-[640px] space-y-4">
          <CommunityToolbar community={community} />
          <CampFeed />
        </main>

        {/* Right Info Card Column */}
        <CommunitySidebar community={community} />
      </div>
    </div>
  );
}
