import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

interface CTAButtonProps {
  label: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  withConfetti?: boolean;
}

export default function CTAButton({
  label,
  variant = "default",
  size = "lg",
  className,
  withConfetti = true,
}: CTAButtonProps) {
  const handleClick = () => {
    if (withConfetti) {
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ff6b00", "#ff8c33", "#ffad66", "#ffffff"],
        });
      });
      setTimeout(() => {
        window.open(CALENDLY_URL, "_blank");
      }, 600);
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={variant}
      className={cn(
        "h-14 px-8 text-base font-bold rounded-xl",
        "hover:scale-[1.02] active:scale-[0.98]",
        "transition-all duration-300",
        variant === "default" && "shadow-lg shadow-primary/30",
        className
      )}
    >
      <Sparkles className="w-5 h-5 mr-2" />
      {label}
    </Button>
  );
}
