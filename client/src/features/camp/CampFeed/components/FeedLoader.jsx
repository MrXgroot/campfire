export default function FeedLoader() {
  return (
    <section className="space-y-2.5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-[#1a1a1b] border border-[#343536] rounded-2xl p-4"
        >
          <div className="h-3 w-40 bg-[#343536] rounded mb-4" />

          <div className="h-5 w-3/4 bg-[#343536] rounded mb-3" />

          <div className="space-y-2">
            <div className="h-3 bg-[#343536] rounded" />
            <div className="h-3 bg-[#343536] rounded w-5/6" />
            <div className="h-3 bg-[#343536] rounded w-2/3" />
          </div>

          <div className="flex gap-3 mt-6">
            <div className="h-8 w-20 bg-[#343536] rounded-full" />
            <div className="h-8 w-20 bg-[#343536] rounded-full" />
            <div className="h-8 w-20 bg-[#343536] rounded-full" />
          </div>
        </div>
      ))}
    </section>
  );
}
