import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as CampApi from "../../api/camp.api";

export function useUpdateCampMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campId, campData }) => CampApi.updateCamp(campId, campData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["camps"],
      });
    },
  });
}
