/**
 * Constantes de acessibilidade e textos alternativos
 */
export const AccessibilityConstants = {
  // Textos alternativos para imagens
  images: {
    projectPlaceholder: 'Imagem do projeto em desenvolvimento',
    experiencePlaceholder: 'Logo da empresa',
    heroPedro: 'Foto de Pedro Duarte, desenvolvedor de software',
    logoPortfolio: 'Logo do portfólio - Letra X estilizada'
  },
  
  // Labels para elementos interativos
  interactive: {
    scrollToSection: (sectionName: string) => `Rolar para seção ${sectionName}`,
    toggleLanguage: (currentLang: string) => 
      `Alterar idioma para ${currentLang === 'pt' ? 'Inglês' : 'Português'}`,
    showNextProject: 'Mostrar próximo projeto',
    contactEmail: 'Enviar email para Pedro Duarte',
    openLinkedIn: 'Abrir perfil do LinkedIn em nova aba',
    openGitHub: 'Abrir perfil do GitHub em nova aba'
  },
  
  // Descrições para leitores de tela
  descriptions: {
    navigation: 'Navegação principal do portfólio',
    projectTimeline: 'Timeline dos projetos desenvolvidos',
    experienceSection: 'Histórico de experiências profissionais',
    contactSection: 'Informações de contato',
    languageToggle: 'Alternador de idioma do site'
  },
  
  // Estados de loading
  loading: {
    imageLoading: 'Carregando imagem...',
    contentLoading: 'Carregando conteúdo...',
    pageLoading: 'Carregando página...'
  }
} as const;

/**
 * Configurações de ARIA
 */
export const AriaConfig = {
  // Roles semânticos
  roles: {
    banner: 'banner',
    navigation: 'navigation',
    main: 'main',
    contentinfo: 'contentinfo',
    button: 'button',
    img: 'img'
  },
  
  // Propriedades ARIA
  properties: {
    expanded: 'aria-expanded',
    hidden: 'aria-hidden',
    label: 'aria-label',
    labelledby: 'aria-labelledby',
    describedby: 'aria-describedby',
    current: 'aria-current'
  }
} as const;