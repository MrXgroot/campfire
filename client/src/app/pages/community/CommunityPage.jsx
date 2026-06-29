import React from "react";
import CommunityHero from "../../../features/community/components/Hero";
import CommunityToolbar from "../../../features/community/components/Toolbar";
import CommunitySidebar from "../../../features/community/components/Sidebar";
import { mockCommunity } from "../../../mocks/community.mock";
import { mockCommunityCamps } from "../../../mocks/community.mock";
const CommunityPage = () => {
  return (
    <>
      <CommunityHero community={community} />

      <CommunityToolbar community={community} />

      {/* <CommunityFeed communitySlug={community.slug} /> */}

      <CommunitySidebar community={community} />
    </>
  );
};

export default CommunityPage;
