import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'career' | 'academic' | 'project'>('all');

  const filteredItems = timelineData.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto" id="timeline">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-mono font-bold text-cyber-cyan tracking-wider flex items-center gap-2">
          <span className="text-cyber-crimson">&gt;</span> LINHA_DO_TEMPO.log
        </h2>
        <div className="w-24 h-1 bg-cyber-crimson mt-2 shadow-glow-crimson" />

        <div className="flex flex-wrap gap-2 mt-8 bg-cyber-card p-1.5 rounded-lg border border-cyber-border">
          {(['all', 'project', 'career', 'academic'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-cyber-cyan text-cyber-bg font-bold shadow-glow-cyan'
                  : 'text-cyber-muted hover:text-cyber-text'
              }`}
            >
              {cat === 'all' ? '[TODOS]' : `[${cat.toUpperCase()}]`}
            </button>
          ))}
        </div>
      </div>

      <div className="relative border-l-2 border-cyber-border ml-4 md:ml-32 space-y-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-6 md:pl-8 group"
          >
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-cyan group-hover:border-cyber-crimson group-hover:scale-125 transition-all shadow-glow-cyan" />

            <span className="hidden md:block absolute -left-32 top-1 w-24 text-right font-mono text-xs text-cyber-cyan">
              {item.period}
            </span>

            <div className="bg-cyber-card p-6 rounded-lg border border-cyber-border group-hover:border-cyber-cyan/50 transition-all shadow-lg">
              <span className="md:hidden inline-block font-mono text-xs text-cyber-cyan mb-2">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-cyber-text">{item.title}</h3>
              <p className="text-xs font-mono text-cyber-crimson mb-3">{item.subtitle}</p>
              <p className="text-sm text-cyber-muted mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-bg border border-cyber-border text-cyber-cyan"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};