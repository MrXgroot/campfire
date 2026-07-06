import { useQuery } from "@tanstack/react-query";

import { getCampFeed } from "../api/campFeed.api";

export default function useCampFeed(params = {}) {
  return useQuery({
    queryKey: ["camp-feed", params],
    queryFn: () => getCampFeed(params),
  });
}
