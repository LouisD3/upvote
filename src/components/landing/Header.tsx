import { useState, useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/logo_reddit_agence.webp";
const logo = typeof logoAsset === 'string' ? logoAsset : logoAsset.src;

const CALENDLY_URL = "https://calendly.com/mateo-drouillard-upvotepartners/audit";

const SERVICES = [
  {
    label: "Reddit Marketing",
    href: "/",
    enHref: "/en",
    description: "Transformez Reddit en canal d'acquisition récurrent",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    label: "Reddit GEO",
    href: "/agence-geo",
    enHref: "/en/geo-agency",
    description: "Soyez cité par ChatGPT grâce à la source n°1 des LLM Reddit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary flex-shrink-0">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
];

interface HeaderProps {
  lang?: "fr" | "en";
  currentPath?: string;
  alternatePath?: string;
  showLangToggle?: boolean;
  navItems?: { label: string; sectionId: string }[];
  ctaLabel?: string;
  homePath?: string;
}

export const Header = ({
  lang = "fr",
  currentPath = "/",
  alternatePath,
  showLangToggle = false,
  navItems = [],
  ctaLabel = "Réserver un audit gratuit",
  homePath = "/",
}: HeaderProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <AnimatedSection>
          <a href={homePath} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="UpvotePartners"
                width={44}
                height={44}
                className="relative w-11 h-11 rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 hidden sm:inline">
              UpvotePartners
            </span>
          </a>
        </AnimatedSection>

        <nav className="hidden md:flex items-center gap-6">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="w-80 rounded-xl bg-card border border-border/60 shadow-xl shadow-black/10 overflow-hidden">
                  {SERVICES.map((service) => {
                    const isActive =
                      service.href === "/"
                        ? currentPath === "/" || currentPath === ""
                        : currentPath.startsWith(service.href);
                    return (
                      <a
                        key={service.href}
                        href={lang === "en" ? service.enHref : service.href}
                        className={`flex items-start gap-4 px-5 py-4 hover:bg-primary/5 transition-colors duration-150 ${isActive ? "bg-primary/5" : ""}`}
                      >
                        <div className="mt-0.5 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                            {service.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{service.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Scroll-to nav items */}
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollTo(item.sectionId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {showLangToggle && (
            <a
              href={alternatePath || (lang === "en" ? "/" : "/en")}
              className="text-lg hover:scale-110 transition-transform duration-200 px-1"
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
            >
              {lang === "en" ? "🇫🇷" : "🇬🇧"}
            </a>
          )}

          <AnimatedSection delay={100}>
            <Button
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              size="sm"
              className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">{ctaLabel}</span>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};
