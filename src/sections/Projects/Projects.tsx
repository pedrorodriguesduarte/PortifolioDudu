import { useState, useMemo, useCallback } from "react";
import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import { projectsTranslations } from "../../translations";
import type { SupportedLanguage } from "../../types/translations.types";

// importa imagens da pasta src/assets
import project1Img from "../../assets/products-grid.webp";
import tipoImg from "../../assets/tipo.png";
import project3Img from "../../assets/hero-sige-lite-screen.png";
import saasImg from "../../assets/SaaS_image013-3.png";

// Mapeamento otimizado de imagens
const PROJECT_IMAGES = [tipoImg, project3Img, project1Img, saasImg] as const;

/**
 * Componente da seção de projetos com timeline interativa
 */
function Projects() {
  const { t, language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(0);

  // Memoização dos projetos baseado no idioma
  const currentProjects = useMemo(() => {
    return projectsTranslations[language as SupportedLanguage] || [];
  }, [language]);

  // Memoização dos projetos visíveis
  const visibleProjects = useMemo(() => {
    return currentProjects.slice(0, visibleCount);
  }, [currentProjects, visibleCount]);

  // Callback otimizado para mostrar próximo projeto
  const handleNext = useCallback(() => {
    setVisibleCount(prev => {
      const maxCount = currentProjects.length;
      return prev < maxCount ? prev + 1 : prev;
    });
  }, [currentProjects.length]);

  // Verifica se há mais projetos para mostrar
  const hasMoreProjects = useMemo(() => {
    return visibleCount < currentProjects.length;
  }, [visibleCount, currentProjects.length]);

  // Texto do botão baseado no idioma
  const buttonText = useMemo(() => {
    return language === "pt" ? "Mostrar próximo" : "Show next";
  }, [language]);

  return (
    <section id="projects" className="section">
      <FadeInWrapper>
        <h2>{t.projects.title}</h2>
      </FadeInWrapper>

      <div className="timeline-container">
        {visibleProjects.map((project, index) => (
          <FadeInWrapper 
            key={`${project.year}-${index}`} 
            delay={index * 200}
            animationType={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
          >
            <div
              className={`timeline-step ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-year">{project.year}</div>
              <img
                src={PROJECT_IMAGES[index]}
                alt={project.title}
                className="timeline-image"
                loading="lazy"
                decoding="async"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </FadeInWrapper>
        ))}
      </div>

      {hasMoreProjects && (
        <FadeInWrapper>
          <button 
            className="timeline-button" 
            onClick={handleNext}
            aria-label={`${buttonText} (${currentProjects.length - visibleCount} restantes)`}
          >
            {buttonText}
          </button>
        </FadeInWrapper>
      )}
    </section>
  );
}

export default Projects;
