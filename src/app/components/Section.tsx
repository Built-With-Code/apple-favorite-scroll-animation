"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { HTMLAttributes, useRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLSelectElement> {
  video: string;
  setVideo: (_: string) => void;
  setBgOpacity: (_: number) => void;
}

const Section = ({
  video,
  setVideo,
  setBgOpacity,
  children,
  ...props
}: SectionProps) => {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.9, 1],
    [0, 0, 1, 1, 0, 0]
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 0.3, 0.3, 0.7]
  );

  scrollYProgress.on("change", (val) => {
    if (val > 0 || val < 1) {
      setVideo(video);
    }
  });

  bgOpacity.on("change", (val) => {
    setBgOpacity(val);
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center"
      {...props}
    >
      <motion.div
        ref={contentRef}
        className="min-h-screen text-5xl font-bold leading-snug text-center text-white max-w-[80ch]"
        style={{ opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
