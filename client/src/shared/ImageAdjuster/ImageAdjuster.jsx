import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "./slider";
import { ZoomIn, ZoomOut, RotateCw, X, Check } from "lucide-react";

// Helper function to create the cropped image canvas
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  // Set canvas size to match the desired cropped size
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Draw the specific cropped region of the image onto the canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], `community-${Date.now()}.jpg`, {
        type: "image/jpeg",
      });

      resolve({
        preview: URL.createObjectURL(file),
        file,
      });
    }, "image/jpeg");
  });
}

export default function ImageAdjuster({
  imageSrc,
  aspect = 1,
  onSave,
  onClose,
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      );

      onSave(croppedImage);
    } catch (e) {
      console.error("Error cropping image:", e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-stone-950 border border-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-900 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">Adjust Image</h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Frame and position your artwork
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-900 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cropper Viewport Container */}
        <div className="relative w-full h-80 bg-stone-900 overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspect} // 1 for avatar (square), 16/9 or 3/1 for banners
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
            classes={{
              containerClassName: "bg-stone-900",
              cropAreaClassName:
                "border border-white/30 rounded-2xl shadow-[0_0_0_9999px_rgba(12,10,9,0.75)]",
              // Custom framing shadows to keep the UI looking moody and high-end
            }}
          />
        </div>

        {/* Adjustments Controls */}
        <div className="p-6 space-y-6">
          {/* Zoom Control */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-stone-400 font-medium tracking-wide">
              <span>Zoom</span>
              <span className="text-[10px] text-stone-600">
                {Math.round(zoom * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-4">
              <ZoomOut size={14} className="text-stone-600" />
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-label="Zoom"
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full h-1 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <ZoomIn size={14} className="text-stone-600" />
            </div>
          </div>

          {/* Tools & Rotation */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setRotation((prev) => (prev + 90) % 360)}
              className="flex items-center gap-2 text-xs font-medium text-stone-400 hover:text-stone-200 transition"
            >
              <RotateCw size={14} />
              <span>Rotate 90°</span>
            </button>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 border-t border-stone-900 bg-stone-950/50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-stone-500 hover:text-stone-300 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-stone-200 transition"
          >
            <Check size={14} strokeWidth={2.5} />
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
}
