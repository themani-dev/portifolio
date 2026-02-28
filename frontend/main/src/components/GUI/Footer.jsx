import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-purple-900/40 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        
        {/* Stack Line */}
        <div className="font-mono text-sm text-gray-400 tracking-wide">
          Built with{' '}
          <span className="text-terminal-green glow-green">React</span>
          {' + '}
          <span className="text-terminal-cyan glow-cyan">TypeScript</span>
          {' + '}
          <span className="text-terminal-purple glow-purple">Tailwind</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} mani. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
