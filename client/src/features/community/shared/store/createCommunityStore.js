import { create } from "zustand";

const initialFormData = {
  name: "",
  description: "",
};

const initialImages = {
  avatar: null,
  avatarFile: null,
  banner: null,
  bannerFile: null,
};

export const useCreateCommunityStore = create((set) => ({
  // ============================================================
  // Form State
  // ============================================================

  formData: initialFormData,

  setField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),

  resetForm: () =>
    set({
      formData: initialFormData,
    }),

  // ============================================================
  // Image State
  // ============================================================

  images: initialImages,

  setImage: (type, preview, file) =>
    set((state) => ({
      images: {
        ...state.images,
        [type]: preview,
        [`${type}File`]: file,
      },
    })),

  removeImage: (type) =>
    set((state) => ({
      images: {
        ...state.images,
        [type]: null,
        [`${type}File`]: null,
      },
    })),

  resetImages: () =>
    set({
      images: initialImages,
    }),

  // ============================================================
  // Cropper State
  // ============================================================

  activeAdjuster: null,
  rawImageSrc: null,

  openAdjuster: (type, imageSrc) =>
    set({
      activeAdjuster: type,
      rawImageSrc: imageSrc,
    }),

  closeAdjuster: () =>
    set({
      activeAdjuster: null,
      rawImageSrc: null,
    }),

  // ============================================================
  // Feature Reset
  // ============================================================

  reset: () =>
    set({
      formData: initialFormData,
      images: initialImages,
      activeAdjuster: null,
      rawImageSrc: null,
    }),
}));
