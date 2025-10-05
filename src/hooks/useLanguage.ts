import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

/**
 * Hook para acessar o contexto de idioma
 * @throws {Error} Se usado fora do LanguageProvider
 * @returns Contexto de idioma com type safety
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider. " +
      "Make sure to wrap your component tree with <LanguageProvider>."
    );
  }
  
  return context;
};
