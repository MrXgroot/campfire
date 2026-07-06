import { useQuery } from "@tanstack/react-query";
import { getCampDetails } from "../api/campViewer.api";

export function useCampDetailsQuery(campSlug) {
  return useQuery({
    queryKey: ["camp", campSlug],
    queryFn: () => getCampDetails(campSlug),
    enabled: !!campSlug,
  });
}
