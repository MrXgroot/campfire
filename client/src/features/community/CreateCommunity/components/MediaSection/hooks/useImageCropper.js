import { useMediaWorkflowStore } from "../store/useMediaWorkflowStore";

export const useImageCropper = () => {
  const image = useMediaWorkflowStore((state) => state.image);
  const target = useMediaWorkflowStore((state) => state.target);
  const cropper = useMediaWorkflowStore((state) => state.cropper);

  const closeCropper = useMediaWorkflowStore((state) => state.closeCropper);

  return {
    isOpen: cropper.isOpen,

    imageSrc: image.preview,

    target,

    closeCropper,
  };
};
