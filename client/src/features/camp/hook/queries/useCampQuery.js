import { useQuery } from "@tanstack/react-query";

import * as CampApi from "../../api/camp.api";

export function useCampQuery(params = {}) {
  return useQuery({
    queryKey: ["camps", params],
    queryFn: () => CampApi.getCamps(params),

    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
