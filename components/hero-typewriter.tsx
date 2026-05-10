"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroTypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
};

export function HeroTypewriter({
  text,
  className,
  speed = 22,
  startDelay = 180,
}: HeroTypewriterProps) {
  const contentRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!contentRef.current || !cursorRef.current) return;

    const contentEl = contentRef.current;
    const cursorEl = cursorRef.current;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      contentEl.textContent = text;
      cursorEl.style.opacity = "0";
      return;
    }

    let currentIndex = 0;
    let typingTimer: number | null = null;
    const startTimer = window.setTimeout(typeNextCharacter, startDelay);

    contentEl.textContent = "";
    cursorEl.style.opacity = "1";

    function typeNextCharacter() {
      currentIndex += 1;
      contentEl.textContent = text.slice(0, currentIndex);

      if (currentIndex >= text.length) {
        cursorEl.style.opacity = "0";
        return;
      }

      typingTimer = window.setTimeout(typeNextCharacter, speed);
    }

    return () => {
      if (typingTimer !== null) window.clearTimeout(typingTimer);
      window.clearTimeout(startTimer);
    };
  }, [startDelay, speed, text]);

  return (
    <span aria-label={text} className={cn("typewriter-text typewriter-live", className)} role="text">
      <span className="typewriter-live" ref={contentRef}>
        {text}
      </span>
      <span aria-hidden="true" className="typewriter-cursor" ref={cursorRef}>
        |
      </span>
    </span>
  );
}
