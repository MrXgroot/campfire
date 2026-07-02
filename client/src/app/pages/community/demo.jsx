import ImageAdjuster from "../../../shared/ImageAdjuster";

import CreateCommunityHeader from "../../../features/community/components/CreateCommunity/CreateCommunityHeader";
import CommunityMediaSection from "../../../features/community/components/CreateCommunity/CommunityMediaSection";
import CommunityForm from "../../../features/community/components/CreateCommunity/CommunityForm";
import CommunityActions from "../../../features/community/components/CreateCommunity/CommunityActions";

import { useCreateCommunityStore } from "../../../features/community/store/useCreateCommunityStore";
import { useCreateCommunityMutation } from "../../../features/community/hooks/useCreateCommunityMutation";

export default function CreateCommunityPage() {
  const createCommunityMutation = useCreateCommunityMutation();

  const {
    formData,
    images,

    activeAdjuster,
    rawImageSrc,

    setField,
    setImage,

    openAdjuster,
    closeAdjuster,

    removeImage,
    reset,
  } = useCreateCommunityStore();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setField(name, value);
  };

  const handleImageChange = (event, type) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    openAdjuster(type, preview);
  };

  const handleImageSave = (croppedImage) => {
    setImage(activeAdjuster, croppedImage, croppedImage);
    closeAdjuster();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData();

    form.append("name", formData.name);
    form.append("description", formData.description);

    if (images.avatarFile) {
      form.append("avatar", images.avatarFile);
    }

    if (images.bannerFile) {
      form.append("banner", images.bannerFile);
    }

    createCommunityMutation.mutate(form, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black text-stone-200 font-sans p-8 md:p-12 border border-stone-900 rounded-3xl shadow-2xl relative">
      <CreateCommunityHeader />

      <form onSubmit={handleSubmit} className="space-y-8">
        <CommunityMediaSection
          images={images}
          onImageChange={handleImageChange}
          onRemoveImage={removeImage}
        />

        <hr className="border-stone-900" />

        <CommunityForm formData={formData} onInputChange={handleInputChange} />

        <CommunityActions isSubmitting={createCommunityMutation.isPending} />
      </form>

      {activeAdjuster && (
        <ImageAdjuster
          imageSrc={rawImageSrc}
          aspect={activeAdjuster === "avatar" ? 1 : 3 / 1}
          onSave={handleImageSave}
          onClose={closeAdjuster}
        />
      )}
    </div>
  );
}
