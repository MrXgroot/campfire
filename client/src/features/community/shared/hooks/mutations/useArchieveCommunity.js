import { useMutation, useQueryClient } from "@tanstack/react-query";

import { archiveCommunity } from "../../api/community.api";

export const useArchiveCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: archiveCommunity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["communities"],
      });
    },
  });
};
