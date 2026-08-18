import React from 'react';
import { Smartphone, Terminal } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cyber-bg/90 backdrop-blur border-b border-cyber-border">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-cyan" />
          <span className="hidden sm:inline text-cyber-muted">SYSTEM:</span>
          <span className="text-cyber-cyan font-bold">ONLINE</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Action Links */}
        <nav className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/whebertonfialho/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
            <span className="hidden md:inline">LINKEDIN</span>
          </a>
          <a
            href="https://github.com/WhebertonFialho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyber-muted hover:text-cyber-cyan transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden md:inline">GITHUB</span>
          </a>
          <a
            href="#apps"
            className="flex items-center gap-1.5 px-3 py-1 bg-cyber-card border border-cyber-border rounded text-cyber-crimson hover:border-cyber-crimson transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span>APPS</span>
          </a>
        </nav>
      </div>
    </header>
  );
};