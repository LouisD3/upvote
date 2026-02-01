import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-up";
}

export const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0,
  animation = "fade-up"
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationStyles = () => {
    const baseStyles = "transition-all duration-700 ease-out";
    
    switch (animation) {
      case "fade-in":
        return cn(
          baseStyles,
          "opacity-0",
          isVisible && "opacity-100"
        );
      case "scale-in":
        return cn(
          baseStyles,
          "opacity-0 scale-95",
          isVisible && "opacity-100 scale-100"
        );
      case "slide-up":
        return cn(
          baseStyles,
          "duration-500",
          "opacity-0 translate-y-8",
          isVisible && "opacity-100 translate-y-0"
        );
      case "fade-up":
      default:
        return cn(
          baseStyles,
          "opacity-0 translate-y-6",
          isVisible && "opacity-100 translate-y-0"
        );
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationStyles(), className)}
    >
      {children}
    </div>
  );
};
