/**
 * Configurações globais da aplicação
 */
export const AppConfig = {
  /**
   * Configurações de animação
   */
  animations: {
    defaultDelay: 200,
    fadeInDuration: 800,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    easingFunction: "ease-out"
  },
  
  /**
   * Configurações de idioma
   */
  languages: {
    default: 'pt' as const,
    supported: ['pt', 'en'] as const
  },
  
  /**
   * Chaves para localStorage
   */
  storage: {
    languageKey: 'language'
  },
  
  /**
   * Configurações de performance
   */
  performance: {
    enableImageLazyLoading: true,
    enableComponentLazyLoading: false,
    intersectionObserverThreshold: 0.1
  }
} as const;

/**
 * Tokens do design system
 */
export const DesignTokens = {
  colors: {
    primary: '#007bff',
    text: '#333',
    background: '#ffffff',
    accent: '#f8f9fa',
    border: '#e9ecef'
  },
  
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '80px'
  },
  
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    sizes: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      body: '1rem',
      small: '0.875rem'
    },
    weights: {
      normal: 400,
      medium: 500,
      bold: 700
    }
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  }
} as const;