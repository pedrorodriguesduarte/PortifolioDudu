import { Link } from "react-scroll";
import "./Header.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import { useMemo } from "react";

/**
 * Componente do cabeçalho com navegação e alternador de idioma
 */
function Header() {
  const { t, language, toggleLanguage } = useLanguage();

  // Memoiza o texto do aria-label para o botão de idioma
  const languageToggleLabel = useMemo(() => {
    return `Alterar idioma para ${language === "pt" ? "Inglês" : "Português"}`;
  }, [language]);

  // Memoiza o texto do botão
  const languageButtonText = useMemo(() => {
    return language === "pt" ? "EN" : "PT";
  }, [language]);

  return (
    <header className="header" role="banner">
      <FadeInWrapper>
        <div className="logo" role="img" aria-label="Logo do portfólio">
          [X]
        </div>
      </FadeInWrapper>
      
      <FadeInWrapper delay={200}>
        <nav role="navigation" aria-label="Navegação principal">
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500}
            aria-label={`Navegar para seção ${t.header.about}`}
            role="button"
            tabIndex={0}
          >
            {t.header.about}
          </Link>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500}
            aria-label={`Navegar para seção ${t.header.projects}`}
            role="button"
            tabIndex={0}
          >
            {t.header.projects}
          </Link>
          <Link 
            to="experience" 
            spy={true} 
            smooth={true} 
            duration={500}
            aria-label={`Navegar para seção ${t.header.experiences}`}
            role="button"
            tabIndex={0}
          >
            {t.header.experiences}
          </Link>
        </nav>
      </FadeInWrapper>
      
      <div className="header-right">
        <FadeInWrapper delay={300}>
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={languageToggleLabel}
            type="button"
          >
            {languageButtonText}
          </button>
        </FadeInWrapper>
        
        <FadeInWrapper delay={400}>
          <a 
            href="#contact" 
            className="contact-link"
            aria-label="Ir para seção de contato"
          >
            {t.header.contactMe}
          </a>
        </FadeInWrapper>
      </div>
    </header>
  );
}

export default Header;
