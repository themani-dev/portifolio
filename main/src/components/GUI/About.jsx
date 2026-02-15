import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const About = () => {
  const highlights = [
    { icon: Database, title: 'Data Engineering', desc: 'Building scalable data pipelines' },
    { icon: Code, title: 'Backend Development', desc: 'Robust system architecture' },
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS, Azure, Docker, K8s' },
    { icon: Zap, title: 'Performance', desc: 'Optimizing at scale' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            About <span className="text-[#00FF41]">Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Passionate about building data-driven solutions
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-400 leading-relaxed">
                With expertise spanning data engineering, backend development, and cloud technologies, 
                I specialize in transforming complex data challenges into elegant, scalable solutions. 
                My work focuses on building systems that process millions of events daily while maintaining 
                high reliability and performance.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#111111] border border-gray-800 rounded-lg hover:border-[#00FF41]/50 transition-all group"
                >
                  <item.icon className="text-[#00FF41] mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;