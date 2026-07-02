import { useQuery } from "@tanstack/react-query";

import { getCommunities } from "../../api/community.api";

export const useCommunities = (params = {}) => {
  return useQuery({
    queryKey: ["communities", params],
    queryFn: () => getCommunities(params),
  });
};
