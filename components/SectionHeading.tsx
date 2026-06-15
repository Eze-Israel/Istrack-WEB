import React from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : ""
      }
    >
      <span
        className="
        inline-flex
        rounded-full
        bg-orange-100
        px-4
        py-2
        text-sm
        font-medium
        text-orange-600
        "
      >
        {badge}
      </span>

      <h2
        className="
        mt-6
        text-4xl
        font-black
        leading-tight
        text-[#0A1F44]
        md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
        mt-6
        text-lg
        leading-8
        text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}