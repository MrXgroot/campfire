import React, { useState } from "react";
import CommunityHero from "./CommunityHero";
import CommunityToolbar from "./CommunityToolbar";
import CommunityFeed from "./CommunityFeed";
import CommunitySidebar from "./CommunitySidebar";

// Contract Shared Mock Context (Can be replaced with API fetches)
import { mockCommunity, mockCommunityCamps } from "../mockData";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("all-camps");
  const [camps, setCamps] = useState(mockCommunityCamps);

  return (
    <div className="max-w-[1248px] mx-auto px-6 flex justify-center gap-6 pt-5 pb-12 bg-[#030303] text-[#d7dadc]">
      {/* Dynamic Main Center Stack */}
      <div className="flex-1 max-w-[640px] space-y-4">
        <CommunityHero community={mockCommunity} />

        <CommunityToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          campCount={camps.length}
        />

        <CommunityFeed camps={camps} activeTab={activeTab} />
      </div>

      {/* Right Layout Context Meta-Panel */}
      <CommunitySidebar community={mockCommunity} />
    </div>
  );
}
