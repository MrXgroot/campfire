import { NavLink } from "react-router-dom";

function getBadge(name) {
  return name
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

export default function CommunityItem({ community }) {
  return (
    <NavLink
      to={`/communities/${community.slug ?? community.name}`}
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
      <div
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-lg
          bg-[#20242A]
          text-[11px]
          font-semibold
          tracking-wide
          text-[#E6E6E6]
          transition-colors
          group-hover:bg-[#2A2F36]
        "
      >
        {getBadge(community.name)}
      </div>

      <span className="truncate text-[15px] font-medium tracking-[-0.01em]">
        {community.name}
      </span>
    </NavLink>
  );
}
