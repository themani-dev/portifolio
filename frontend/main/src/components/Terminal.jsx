import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, helpText, BOOT_LINES } from '../data/mock';
import AboutOutput from './CommandOutputs/AboutOutput';
import SkillsOutput from './CommandOutputs/SkillsOutput';
import ProjectsOutput from './CommandOutputs/ProjectsOutput';
import ExperienceOutput from './CommandOutputs/ExperienceOutput';
import ContactOutput from './CommandOutputs/ContactOutput';
import MatrixRain from './MatrixRain';
import axios from 'axios';
import { Terminal } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Terminal_ui = ({ onToggleMode }) => {
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const endRef = useRef(null);
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFormFocused, setIsFormFocused] = useState(false);


  // Boot sequence
  const hasBooted = useRef(false);

  useEffect(() => {
    if (hasBooted.current) return;
    hasBooted.current = true;
    
    BOOT_LINES.forEach(({ text, delay, isAscii }) => {
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          { type: 'system', content: text, isAscii }
        ]);
      }, delay);
    });

    setTimeout(() => {
      setIsBooting(false);
    }, 3000);

  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input when clicking terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Track command analytics
  const trackCommand = async (command) => {
    try {
      await axios.post(`${API}/analytics/command`, {
        command: command,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      // Silently fail analytics tracking
      console.debug('Analytics tracking failed:', error);
    }
  };

  // Command handler
  const executeCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    
    // Add to history
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Track command analytics
    if (command) {
      trackCommand(command);
    }

    // Execute command
    switch (command) {
      case 'help':
        setHistory(prev => [...prev, { type: 'help', content: helpText }]);
        break;
      case 'about':
        setHistory(prev => [...prev, { type: 'about' }]);
        break;
      case 'skills':
        setHistory(prev => [...prev, { type: 'skills' }]);
        break;
      case 'projects':
        setHistory(prev => [...prev, { type: 'projects' }]);
        break;
      case 'experience':
        setHistory(prev => [...prev, { type: 'experience' }]);
        break;
      case 'contact':
        setHistory(prev => [...prev, { type: 'contact' }]);
        break;
      case 'resume':
        setHistory(prev => [...prev, { 
          type: 'system', 
          content: 'Opening resume... (Resume link would be opened here)' 
        }]);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'sudo hire mani':
        setHistory(prev => [...prev, { 
          type: 'system', 
          content: '🎉 Permission granted! Initiating hiring process...\nGreat choice! You can reach me at kallammanikantareddy@gmail.com' 
        }]);
        break;
      case '':
        break;
      default:
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: `Command not found: ${cmd}. Type 'help' for available commands.` 
        }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    
    const active = document.activeElement;

    const isTyping =
      active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable;

    if (isTyping) return; // 🔥 STOP terminal from capturing keys


    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'about', 'skills', 'projects', 'experience', 'contact', 'resume', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const renderOutput = (entry, index) => {
    switch (entry.type) {
      case 'input':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-terminal-green glow-green leading-relaxed">{personalInfo.username}@portfolio:~$</span>
            <span className="text-gray-300">{entry.content}</span>
          </motion.div>
        );
      case 'system':
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-2 ${
            entry.isAscii
              ? "text-[#00FF41] text-xs leading-[1] font-mono"
              : "text-[#00FF41] text-sm leading-tight font-mono"
          }`}
        >
          <pre className="whitespace-pre m-0">
            {entry.content}
          </pre>
        </motion.div>
      );
      case 'error':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 mb-4"
          >
            {entry.content}
          </motion.div>
        );
      case 'help':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="font-mono mb-3">Available Commands:</div>
            <div className="font-mono space-y-2">
              {entry.content.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-mono text-emerald-400 w-32">{item.command}</span>
                  <span className="font-mono text-gray-400">- {item.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'about':
        return <AboutOutput key={index} />;
      case 'skills':
        return <SkillsOutput key={index} />;
      case 'projects':
        return <ProjectsOutput key={index} />;
      case 'experience':
        return <ExperienceOutput key={index} />;
      case 'contact':
        return <ContactOutput 
                key={index} 
                onFormFocus={() => setIsFormFocused(true)}
                onFormBlur={() => setIsFormFocused(false)}/>;
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono p-4 sm:p-8 relative"
      onClick={handleTerminalClick}
    >
      {/* Matrix Rain Background */}
      <MatrixRain opacity={0.12} />

    {/* Navigation */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent backdrop-blur-sm"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-500
              ${scrolled ? "h-14" : "h-16"}
            `}
          >
            {/* Logo */}
            <motion.button
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => scrollTo("#terminal")}
              className="flex items-center gap-2 glow-green text-terminal-green font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              <Terminal className="w-4 h-4" />
              mani@portfolio
            </motion.button>

            {/* Toggle Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={(e) => {
                e.stopPropagation();
                onToggleMode();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#00FF41] text-black rounded-lg hover:bg-[#00DD35] transition-all font-semibold shadow-[0_0_10px_#00FF41]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span className="hidden sm:inline">UI Mode</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00FF41] to-transparent opacity-60"></div>
      </nav>



      <div className="max-w-5xl mx-auto mt-20 relative z-10">
        
        {/* Terminal window chrome */}
        <div className="rounded-t-lg border border-gray-700 bg-[#1a1a1a]/60 px-4 py-2 flex items-center gap-2 backdrop-blur-md">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-muted-foreground">mani@portfolio — bash</span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="bg-[#0d0d0d] border-x border-b border-gray-800 rounded-b-lg p-6 h-[70vh] max-h-[750px] overflow-y-auto custom-scrollbar"
        >
          {/* Command History */}
          <div className="space-y-1">
            {history.map((entry, index) => renderOutput(entry, index))}
          </div>

          {/* Input Line */}
          {!isBooting && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
              <span className="text-terminal-green glow-green leading-relaxed">{personalInfo.username}@portfolio:~$</span>
              
              <div className="relative flex-1 font-mono">
                {/* Hidden real input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setCaretPosition(e.target.selectionStart || 0);
                  }}
                  onClick={(e) =>
                    setCaretPosition(e.target.selectionStart || 0)
                  }
                  onKeyUp={(e) =>
                    setCaretPosition(e.target.selectionStart || 0)
                  }
                  onKeyDown={handleKeyDown}
                  className="absolute inset-0 w-full bg-transparent outline-none text-transparent caret-transparent"
                  autoFocus
                  spellCheck="false"
                />

                {/* Visible terminal text */}
                <div className="whitespace-pre text-[#00FF41]">
                  {input.slice(0, caretPosition)}
                  
                  
                  {(!isFormFocused && (
                    <span className="bg-[#00FF41] w-[2px] h-[0.1em] text-black animate-blink-slow">
                      {input[caretPosition] || " "}
                    </span>
                  ))}
                  
                  {input.slice(caretPosition + 1)}
                </div>
              </div>
            </form>
          )}

          <div ref={endRef} />
        </div>
      </div>

      {/* Hint */}
        {!isBooting && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-4"
          >
            Type <span className="text-terminal-cyan">'help'</span> for available commands · Click toggle for GUI sections
          </motion.p>
        )}
    </div>
  );
};

export default Terminal_ui;