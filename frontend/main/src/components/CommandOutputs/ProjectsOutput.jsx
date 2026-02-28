import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Folder,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { projects } from '../../data/mock';

const ProjectsOutput = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  /* ----------------------------------
     🔥 CATEGORY COLOR SYSTEM
  ---------------------------------- */

  const getCategoryColor = (category = '') => {
    const cat = category.toLowerCase();

    if (cat.includes('machine learning') || cat.includes('ml'))
      return {
        text: 'text-terminal-purple',
        border: 'border-terminal-purple/40',
        bg: 'bg-terminal-purple/10',
        button: 'bg-terminal-purple hover:bg-purple-400',
        glow: 'hover:border-terminal-purple/50',
        impactBorder: 'border-purple-400/20',
        impactBg: 'bg-purple-400/5'
      };

    if (cat.includes('data') || cat.includes('engineering'))
      return {
        text: 'text-terminal-green',
        border: 'border-terminal-green/40',
        bg: 'bg-terminal-green/10',
        button: 'bg-terminal-green hover:bg-green-400',
        glow: 'hover:border-terminal-green/50',
        impactBorder: 'border-emerald-400/20',
        impactBg: 'bg-emerald-400/5'
      };
    // default = backend / systems
    return {
        text: 'text-terminal-cyan',
        border: 'border-terminal-cyan/40',
        bg: 'bg-terminal-cyan/10',
        button: 'bg-terminal-cyan hover:bg-cyan-300',
        glow: 'hover:border-terminal-cyan/50',
        impactBorder: 'border-cyan-300/20',
        impactBg: 'bg-cyan-300/5'
      };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 font-terminal"
    >
      {/* Title */}
      <div className="text-terminal-cyan glow-cyan text-lg font-semibold mb-4 flex items-center gap-2">
        <Folder size={20} />
        Projects
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => {

          const theme = getCategoryColor(project.category);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                bg-[#111111]
                border border-gray-800
                rounded-lg
                overflow-hidden
                transition-all
                ${theme.glow}
              `}
            >
              {/* Header */}
              <div
                onClick={() => toggleProject(project.id)}
                className="p-4 cursor-pointer hover:bg-[#151515] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold">
                        {project.title}
                      </h3>

                      <span
                        className={`
                          px-2 py-0.5
                          ${theme.bg}
                          ${theme.border}
                          border
                          rounded
                          text-xs
                          ${theme.text}
                        `}
                      >
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <button className={`${theme.text} transition-colors`}>
                    {expandedProject === project.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded */}
              {expandedProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="border-t border-gray-800"
                >
                  <div className="p-4 space-y-4">

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <div className={`${theme.text} text-sm font-semibold mb-2`}>
                        Tech Stack:
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="
                              px-2 py-1
                              bg-[#0a0a0a]
                              border border-gray-700
                              rounded
                              text-xs
                              text-gray-400
                              hover:border-white/20
                              transition
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className={`
                      ${theme.impactBg}
                      ${theme.impactBorder}
                      border
                      rounded-lg
                      p-3
                    `}>
                      <div className={`flex items-center gap-2 ${theme.text} text-sm font-semibold mb-1`}>
                        <Sparkles size={14} />
                        Impact
                      </div>
                      <p className="text-gray-300 text-sm">
                        {project.impact}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex items-center gap-2
                            px-3 py-1.5
                            bg-[#0a0a0a]
                            ${theme.border}
                            border
                            rounded-md
                            text-sm
                            ${theme.text}
                            hover:bg-white/5
                            transition-all
                          `}
                        >
                          <Github size={14} />
                          View Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex items-center gap-2
                            px-3 py-1.5
                            ${theme.button}
                            border
                            rounded-md
                            text-sm
                            text-black
                            font-semibold
                            transition-all
                          `}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>

                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectsOutput;
