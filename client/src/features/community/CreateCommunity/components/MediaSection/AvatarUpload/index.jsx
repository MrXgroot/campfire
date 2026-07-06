import { UploadCloud, X } from "lucide-react";

export default function CommunityAvatarUpload({ media, picker }) {
  return (
    <>
      <input
        ref={picker.inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={picker.handleChange}
      />

      <div className="flex flex-col gap-2 items-center">
        <span className="text-xs font-medium text-stone-400 tracking-wide">
          Avatar
        </span>

        <div
          onClick={picker.openPicker}
          className="group relative h-24 w-24 rounded-full border border-dashed border-stone-800 bg-stone-950 hover:border-orange-500/50 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300"
        >
          {media.avatar.preview ? (
            <>
              <img
                src={media.avatar.preview}
                alt="Community Avatar"
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  media.removeAvatar();
                }}
                className="absolute top-1 right-1 p-1 rounded-full bg-stone-900/80 text-stone-400 hover:text-white backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>
            </>
          ) : (
            <UploadCloud
              size={22}
              className="text-stone-500 group-hover:text-stone-300 transition-colors"
            />
          )}
        </div>
      </div>
    </>
  );
}
