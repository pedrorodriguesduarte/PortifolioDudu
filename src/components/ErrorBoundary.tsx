import React from "react";

interface ErrorFallbackProps {
  error: Error;
  resetError?: () => void;
}

/**
 * Componente de fallback padrão para Error Boundaries
 */
const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetError 
}) => (
  <div 
    role="alert" 
    style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ff6b6b',
      borderRadius: '8px',
      backgroundColor: '#fff5f5',
      color: '#c92a2a',
      textAlign: 'center'
    }}
  >
    <h2>Oops! Algo deu errado</h2>
    <details style={{ marginTop: '10px', textAlign: 'left' }}>
      <summary>Detalhes do erro</summary>
      <pre style={{ 
        marginTop: '10px', 
        padding: '10px', 
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        overflow: 'auto',
        fontSize: '12px'
      }}>
        {error.message}
      </pre>
    </details>
    {resetError && (
      <button 
        onClick={resetError}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Tentar novamente
      </button>
    )}
  </div>
);

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Boundary para captura de erros em componentes React
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log do erro para monitoramento
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Callback personalizado para tratamento de erro
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError() {
    this.setState({ hasError: false, error: undefined });
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent 
          error={this.state.error!} 
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}