"use client";

import { TypeAnimation } from "react-type-animation";

import { cn } from "@/lib/utils";

type HeroTypewriterProps = {
  text: string;
  className?: string;
};

export function HeroTypewriter({ text, className }: HeroTypewriterProps) {
  return (
    <TypeAnimation
      className={cn("inline", className)}
      cursor
      preRenderFirstString={false}
      repeat={0}
      sequence={[text]}
      speed={58}
      wrapper="span"
    />
  );
}
