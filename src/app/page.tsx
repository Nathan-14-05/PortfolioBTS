import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Formations from '../components/Formations';
import Certifications from '../components/Certifications';
import Veille from '../components/Veille';
import Synthese from '../components/Synthese';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030712] selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <div id="projets">
          <Projects />
        </div>
        <div id="competences">
          <Skills />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="formations">
          <Formations />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="veille">
          <Veille />
        </div>
        <div id="synthese">
          <Synthese />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <footer className="py-20 text-center border-t border-gray-100">
        <p className="text-gray-400 text-sm">
          © 2026 Nathan M'Boueya — Étudiant BTS SIO SLAM
        </p>
      </footer>
    </main>
  );
}