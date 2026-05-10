import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const style =
    delay > 0
      ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      className={cn(className)}
      data-reveal
      style={style}
    >
      {children}
    </div>
  );
}
