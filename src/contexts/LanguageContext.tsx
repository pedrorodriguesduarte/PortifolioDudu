import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { translations } from "../translations";
import type { Translations } from "../translations";
import { LanguageDetectionService } from "../services/languageDetection.service";
import { LocalStorageService } from "../services/localStorage.service";
import type { SupportedLanguage } from "../types/translations.types";
import { isSupportedLanguage } from "../types/translations.types";

interface LanguageContextType {
  language: SupportedLanguage;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (language: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<SupportedLanguage>("pt");

  useEffect(() => {
    // Primeiro, tenta obter idioma salvo no localStorage
    const savedLanguage = LocalStorageService.getLanguage();
    
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Se não há idioma salvo, detecta do navegador
      const detectedLanguage = LanguageDetectionService.detectBrowserLanguage();
      setLanguageState(detectedLanguage);
      // Salva a detecção para próximas visitas
      LocalStorageService.setLanguage(detectedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage);
    LocalStorageService.setLanguage(newLanguage);
  };

  const toggleLanguage = () => {
    const newLanguage: SupportedLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
  };

  const t = translations[language];

  const value: LanguageContextType = {
    language,
    t,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
