import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 bg-yellow-600 rounded-full"></div>
      </div>
      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
