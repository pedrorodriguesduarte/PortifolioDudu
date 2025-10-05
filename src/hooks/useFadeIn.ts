import { useEffect, useRef, useState } from "react";

/**
 * Hook para animações de fade-in usando Intersection Observer
 * @param threshold - Porcentagem do elemento que deve estar visível para disparar a animação (0-1)
 * @param rootMargin - Margem ao redor do root para expandir ou contrair a área de detecção
 * @param triggerOnce - Se true, anima apenas uma vez; se false, anima sempre que entra/sai da tela
 */
export const useFadeIn = (
  threshold: number = 0.1,
  rootMargin: string = "0px 0px -50px 0px",
  triggerOnce: boolean = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup do observer anterior se existir
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Remove observer se triggerOnce for true para melhor performance
          if (triggerOnce && observerRef.current) {
            observerRef.current.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};
