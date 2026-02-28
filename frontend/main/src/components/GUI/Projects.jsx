import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Data Engineering', 'Machine Learning'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Featured <span className="text-[#00FF41]">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Showcasing impactful data engineering and ML solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#00FF41] text-black'
                    : 'bg-[#111111] border border-gray-800 text-gray-300 hover:border-[#00FF41]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden hover:border-[#00FF41]/50 transition-all group"
              >
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#00FF41]/10 rounded-lg">
                        <Folder className="text-[#00FF41]" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded-full text-xs text-[#00FF41]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00FF41] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#0a0a0a] border border-gray-700 rounded text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="bg-emerald-400/5 border border-emerald-400/20 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="text-emerald-400 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-gray-300 text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#00FF41]/30 rounded-lg text-sm text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10 transition-all"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#00FF41] text-black rounded-lg text-sm font-semibold hover:bg-[#00DD35] transition-all"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;