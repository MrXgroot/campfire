import { create } from "zustand";

const initialState = {
  target: null, // "avatar" | "banner"

  image: {
    file: null,
    preview: null,
  },

  cropper: {
    isOpen: false,
  },
};

export const useMediaWorkflowStore = create((set) => ({
  ...initialState,

  selectImage: ({ target, file }) =>
    set({
      target,

      image: {
        file,
        preview: URL.createObjectURL(file),
      },

      cropper: {
        isOpen: true,
      },
    }),

  closeCropper: () =>
    set((state) => ({
      ...state,

      cropper: {
        isOpen: false,
      },
    })),

  reset: () => {
    set((state) => {
      if (state.image.preview) {
        URL.revokeObjectURL(state.image.preview);
      }

      return initialState;
    });
  },
}));
