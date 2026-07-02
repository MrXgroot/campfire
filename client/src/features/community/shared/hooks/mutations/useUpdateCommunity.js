import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCommunity } from "../../api/community.api";

export const useUpdateCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ communityId, data }) => updateCommunity(communityId, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["communities"],
      });

      queryClient.invalidateQueries({
        queryKey: ["community", variables.communityId],
      });
    },
  });
};
