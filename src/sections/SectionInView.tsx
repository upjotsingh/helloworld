"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type SectionInViewProps = {
  children: ReactNode;
  threshold?: number;
  direction?: "left" | "right";
  delay?: number;
};

export default function SectionInView({
  children,
  threshold = 0.3,
  direction = "left",
  delay = 0,
}: SectionInViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
      transition={{ duration: 0.65, ease: "easeOut", delay: visible ? delay : 0 }}
      style={{ minHeight: "200px" }}
    >
      {children}
    </motion.div>
  );
}
