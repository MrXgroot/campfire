import { useMediaWorkflowStore } from "../store/useMediaWorkflowStore";

export const useMediaCommit = (media) => {
  const target = useMediaWorkflowStore((s) => s.target);
  const reset = useMediaWorkflowStore((s) => s.reset);

  const commit = ({ preview, file }) => {
    if (target === "avatar") {
      media.setAvatar(preview, file);
    } else {
      media.setBanner(preview, file);
    }

    reset();
  };

  return {
    commit,
  };
};
