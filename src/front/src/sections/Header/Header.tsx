import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../assets/loguita.jpeg";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      {/* Logo */}
      <FadeInWrapper>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </FadeInWrapper>

      {/* Navegação */}
      <FadeInWrapper delay={200}>
        <nav>
          <Link to="about" spy={true} smooth={true} duration={500}>
            {t.header.about}
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            {t.header.projects}
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            {t.header.experiences}
          </Link>
        </nav>
      </FadeInWrapper>

      {/* Botões à direita */}
      <div className="header-right">
        <FadeInWrapper delay={300}>
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${
              language === "pt" ? "English" : "Português"
            }`}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          <a href="#contact" className="contact-link">
            {t.header.contactMe}
          </a>
        </FadeInWrapper>
      </div>
    </header>
  );
};

export default Header;
