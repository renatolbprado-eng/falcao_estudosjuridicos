import React from 'react';
import { Scale, Github, Globe, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-bold shadow-md">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 font-serif-legal">
                Governo Federal
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Uma realização <strong>Organização Governamental</strong> e <strong>Nova Paraná RP</strong>
              </p>
            </div>
          </div>

          {/* Center Integration Tag */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span>Falcão - Estudos Jurídicos</span>
          </div>

          {/* Right Git */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/renatolbprado-eng/falcao_estudosjuridicos.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-500 transition"
            >
              <Github className="w-4 h-4" />
              <span>Repositório Git</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-center text-[11px] text-slate-400">
          © {new Date().getFullYear()} Governo Federal • Um projeto de Nova Paraná RP. Publicação estática no Render.
        </div>
      </div>
    </footer>
  );
}
