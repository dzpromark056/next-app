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
    <main className="overflow-hidden relative min-h-screen antialiased bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="mx-auto pb-10 px-5">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Clipa />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
