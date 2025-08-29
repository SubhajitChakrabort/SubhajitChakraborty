import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop'
import Achievements from '@/components/Achievements';

export default function Home() {
  return (
    <main>
      <StarryBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
     

    </main>
  );
}
