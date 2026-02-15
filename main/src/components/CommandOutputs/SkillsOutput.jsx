import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Layers } from 'lucide-react';
import { skills } from '../../data/mock';

const iconMap = {
  "Data Engineering": Database,
  "Backend Development": Code,
  "Cloud & DevOps": Cloud,
  "Machine Learning": Cpu,
  "Databases": Layers
};

const SkillsOutput = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 font-terminal"
    >
      {/* Title */}
      <div className="text-terminal-cyan glow-cyan text-lg font-semibold mb-4 flex items-center gap-2">
        <Code size={20} />
        Technical Skills
      </div>

      <div className="space-y-4">
        {Object.entries(skills).map(([category, skillList], index) => {
          const Icon = iconMap[category];

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] border border-gray-800 rounded-lg p-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 text-terminal-purple glow-purple font-semibold mb-3">
                {Icon && <Icon size={18} />}
                <span>{category}</span>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="
                      px-3 py-1.5 
                      bg-[#0a0a0a] 
                      border border-terminal-green/30 
                      rounded-md 
                      text-sm 
                      text-gray-300 
                      hover:border-terminal-cyan 
                      hover:text-terminal-cyan 
                      transition-all 
                      cursor-default
                    "
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
  );
};

export default SkillsOutput;
