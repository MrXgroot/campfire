import { useQuery } from "@tanstack/react-query";

import * as CampApi from "../../api/camp.api";

export function useCampBySlugQuery(slug) {
  return useQuery({
    queryKey: ["camp", slug],
    queryFn: () => CampApi.getCampBySlug(slug),

    enabled: !!slug,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
}
