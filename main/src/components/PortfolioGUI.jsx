import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import Hero from './GUI/Hero';
import About from './GUI/About';
import Skills from './GUI/Skills';
import Projects from './GUI/Projects';
import Experience from './GUI/Experience';
import Contact from './GUI/Contact';
import Footer from './GUI/Footer';
import CodeParticles from './CodeParticles';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

const PortfolioGUI = ({ onToggleMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* ---------------------------
     Scroll To Section
  ---------------------------- */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  /* ---------------------------
     Scroll Spy Only
  ---------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 150;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 relative font-terminal">

      <CodeParticles />

      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-terminal-green font-semibold text-sm tracking-wider"
            >
              <Terminal className="w-4 h-4" />
              mani@portfolio
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-14 relative">

              {sections.slice(1).map((section) => (
                <div key={section} className="relative group">

                  <button
                    onClick={() => scrollToSection(section)}
                    className={`
                      capitalize
                      text-sm
                      tracking-wide
                      transition-all
                      duration-300
                      ${
                        activeSection === section
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-terminal-cyan'
                      }
                    `}
                  >
                    {section}

                    {/* Typing Cursor */}
                    {activeSection === section && (
                      <span className="ml-1 animate-pulse text-terminal-green">
                        |
                      </span>
                    )}
                  </button>

                  {/* Animated Underline */}
                  {activeSection === section && (
                    <motion.div
                      layoutId="nav-underline"
                      className="
                        absolute
                        -bottom-3
                        left-0
                        right-0
                        h-[2px]
                        bg-gradient-to-r
                        from-terminal-green
                        via-terminal-cyan
                        to-terminal-purple
                      "
                    />
                  )}

                  {/* Glow */}
                  {activeSection === section && (
                    <div className="
                      absolute
                      -bottom-3
                      left-0
                      right-0
                      h-[6px]
                      bg-terminal-cyan
                      blur-md
                      opacity-40
                    " />
                  )}
                </div>
              ))}

              {/* Toggle Mode */}
              <button
                onClick={onToggleMode}
                className="
                  ml-6
                  flex items-center gap-2
                  px-5 py-2
                  bg-gradient-to-r
                  from-terminal-green
                  via-terminal-cyan
                  to-terminal-purple
                  text-black
                  rounded-lg
                  font-semibold
                  text-sm
                  tracking-wide
                  hover:opacity-90
                  transition-all
                "
              >
                <Terminal size={18} />
                Terminal Mode
              </button>

            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={onToggleMode}
                className="
                  p-2
                  bg-gradient-to-r
                  from-terminal-green
                  via-terminal-cyan
                  to-terminal-purple
                  text-black
                  rounded-lg
                "
              >
                <Terminal size={18} />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Neon Bottom Line */}
        <div className="
          h-[1px]
          bg-gradient-to-r
          from-terminal-green
          via-terminal-cyan
          to-terminal-purple
          opacity-60
        " />

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#111111] border-t border-gray-800"
          >
            <div className="px-8 py-6 space-y-6 tracking-wide">
              {sections.slice(1).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    block w-full text-left capitalize text-sm transition-colors
                    ${
                      activeSection === section
                        ? 'text-white'
                        : 'text-gray-400 hover:text-terminal-cyan'
                    }
                  `}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}

      </motion.nav>

      {/* Content */}
      <div className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default PortfolioGUI;
