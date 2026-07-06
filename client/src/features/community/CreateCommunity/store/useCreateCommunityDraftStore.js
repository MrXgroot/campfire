import { create } from "zustand";

const initialDraft = {
  name: "",
  description: "",

  avatar: {
    preview: null,
    file: null,
  },

  banner: {
    preview: null,
    file: null,
  },
};

export const useCreateCommunityDraftStore = create((set) => ({
  draft: initialDraft,

  changeName: (name) =>
    set((state) => ({
      draft: {
        ...state.draft,
        name,
      },
    })),

  changeDescription: (description) =>
    set((state) => ({
      draft: {
        ...state.draft,
        description,
      },
    })),

  setAvatar: (preview, file) =>
    set((state) => ({
      draft: {
        ...state.draft,
        avatar: {
          preview,
          file,
        },
      },
    })),

  removeAvatar: () =>
    set((state) => ({
      draft: {
        ...state.draft,
        avatar: {
          preview: null,
          file: null,
        },
      },
    })),

  setBanner: (preview, file) =>
    set((state) => ({
      draft: {
        ...state.draft,
        banner: {
          preview,
          file,
        },
      },
    })),

  removeBanner: () =>
    set((state) => ({
      draft: {
        ...state.draft,
        banner: {
          preview: null,
          file: null,
        },
      },
    })),

  reset: () =>
    set({
      draft: initialDraft,
    }),
}));
