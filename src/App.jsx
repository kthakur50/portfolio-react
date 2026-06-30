import { useEffect } from 'react';
import './styles/main.css';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import ShootingStars from './components/ShootingStars';
import { initAll } from './portfolio';

const App = () => {
  useEffect(() => { initAll(); }, []);

  return (
    <>
      <ShootingStars />
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
