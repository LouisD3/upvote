import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-up";
}

const animationClasses: Record<NonNullable<AnimatedSectionProps["animation"]>, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-up": "animate-slide-up",
};

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) => {
  return (
    <div
      className={cn(animationClasses[animation], className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: animation === "fade-up" ? "none" : "both" }}
    >
      {children}
    </div>
  );
};
