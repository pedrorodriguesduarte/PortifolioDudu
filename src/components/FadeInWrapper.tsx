import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { AppConfig } from "../config/app.config";

interface FadeInWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  className?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
}

/**
 * Componente wrapper para animações de entrada usando Intersection Observer
 * @param children - Elementos filhos a serem animados
 * @param threshold - Porcentagem do elemento que deve estar visível (0-1)
 * @param delay - Atraso da animação em milissegundos
 * @param className - Classes CSS adicionais
 * @param rootMargin - Margem do root observer
 * @param triggerOnce - Se deve animar apenas uma vez
 * @param animationType - Tipo de animação
 */
const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  threshold = AppConfig.animations.threshold,
  delay = 0,
  className = "",
  rootMargin = AppConfig.animations.rootMargin,
  triggerOnce = true,
  animationType = 'fadeIn'
}) => {
  const { elementRef, isVisible } = useFadeIn(threshold, rootMargin, triggerOnce);

  // Configurações de animação baseadas no tipo
  const getAnimationStyles = () => {
    const baseTransition = `opacity ${AppConfig.animations.fadeInDuration}ms ${AppConfig.animations.easingFunction} ${delay}ms, transform ${AppConfig.animations.fadeInDuration}ms ${AppConfig.animations.easingFunction} ${delay}ms`;
    
    const animations = {
      fadeIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: baseTransition
      },
      slideUp: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: baseTransition
      },
      slideLeft: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        transition: baseTransition
      },
      slideRight: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(50px)",
        transition: baseTransition
      }
    };

    return animations[animationType];
  };

  return (
    <div
      ref={elementRef}
      className={`fade-in-wrapper ${className}`}
      style={{
        willChange: "opacity, transform",
        ...getAnimationStyles()
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
