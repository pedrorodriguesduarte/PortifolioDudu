import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ErrorBoundary } from "./components/ErrorBoundary";

/**
 * Componente principal da aplicação
 * Contém todas as seções do portfólio com gerenciamento de estado de idioma
 */
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="App">
          <Header />
          <main role="main">
            <Hero />
            <About />
            <Projects />
            <Experience />
          </main>
          <Contact />
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
