import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactOutput = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 4000);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.response?.data?.detail || 'Failed to send message. Please try again.');
      setTimeout(() => setError(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <div className="text-#00FF41 text-lg font-semibold mb-4 flex items-center gap-2">
        <Mail size={20} />
        Contact Me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-5">
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 text-sm mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-#00FF41/50 transition-all group"
              >
                <Mail size={18} className="text-#00FF41" />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm text-gray-300 group-hover:text-#00FF41 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-#00FF41/50 transition-all group"
              >
                <Linkedin size={18} className="text-#00FF41" />
                <div>
                  <div className="text-xs text-gray-500">LinkedIn</div>
                  <div className="text-sm text-gray-300 group-hover:text-#00FF41 transition-colors">
                    /in/themani-dev
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-#00FF41/50 transition-all group"
              >
                <Github size={18} className="text-#00FF41" />
                <div>
                  <div className="text-xs text-gray-500">GitHub</div>
                  <div className="text-sm text-gray-300 group-hover:text-#00FF41 transition-colors">
                    @themani-dev
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111111] border border-gray-800 rounded-lg p-5">
          <h3 className="text-white font-semibold mb-4">Send a Message</h3>
          
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <CheckCircle size={48} className="text-emerald-400 mb-3" />
              <div className="text-emerald-400 font-semibold mb-1">Message Sent!</div>
              <div className="text-gray-400 text-sm">I'll get back to you soon.</div>
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <AlertCircle size={48} className="text-red-400 mb-3" />
              <div className="text-red-400 font-semibold mb-1">Error</div>
              <div className="text-gray-400 text-sm">{error}</div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none focus:border-#00FF41 transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none focus:border-#00FF41 transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-2 text-gray-300 text-sm focus:outline-none focus:border-#00FF41 transition-colors resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00FF41] hover:bg-cyan-300 text-black font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactOutput;