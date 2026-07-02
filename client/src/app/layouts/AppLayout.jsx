import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSidebar from "../../shared/Sidebar/LeftSidebar";

export default function AppLayout() {
  const { pathname } = useLocation();

  const isCenteredPage = pathname === "/login" || pathname === "/register";

  const isWidePage = pathname === "/communities/create";

  return (
    <div className="h-screen flex flex-col bg-[#030303] text-[#d7dadc]">
      <Navbar />

      <div className="flex-1 overflow-y-auto review-scrollbar">
        {isCenteredPage ? (
          <main className="flex min-h-full items-center justify-center px-6 py-8">
            <Outlet />
          </main>
        ) : (
          <div className="mx-auto flex max-w-[1248px] gap-6 px-6">
            <LeftSidebar />

            <main
              className={`flex-1 min-w-0 pt-5 pb-12 ${
                isWidePage ? "max-w-4xl" : "max-w-[640px]"
              }`}
            >
              <Outlet />
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
