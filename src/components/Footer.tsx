import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-border py-8 mt-20 bg-cyber-bg font-mono text-xs text-cyber-muted text-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Wheberton Fialho. Todos os direitos reservados.</p>
        <p className="text-cyber-cyan">
          [ BUILT WITH REACT + TAILWIND ]
        </p>
      </div>
    </footer>
  );
};