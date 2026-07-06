import { MessageSquare } from "lucide-react";

export default function CommentTreeEmpty() {
  return (
    <div className="py-16 text-center">
      <MessageSquare size={36} className="mx-auto text-[#5A5E63]" />

      <h3 className="mt-4 text-lg font-medium text-[#ECE8DF]">
        No discussions yet
      </h3>

      <p className="mt-2 text-sm text-[#93979C]">
        Be the first to start the conversation.
      </p>
    </div>
  );
}
