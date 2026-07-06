import { NavLink } from "react-router-dom";

export default function NavigationItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `
        group flex items-center gap-3
        rounded-xl px-3 py-3
        transition-all duration-200

        ${
          isActive
            ? "bg-[#1D2126] text-white"
            : "text-[#A6ADB4] hover:bg-[#16181C] hover:text-white"
        }
      `
      }
    >
      <Icon size={20} className="shrink-0 transition-colors" />

      <span className="text-[15px] font-medium tracking-[-0.01em]">
        {item.label}
      </span>
    </NavLink>
  );
}
