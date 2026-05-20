import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { Language, TranslationKey } from "@/lib/i18n";
import { t as translate } from "@/lib/i18n";


interface LanguageContextType {
  lang: Language;
  basePath: string;
  t: (key: TranslationKey) => string;
  localizedHref: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLang = "fr" }: { children: ReactNode; initialLang?: Language }) => {
  const lang = initialLang;
  const basePath = lang === "en" ? "/en" : "";

  const t = (key: TranslationKey) => translate(key, lang);

  const localizedHref = (path: string) => {
    if (path.startsWith("http") || path.startsWith("#")) return path;
    return `${basePath}${path}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, basePath, t, localizedHref }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
