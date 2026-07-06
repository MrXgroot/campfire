export const buildCommunityPayload = (draft) => {
  const formData = new FormData();

  formData.append("name", draft.name);
  formData.append("description", draft.description);

  if (draft.avatar.file) {
    formData.append("avatar", draft.avatar.file);
  }

  if (draft.banner.file) {
    formData.append("banner", draft.banner.file);
  }

  return formData;
};
