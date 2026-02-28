import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const AboutOutput = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mb-6 font-mono"
    >
      {/* Section Title */}
      <div className="text-[#00FF41] text-terminal-cyan glow-cyan text-base font-semibold mb-3 flex items-center gap-2">
        <User size={18} />
        <span>about_me()</span>
      </div>

      {/* Content Container */}
      <div className="border border-gray-800 bg-[#0f0f0f] rounded-md p-5 space-y-4">
        
        {/* Name + Title */}
        <div>
          <div className="text-white text-lg font-semibold">
            {personalInfo.name}
          </div>
          <div className="text-[#00FF41] text-terminal-purple">
            {personalInfo.title}
          </div>
        </div>

        <div className="h-px bg-gray-800"></div>

        {/* Bio */}
        <p className="text-gray-300 leading-relaxed text-sm">
          {personalInfo.bio}
        </p>

        <div className="h-px bg-gray-800"></div>

        {/* Meta Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={14} className="text-[#00FF41]" />
            {personalInfo.location}
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Briefcase size={14} className="text-[#00FF41]" />
            Open to opportunities
          </div>
        </div>

        {/* Links */}
        <div className="pt-2 text-sm">
          <span className="text-gray-500 mr-2">Links:</span>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF41] hover:text-cyan-400 transition-colors mr-4"
          >
            github
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF41] hover:text-cyan-400 transition-colors mr-4"
          >
            linkedin
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#00FF41] hover:text-cyan-400 transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutOutput;
