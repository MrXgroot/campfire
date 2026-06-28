import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as CampApi from "../../api/camp.api";

export function useCreateCampMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CampApi.createCamp,

    onMutate: async (campData) => {
      await queryClient.cancelQueries({
        queryKey: ["camps"],
      });

      const previousCamps = queryClient.getQueryData(["camps"]);

      queryClient.setQueryData(["camps"], (old) => {
        if (!old) return old;

        return {
          ...old,
          data: {
            ...old.data,
            camps: [
              {
                ...campData,
                id: crypto.randomUUID(),
                optimistic: true,
              },
              ...old.data.camps,
            ],
          },
        };
      });

      return { previousCamps };
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData(["camps"], context.previousCamps);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["camps"],
      });
    },
  });
}
