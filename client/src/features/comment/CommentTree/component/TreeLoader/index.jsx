export default function CommentTreeLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="py-4">
          <div className="h-3 w-32 rounded bg-[#1D2126]" />

          <div className="mt-4 space-y-2">
            <div className="h-3 w-full rounded bg-[#1D2126]" />
            <div className="h-3 w-5/6 rounded bg-[#1D2126]" />
          </div>

          <div className="mt-4 h-3 w-20 rounded bg-[#1D2126]" />
        </div>
      ))}
    </div>
  );
}
