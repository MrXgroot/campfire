import { Flame } from "lucide-react";

export default function CreateCommunityHeader() {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 text-orange-500 mb-2">
        <Flame size={18} strokeWidth={2.5} />

        <span className="text-xs font-semibold tracking-widest uppercase">
          New Identity
        </span>
      </div>

      <h1 className="text-2xl font-light tracking-tight text-white">
        Create a Campfire
      </h1>

      <p className="text-sm text-stone-500 mt-1">
        Establish your space, set the mood, and invite your collective.
      </p>
    </div>
  );
}
