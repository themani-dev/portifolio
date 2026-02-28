import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../../data/mock';

const ExperienceOutput = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 font-terminal"
    >
      {/* Title */}
      <div className="text-terminal-cyan glow-cyan text-lg font-semibold mb-4 flex items-center gap-2">
        <Briefcase size={20} />
        Work Experience
      </div>

      <div className="space-y-4">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="
              bg-[#111111] 
              border border-gray-800 
              rounded-lg 
              p-5 
              hover:border-terminal-green/50 
              transition-all
            "
          >
            {/* Job Header */}
            <div className="mb-4">
              <h3 className="text-white font-bold text-lg mb-1">
                {job.title}
              </h3>

              <div className="text-terminal-cyan font-semibold mb-2">
                {job.company}
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities Timeline */}
            <div className="border-l-2 border-terminal-green/30 pl-4 ml-2 space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + idx * 0.05 }}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="text-terminal-green mt-1.5">▹</span>
                  <span>{resp}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceOutput;
