import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Bell, Plus } from "lucide-react";

export function PopularAction() {
  return (
    <Link
      to="/popular"
      className="p-2 text-white hover:bg-[#272729] rounded-full transition-colors hidden xs:block"
      title="Popular Index"
    >
      <TrendingUp className="w-5 h-5" />
    </Link>
  );
}

export function NotificationsAction() {
  return (
    <Link
      to="/notifications"
      className="p-2 text-white hover:bg-[#272729] rounded-full transition-colors relative"
      title="Notifications"
    >
      <Bell className="w-5 h-5" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff4500]" />
    </Link>
  );
}

export function CreateCommunityAction() {
  return (
    <Link
      to="/login"
      className="hidden md:flex items-center gap-1.5 bg-[#d7dadc] hover:bg-white text-[#1a1a1b] text-xs font-bold px-4 py-1.5 rounded-full transition-colors ml-1"
    >
      <Plus className="w-4 h-4 stroke-[3]" />
      <span>Create Community</span>
    </Link>
  );
}
