import React from "react";


export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="section-title mb-15">
      <h2 className="font-semibold relative ps-9  text-red-500 mb-5   before:content-[''] before:absolute before:top-1/2  before:start-0 before:transform before:rounded-sm before:-translate-y-1/2 before:w-5 before:h-11  before:bg-red-500 ">
        {title}
      </h2>
      <span className="font-semibold text-4xl">{subtitle}</span>

    </div>
  );
}
