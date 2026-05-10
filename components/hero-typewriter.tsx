import { cn } from "@/lib/utils";

type HeroTypewriterProps = {
  text: string;
  className?: string;
};

export function HeroTypewriter({ text, className }: HeroTypewriterProps) {
  return (
    <span className={cn("typewriter-text", className)} role="text">
      {text}
    </span>
  );
}
