import React from 'react';
import { Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';

export const AppHub: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto" id="apps">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-mono font-bold text-cyber-cyan tracking-wider flex items-center gap-2">
          <span className="text-cyber-crimson">&gt;</span> PERSONAL_PROJECTS
        </h2>
        <div className="w-24 h-1 bg-cyber-crimson mt-2 shadow-glow-crimson" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-cyber-card border border-cyber-cyan/40 rounded-xl p-6 relative overflow-hidden group hover:shadow-glow-cyan transition-all">
          <div className="absolute top-0 right-0 bg-cyber-cyan text-cyber-bg text-[10px] font-mono font-bold px-3 py-1 rounded-bl-lg">
            PUBLICADO
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-cyber-bg border border-cyber-border rounded-lg text-cyber-cyan">
              <Smartphone className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyber-text">Meu Financeiro</h3>
              <p className="text-xs font-mono text-cyber-muted">React Native &bull; Offline First</p>
            </div>
          </div>

          <p className="text-sm text-cyber-muted mb-6 leading-relaxed">
            Gestão financeira pessoal com cálculo automático de parcelamento, banco local seguro e interface otimizada para usabilidade diária.
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-cyber-border">
            <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4" /> Verificado na Play Store
            </span>
            <a
              href="https://play.google.com/store/apps/details?id=com.whebertonfialho.meufinanceiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-bold text-cyber-bg bg-cyber-cyan px-4 py-2 rounded hover:bg-white transition-all shadow-glow-cyan"
            >
              Acessar App <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="bg-cyber-card/50 border border-dashed border-cyber-border rounded-xl p-6 flex flex-col items-center justify-center text-center group hover:border-cyber-crimson/50 transition-all">
          <div className="p-3 bg-cyber-bg border border-cyber-border rounded-full text-cyber-muted group-hover:text-cyber-crimson transition-all mb-3">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-cyber-muted group-hover:text-cyber-text transition-all">
            [Novo Projeto em Breve]
          </h3>
          <p className="text-xs font-mono text-cyber-muted mt-1">
            Status: Em Desenvolvimento...
          </p>
        </div>
      </div>
    </section>
  );
};