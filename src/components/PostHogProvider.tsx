import { useEffect } from "react";
import { initPostHog } from "@/lib/posthog";

export const PostHogProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    initPostHog();
  }, []);

  return <>{children}</>;
};
