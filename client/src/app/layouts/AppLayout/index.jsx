import { Outlet } from "react-router-dom";

import Navbar from "../../../shared/Navbar";
import Sidebar from "../../../shared/layout/Sidebar";

import AppBody from "./component/AppBody";
import MainContent from "./component/MainContent";
import DesktopSidebar from "./component/DesktopSidebar";
import MobileSidebar from "./component/MobileSidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen flex-col bg-[#030303] text-[#d7dadc]">
      <Navbar />

      <MobileSidebar>
        <Sidebar />
      </MobileSidebar>

      <AppBody>
        <DesktopSidebar>
          <Sidebar />
        </DesktopSidebar>

        <MainContent>
          <Outlet />
        </MainContent>
      </AppBody>
    </div>
  );
}

//TODO : scroll mainBody scroll issue
