export default function AppBody({ children }) {
  return (
    <div className="flex-1 h-full">
      <div className="mx-auto h-full flex gap-6 px-6">{children}</div>
    </div>
  );
}
