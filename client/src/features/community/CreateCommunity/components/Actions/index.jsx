export default function CommunityActions({ actions, onCreate }) {
  const handleSubmit = () => {
    actions.submit();
    onCreate();
  };
  return (
    <div className="flex items-center justify-end gap-4 pt-4">
      <button
        type="button"
        className="px-4 py-2.5 rounded-xl text-xs font-medium text-stone-500 hover:text-stone-300 transition duration-200"
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleSubmit}
        className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-stone-200 transition duration-200 active:scale-[0.98]"
      >
        Create Campfire
      </button>
    </div>
  );
}
