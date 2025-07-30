import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const sections = [
  { id: 'hero', label: 'Home', component: <Hero /> },
  { id: 'about', label: 'About', component: <About /> },
  { id: 'projects', label: 'Projects', component: <Projects /> },
  { id: 'contact', label: 'Contact', component: <Contact /> },
];

export default function App() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to section by index
  const scrollToSection = (idx) => {
    const container = scrollRef.current;
    if (!container) return;
    const section = container.children[idx];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      setActiveIndex(idx);
    }
  };

  // Handle navbar link click
  const handleNavClick = (sectionId) => {
    const idx = sections.findIndex(s => s.id === sectionId);
    if (idx !== -1) scrollToSection(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && activeIndex < sections.length - 1) {
        scrollToSection(activeIndex + 1);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        scrollToSection(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Update activeIndex on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.offsetWidth;
      const idx = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(idx);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar onNavClick={handleNavClick} />
      <div className="relative">
        {/* Section container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory h-screen"
          style={{ scrollBehavior: 'smooth' }}
        >
          {sections.map(({ id, component }) => (
            <section
              key={id}
              id={id}
              className="flex-shrink-0 w-screen h-screen snap-center flex items-center justify-center"
            >
              {component}
            </section>
          ))}
        </div>
        {/* On-screen arrows */}
        <button
          className="absolute left-4 top-1/2 z-50 bg-gray-800/70 rounded-full p-2 text-2xl hover:bg-gray-600"
          style={{ transform: 'translateY(-50%)' }}
          onClick={() => activeIndex > 0 && scrollToSection(activeIndex - 1)}
          aria-label="Scroll Left"
          disabled={activeIndex === 0}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 z-50 bg-gray-800/70 rounded-full p-2 text-2xl hover:bg-gray-600"
          style={{ transform: 'translateY(-50%)' }}
          onClick={() => activeIndex < sections.length - 1 && scrollToSection(activeIndex + 1)}
          aria-label="Scroll Right"
          disabled={activeIndex === sections.length - 1}
        >
          &#8594;
        </button>
      </div>
      <Footer />
    </div>
  );
}



