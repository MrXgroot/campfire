import { useCommunityForm } from "./useCommunityForm";
import { useCommunityMedia } from "./useCommunityMedia";
import { useCommunitySubmission } from "./useCommunityActions";

export const useCreateCommunityController = () => {
  const form = useCommunityForm();
  const media = useCommunityMedia();
  const actions = useCommunitySubmission();

  return {
    form,
    media,
    actions,
  };
};
