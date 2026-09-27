import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Publications from './components/Publications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Single-page field notebook with a ticker strip after the hero.
export default function App() {
  return (
    <div className="app">
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
