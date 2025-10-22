import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ paths = [] }) => {
  return (
    <div className="flex w-full max-w-5xl mx-auto items-center justify-start py-3 px-6 gap-2 bg-[var(--background_header)] rounded-md">
      {paths.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 text-paragraph font-semibold"
        >
          {item.href ? (
            <Link
              to={item.href}
              className="hover:underline text-[var(--color_text_button)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--color_text_button)]/60">
              {item.label}
            </span>
          )}
          {idx < paths.length - 1 && (
            <i className="ri-checkbox-blank-circle-line text-[var(--color_warning)] mr-1"></i>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
