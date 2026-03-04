import posthog from "posthog-js";

// PostHog public API key - safe to expose client-side
const POSTHOG_KEY = "__POSTHOG_KEY__";
const POSTHOG_HOST = "https://us.i.posthog.com";

export const initPostHog = () => {
  if (POSTHOG_KEY === "__POSTHOG_KEY__") {
    console.warn("[PostHog] No API key configured. Analytics disabled.");
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });
};

// Custom event helpers
export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  posthog.capture(event, properties);
};

export const trackCTAClick = (location: string) => {
  trackEvent("cta_clicked", { location, cta_type: "calendly_audit" });
};

export const trackWaitlistSubmit = (email: string) => {
  trackEvent("waitlist_submitted", { email });
};

export const trackLanguageChange = (from: string, to: string) => {
  trackEvent("language_changed", { from, to });
};
