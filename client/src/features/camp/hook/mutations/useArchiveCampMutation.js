import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as CampApi from "../../api/camp.api";

export function useArchiveCampMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CampApi.archiveCamp,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["camps"],
      });
    },
  });
}
