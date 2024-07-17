"use client"
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Techologies';
import Clipa from './components/Clipa';
import Lenis from 'lenis';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidden relative min-h-screen antialiased ">
      <div className="mx-auto  px-5">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Clipa />
        <Experience />
        <Projects />
        <Awards />

        <Contact />
      </div>
     </main>
  );
}
