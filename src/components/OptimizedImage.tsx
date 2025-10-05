/**
 * Componente de imagem otimizada com lazy loading e fallback
 */
import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Componente de imagem com otimizações de performance
 * @param src - URL da imagem
 * @param alt - Texto alternativo para acessibilidade
 * @param className - Classes CSS
 * @param loading - Estratégia de carregamento
 * @param width - Largura da imagem
 * @param height - Altura da imagem
 * @param fallbackSrc - Imagem de fallback em caso de erro
 * @param onLoad - Callback quando imagem carrega
 * @param onError - Callback quando há erro
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  width,
  height,
  fallbackSrc,
  onLoad,
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`optimized-image-container ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      
      {!isLoaded && !hasError && (
        <div 
          className="image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}
        >
          Carregando...
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;