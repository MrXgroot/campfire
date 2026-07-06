import useAppLayoutStore from "../../store/useAppLayoutStore";

export default function MobileSidebar({ children }) {
  const isSidebarOpen = useAppLayoutStore((state) => state.isSidebarOpen);

  const closeSidebar = useAppLayoutStore((state) => state.closeSidebar);

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 z-40
          bg-black/50
          transition-opacity duration-300

          ${
            isSidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-72
          overflow-y-auto
          border-r border-[#1D2126]
          bg-[#030303]
          transition-transform duration-300 ease-out

          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {children}
      </aside>
    </div>
  );
}
