export default function FeedError({
  message = "Something went wrong while loading camps.",
  onRetry,
}) {
  return (
    <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6 text-center">
      <h2 className="text-lg font-semibold text-red-300">
        Failed to load camps
      </h2>

      <p className="mt-2 text-sm text-red-200">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-white transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
