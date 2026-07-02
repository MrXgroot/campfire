import { useCreateCommunityDraftStore } from "../store/useCreateCommunityDraftStore";

export const useCommunityMedia = () => {
  const {
    draft,

    setAvatar,
    removeAvatar,

    setBanner,
    removeBanner,
  } = useCreateCommunityDraftStore();

  return {
    avatar: draft.avatar,
    banner: draft.banner,

    setAvatar,
    removeAvatar,

    setBanner,
    removeBanner,
  };
};
