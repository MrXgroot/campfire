// hooks/useCreateCommunityMutation.js

import { useMutation } from "@tanstack/react-query";

import { createCommunity } from "../api/createCommunity.api";

export const useCreateCommunityMutation = () => {
  return useMutation({
    mutationFn: createCommunity,
  });
};
