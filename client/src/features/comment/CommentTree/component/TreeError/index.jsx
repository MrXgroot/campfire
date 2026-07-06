import { TriangleAlert } from "lucide-react";

export default function CommentTreeError({ onRetry }) {
  return (
    <div className="py-16 text-center">
      <TriangleAlert size={36} className="mx-auto text-red-400" />

      <h3 className="mt-4 text-lg font-medium text-[#ECE8DF]">
        Failed to load comments
      </h3>

      <p className="mt-2 text-sm text-[#93979C]">
        Something went wrong while loading the discussion.
      </p>

      <button
        onClick={onRetry}
        className="mt-6 rounded border border-[#2A2F35] px-4 py-2 text-sm text-[#ECE8DF] hover:bg-[#1D2126] transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
