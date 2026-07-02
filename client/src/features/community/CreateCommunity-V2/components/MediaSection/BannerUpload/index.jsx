import { UploadCloud, X } from "lucide-react";

export default function CommunityBannerUpload({ media, picker }) {
  return (
    <>
      <input
        ref={picker.inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={picker.handleChange}
      />

      <div className="flex flex-col gap-2 md:col-span-2">
        <span className="text-xs font-medium text-stone-400 tracking-wide">
          Cover Art
        </span>

        <div
          onClick={picker.openPicker}
          className="group relative h-24 rounded-2xl border border-dashed border-stone-800 bg-stone-950 hover:border-orange-500/50 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300"
        >
          {media.banner.preview ? (
            <>
              <img
                src={media.banner.preview}
                alt="Community Banner"
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  media.removeBanner();
                }}
                className="absolute top-2 right-2 p-1 rounded-md bg-stone-900/80 text-stone-400 hover:text-white backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-stone-500 group-hover:text-stone-300 transition-colors">
              <UploadCloud size={16} />
              <span className="text-xs font-medium">
                Select background image
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
