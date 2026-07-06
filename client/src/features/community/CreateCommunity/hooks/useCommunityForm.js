import { useCreateCommunityDraftStore } from "../store/useCreateCommunityDraftStore";

export const useCommunityForm = () => {
  const { draft, changeName, changeDescription } =
    useCreateCommunityDraftStore();

  return {
    values: {
      name: draft.name,
      description: draft.description,
    },

    changeName,
    changeDescription,
  };
};
