import { Outlet } from "react-router-dom";

import Navbar from "../../../shared/Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#d7dadc]">
      <Navbar />

      <main className="mx-auto max-w-7xl p-4">
        <Outlet />
      </main>
    </div>
  );
}
