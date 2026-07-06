import useAppLayoutStore from "../store/useAppLayoutStore";
export default function SidebarOverlay() {
  const { isSidebarOpen, closeSidebar } = useAppLayoutStore();

  return (
    <div
      onClick={closeSidebar}
      className={`
        fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden
        ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    />
  );
}
