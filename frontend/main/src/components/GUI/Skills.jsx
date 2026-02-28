import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Cloud, Cpu, Layers } from 'lucide-react';
import { skills } from '../../data/mock';

const iconMap = {
  "Data Engineering": Database,
  "Backend Development": Code,
  "Cloud & DevOps": Cloud,
  "Machine Learning": Cpu,
  "Databases": Layers
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Technical <span className="text-[#00FF41]">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = iconMap[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0d0d0d] border border-gray-800 rounded-lg p-6 hover:border-[#00FF41]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="text-[#00FF41]" size={24} />}
                    <h3 className="text-xl font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.03 }}
                        className="px-4 py-2 bg-[#111111] border border-[#00FF41]/20 rounded-lg text-sm text-gray-300 hover:border-[#00FF41] hover:text-[#00FF41] hover:bg-[#00FF41]/5 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;