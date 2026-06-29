import React from "react";
import { Link } from "react-router-dom";

export default function AuthFooter({ text, linkText, link }) {
  return (
    <div className="pt-2 text-center">
      <p className="text-xs text-[#818384]">
        {text}{" "}
        <Link to={link} className="text-[#ff4500] font-medium hover:underline">
          {linkText}
        </Link>
      </p>
    </div>
  );
}
