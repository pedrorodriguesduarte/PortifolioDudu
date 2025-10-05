/**
 * Serviço para gerenciamento do localStorage
 */
export class LocalStorageService {
  /**
   * Obtém o idioma salvo no localStorage
   * @returns O idioma salvo ou null se não existir
   */
  static getLanguage(): string | null {
    try {
      return localStorage.getItem("language");
    } catch (error) {
      console.warn("Erro ao acessar localStorage:", error);
      return null;
    }
  }

  /**
   * Salva o idioma no localStorage
   * @param language - Idioma a ser salvo
   */
  static setLanguage(language: string): void {
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.warn("Erro ao salvar no localStorage:", error);
    }
  }

  /**
   * Remove o idioma do localStorage
   */
  static removeLanguage(): void {
    try {
      localStorage.removeItem("language");
    } catch (error) {
      console.warn("Erro ao remover do localStorage:", error);
    }
  }

  /**
   * Verifica se o localStorage está disponível
   * @returns true se o localStorage estiver disponível
   */
  static isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}