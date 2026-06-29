import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

export default function UserDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="relative ml-2">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 p-1 hover:border-[#343536] border border-transparent rounded-sm transition-colors focus:outline-none"
        aria-label="User Account Menu"
      >
        <div className="w-6 h-6 rounded-sm bg-gradient-to-tr from-orange-500 to-amber-600 overflow-hidden flex items-center justify-center text-xs font-bold text-zinc-950 font-mono select-none">
          U
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#818384] hidden sm:block" />
      </button>

      {dropdownOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={closeDropdown} />

          <div className="absolute right-0 mt-2 w-52 bg-[#1a1a1b] border border-[#343536] rounded-xl shadow-2xl z-50 py-1.5 overflow-hidden text-sm">
            <div className="px-3.5 py-2 border-b border-[#343536] select-none">
              <p className="text-xs text-[#818384]">Signed in as</p>
              <p className="font-bold text-[#d7dadc] truncate">u/alex_dev</p>
            </div>

            <Link
              to="/user/alex_dev"
              onClick={closeDropdown}
              className="w-full flex items-center gap-3 px-3.5 py-2 text-[#d7dadc] hover:bg-[#272729] transition-colors"
            >
              <User className="w-4 h-4 text-[#818384]" />
              <span>My Profile</span>
            </Link>

            <Link
              to="/settings"
              onClick={closeDropdown}
              className="w-full flex items-center gap-3 px-3.5 py-2 text-[#d7dadc] hover:bg-[#272729] transition-colors"
            >
              <Settings className="w-4 h-4 text-[#818384]" />
              <span>User Settings</span>
            </Link>

            <div className="border-t border-[#343536] my-1" />

            {/* Kept as a button since logging out typically triggers a functional event/action */}
            <button
              onClick={() => {
                closeDropdown();
                console.log("Logging out...");
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2 text-[#ff4500] hover:bg-[#272729] text-left transition-colors font-semibold"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
