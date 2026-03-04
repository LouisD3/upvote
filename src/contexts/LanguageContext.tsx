import { createContext, useContext, useState, ReactNode } from "react";
import { Language, TranslationKey, t as translate } from "@/lib/i18n";
import { trackLanguageChange } from "@/lib/posthog";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = (newLang: Language) => {
    trackLanguageChange(lang, newLang);
    setLangState(newLang);
  };

  const t = (key: TranslationKey) => translate(key, lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
