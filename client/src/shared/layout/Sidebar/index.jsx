import PrimaryNavigation from "./components/PrimaryNavigation";
import CommunityNavigation from "./components/CommunityNavigation";
export default function Sidebar() {
  return (
    <aside className="flex h-full w-full flex-col px-2 py-6">
      <PrimaryNavigation />

      <div className="my-6 border-t border-[#1D2126]" />

      <CommunityNavigation />
    </aside>
  );
}
