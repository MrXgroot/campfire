import { Plus } from "lucide-react";

import { subscribedCommunities } from "../data";
import CommunityItem from "./CommunityItem";

export default function CommunityNavigation() {
  return (
    <section className="space-y-1">
      <div className="mb-4 flex items-center justify-between px-3">
        <h2 className="text-sm font-semibold tracking-tight text-[#8B949E]">
          Communities
        </h2>

        <button
          className="
            rounded-lg
            p-1.5
            text-[#8B949E]
            transition-colors
            hover:bg-[#1D2126]
            hover:text-white
          "
          aria-label="Discover communities"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="space-y-1">
        {subscribedCommunities.map((community) => (
          <CommunityItem key={community.id} community={community} />
        ))}
      </div>
    </section>
  );
}
