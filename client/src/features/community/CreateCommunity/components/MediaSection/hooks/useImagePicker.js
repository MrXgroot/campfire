import { useRef } from "react";
import { useMediaWorkflowStore } from "../store/useMediaWorkflowStore";

export const useImagePicker = (target) => {
  const inputRef = useRef(null);

  const selectImage = useMediaWorkflowStore((state) => state.selectImage);

  const openPicker = () => {
    inputRef.current?.click();
  };

  const handleChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    selectImage({
      target,
      file,
    });

    // Allows selecting the same image twice
    event.target.value = "";
  };

  return {
    inputRef,
    openPicker,
    handleChange,
  };
};
