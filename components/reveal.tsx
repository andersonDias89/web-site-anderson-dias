"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const revealTransition = {
  duration: 0.62,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 26 }}
      ref={ref}
      transition={{ ...revealTransition, delay }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
    >
      {children}
    </motion.div>
  );
}
