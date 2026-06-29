import { useQuery } from "@tanstack/react-query";

import { getCommunityBySlug } from "../../api/community.api";

export const useCommunity = (slug) => {
  return useQuery({
    queryKey: ["community", slug],
    queryFn: () => getCommunityBySlug(slug),
    enabled: !!slug,
  });
};
