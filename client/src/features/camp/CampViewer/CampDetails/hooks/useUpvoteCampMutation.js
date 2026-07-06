import { useMutation, useQueryClient } from "@tanstack/react-query";
import { upvoteCamp } from "../api/campViewer.api";
export function useUpvoteCampMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campSlug }) => upvoteCamp(campSlug),

    onSuccess: (_, { campSlug }) => {
      queryClient.invalidateQueries({
        queryKey: ["camp", campSlug],
      });

      queryClient.invalidateQueries({
        queryKey: ["camp-feed"],
      });
    },
  });
}
