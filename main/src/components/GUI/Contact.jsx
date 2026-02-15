import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
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
    <section id="contact" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Get In <span className="text-[#00FF41]">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#00FF41]/10 transition-all group"
                  >
                    <Mail className="text-[#00FF41] flex-shrink-0" size={20} />
                    <div className="min-w-0">
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm text-gray-300 group-hover:text-[#00FF41] transition-colors truncate">
                        {personalInfo.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#00FF41]/10 transition-all group"
                  >
                    <Linkedin className="text-[#00FF41] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-500">LinkedIn</div>
                      <div className="text-sm text-gray-300 group-hover:text-[#00FF41] transition-colors">
                        /in/themani-dev
                      </div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#00FF41]/10 transition-all group"
                  >
                    <Github className="text-[#00FF41] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-500">GitHub</div>
                      <div className="text-sm text-gray-300 group-hover:text-[#00FF41] transition-colors">
                        @themani-dev
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg">
                    <MapPin className="text-[#00FF41] flex-shrink-0" size={20} />
                    <div>
                      <div className="text-xs text-gray-500">Location</div>
                      <div className="text-sm text-gray-300">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111111] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle size={64} className="text-emerald-400 mb-4" />
                    <div className="text-emerald-400 text-xl font-semibold mb-2">Message Sent!</div>
                    <div className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</div>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <AlertCircle size={64} className="text-red-400 mb-4" />
                    <div className="text-red-400 text-xl font-semibold mb-2">Error</div>
                    <div className="text-gray-400">{error}</div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00FF41] transition-colors disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00FF41] transition-colors disabled:opacity-50"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        rows={5}
                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#00FF41] transition-colors resize-none disabled:opacity-50"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00FF41] hover:bg-[#00DD35] text-black font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;