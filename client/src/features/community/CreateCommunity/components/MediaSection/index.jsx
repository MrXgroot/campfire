import CommunityAvatarUpload from "./AvatarUpload";
import CommunityBannerUpload from "./BannerUpload";
import ImageAdjuster from "../../../../../shared/ImageAdjuster/ImageAdjuster";

import { useImagePicker } from "./hooks/useImagePicker";
import { useImageCropper } from "./hooks/useImageCropper";
import { useMediaCommit } from "./hooks/useMediaCommit";
export default function CommunityMediaSection({ media }) {
  const avatarPicker = useImagePicker("avatar");
  const bannerPicker = useImagePicker("banner");
  const commit = useMediaCommit(media);
  const cropper = useImageCropper();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <CommunityAvatarUpload media={media} picker={avatarPicker} />

        <CommunityBannerUpload media={media} picker={bannerPicker} />
      </div>

      {cropper.isOpen && (
        <ImageAdjuster
          imageSrc={cropper.imageSrc}
          aspect={cropper.target === "avatar" ? 1 : 16 / 9}
          onClose={cropper.closeCropper}
          onSave={commit.commit}
        />
      )}
    </>
  );
}
