import React from "react";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subTitle?: string;
  description?: string;
  className?: string;
  position?: "left" | "center" | "right";
}

export default function SectionHeader({
  icon,
  title,
  subTitle,
  description,
  className = "",
  position = "center",
}: SectionHeaderProps) {

  const alignment =
    position === "left"
      ? "text-left items-start"
      : position === "right"
        ? "text-right items-end"
        : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>

      {icon && (
        <div className="mb-3 text-(--primary-dark) text-2xl">
          {icon}
        </div>
      )}

      {subTitle && (
        <p className="text-(--primary-dark) font-semibold mb-2 tracking-wide uppercase text-sm">
          {subTitle}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl text-(--text-dark) leading-tight font-(--font-heading)">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-gray-600 leading-7">
          {description}
        </p>
      )}

      <div
        className={`mt-5 h-1 w-16 bg-(--primary-dark) rounded ${position === "center"
            ? "mx-auto"
            : position === "right"
              ? "ml-auto"
              : ""
          }`}
      ></div>

    </div>
  );
}
