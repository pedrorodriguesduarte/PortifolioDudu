/**
 * Serviço para detecção de idioma do navegador
 */
export class LanguageDetectionService {
  /**
   * Detecta o idioma preferido do navegador
   * @returns 'en' se o navegador estiver em inglês, 'pt' caso contrário
   */
  static detectBrowserLanguage(): 'pt' | 'en' {
    const browserLanguage = navigator.language.split("-")[0];
    return browserLanguage === "en" ? "en" : "pt";
  }

  /**
   * Verifica se o idioma é suportado pela aplicação
   * @param language - Idioma a ser verificado
   * @returns true se o idioma for suportado
   */
  static isSupportedLanguage(language: string): language is 'pt' | 'en' {
    return ['pt', 'en'].includes(language);
  }
}