import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded-full text-[#00FF41] text-sm font-mono"
          >
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-[#00FF41]">{personalInfo.name.split(' ')[0]}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
            {personalInfo.title}
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-[#00FF41] text-black font-semibold rounded-lg hover:bg-[#00DD35] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-[#00FF41] text-[#00FF41] font-semibold rounded-lg hover:bg-[#00FF41]/10 transition-all flex items-center gap-2"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#111111] border border-gray-800 rounded-lg hover:border-[#00FF41] hover:text-[#00FF41] transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#111111] border border-gray-800 rounded-lg hover:border-[#00FF41] hover:text-[#00FF41] transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-[#111111] border border-gray-800 rounded-lg hover:border-[#00FF41] hover:text-[#00FF41] transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00FF41]/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#00FF41] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;