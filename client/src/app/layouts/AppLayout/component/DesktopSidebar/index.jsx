export default function DesktopSidebar({ children }) {
  return (
    <aside
      className="
        hidden
        lg:block
        w-72
        shrink-0
        sticky
        top-14
        h-[calc(100vh-56px)]
        overflow-y-auto
      "
    >
      {children}
    </aside>
  );
}
