"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
};

export function TypewriterText({
  text,
  className,
  speed = 18,
  startDelay = 220,
}: TypewriterTextProps) {
  const contentRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!contentRef.current || !cursorRef.current) return;

    const contentEl = contentRef.current;
    const cursorEl = cursorRef.current;
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let currentIndex = 0;
    let timerId: number | null = null;
    let startId: number = 0;

    contentEl.textContent = "";
    cursorEl.style.opacity = "1";

    if (reduceMotionQuery.matches) {
      contentEl.textContent = text;
      cursorEl.style.opacity = "0";
      return;
    }

    const typeStep = () => {
      currentIndex += 1;
      contentEl.textContent = text.slice(0, currentIndex);

      if (currentIndex >= text.length) {
        cursorEl.style.opacity = "0";
        return;
      }

      timerId = window.setTimeout(typeStep, speed);
    };

    startId = window.setTimeout(typeStep, startDelay);

    return () => {
      if (timerId !== null) window.clearTimeout(timerId);
      window.clearTimeout(startId);
    };
  }, [text, speed, startDelay]);

  return (
    <span aria-label={text} className={cn("typewriter-text", className)} role="text">
      <span className="typewriter-live" ref={contentRef} />
      <span aria-hidden="true" className="typewriter-cursor" ref={cursorRef}>
        |
      </span>
    </span>
  );
}
