// ─── Root App Component ───────────────────────────────────────────────────────
// Renders all sections in order and runs all JS initialisations once on mount.

import { useEffect } from 'react';
import './styles/main.css';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Skills    from './components/Skills';
import Experience from './components/Experience';
import Projects  from './components/Projects';
import Education from './components/Education';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import { initAll } from './portfolio';

const App = () => {
  useEffect(() => {
    // Run all vanilla-JS initialisations after the DOM is ready
    initAll();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
