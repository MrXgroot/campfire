import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCommunity } from "../../api/community.api";

export const useCreateCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCommunity,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["communities"],
      });
    },
  });
};
