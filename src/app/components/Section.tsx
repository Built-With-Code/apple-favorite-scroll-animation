"use client";

import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLSelectElement> {}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      {...props}
    >
      <div className="min-h-screen text-5xl font-bold leading-snug text-center max-w-[80ch]">
        {children}
      </div>
    </section>
  );
};

export default Section;
