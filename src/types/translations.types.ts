/**
 * Tipo para idiomas suportados pela aplicação
 */
export type SupportedLanguage = 'pt' | 'en';

/**
 * Type guard para verificar se uma string é um idioma suportado
 * @param lang - String a ser verificada
 * @returns true se for um idioma suportado
 */
export const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
  return ['pt', 'en'].includes(lang);
};

/**
 * Configurações de idioma da aplicação
 */
export const LanguageConfig = {
  default: 'pt' as const,
  supported: ['pt', 'en'] as const,
  storageKey: 'language'
} as const;