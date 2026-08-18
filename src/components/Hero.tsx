import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 px-4 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xs text-cyber-crimson tracking-widest uppercase">
          &gt; Full-Stack &amp; Mobile Developer
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-cyber-text mt-2 mb-4 tracking-tight">
          Wheberton Fialho<span className="text-cyber-cyan">.dev</span>
        </h1>
        <p className="text-cyber-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
          Profissional de desenvolvimento de software com sólida experiência na construção de sistemas e soluções para diferentes plataformas, atuando na definição de arquiteturas, desenvolvimento, integração e manutenção de aplicações.
        </p>

        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
          {['PYTHON', 'REACT', 'REACT_NATIVE', 'DELPHI'].map((st) => (
            <span
              key={st}
              className="px-3 py-1.5 bg-cyber-card border border-cyber-border rounded text-cyber-cyan"
            >
              {st}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#timeline"
            className="flex items-center gap-2 bg-cyber-cyan text-cyber-bg font-mono font-bold text-xs px-6 py-3 rounded shadow-glow-cyan hover:bg-white transition-all"
          >
            <Code2 className="w-4 h-4" /> VER_TRAJETÓRIA
          </a>
          <a
            href="https://www.linkedin.com/in/whebertonfialho/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyber-card border border-cyber-border text-cyber-text font-mono text-xs px-6 py-3 rounded hover:border-cyber-crimson transition-all"
          >
            CONTATO_LINKEDIN
          </a>
        </div>
      </motion.div>

      <div className="mt-20 flex justify-center">
        <a href="#timeline" className="text-cyber-muted hover:text-cyber-cyan animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};