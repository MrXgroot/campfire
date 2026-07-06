import { useCreateCommunityDraftStore } from "../store/useCreateCommunityDraftStore";
import { useCreateCommunityMutation } from "./useCreateCommunityMutation";
import { buildCommunityPayload } from "../utils/buildCommunityPayload";

export const useCommunitySubmission = () => {
  const draft = useCreateCommunityDraftStore((state) => state.draft);
  const reset = useCreateCommunityDraftStore((state) => state.reset);

  const mutation = useCreateCommunityMutation();

  const submit = () => {
    const payload = buildCommunityPayload(draft);

    mutation.mutate(payload, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return {
    submit,
    isPending: mutation.isPending,
    error: mutation.error,
  };
};
