import React from 'react';

const techGroups = [
  {
    title: 'FRONTEND & MOBILE',
    items: ['React', 'React Native', 'Material UI', 'Reactstrap', 'Drizzle ORM'],
  },
  {
    title: 'BACKEND & ECOSSISTEMA',
    items: ['Delphi', 'C#', 'REST APIs', 'Python', 'Django']
  },
  {
    title: 'BANCO DE DADOS',
    items: ['Oracle', 'SQL Server', 'SQLite', 'MySQL'],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="stack">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-mono font-bold text-cyber-cyan tracking-wider flex items-center gap-2">
          <span className="text-cyber-crimson">&gt;</span> STACK_TECNOLÓGICA
        </h2>
        <div className="w-24 h-1 bg-cyber-crimson mt-2 shadow-glow-crimson" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techGroups.map((group) => (
          <div
            key={group.title}
            className="bg-cyber-card border border-cyber-border p-6 rounded-xl hover:border-cyber-cyan/50 transition-all"
          >
            <h3 className="font-mono text-xs font-bold text-cyber-crimson mb-4 tracking-widest">
              // {group.title}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-cyber-text flex items-center gap-2"
                >
                  <span className="text-cyber-cyan">&gt;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};