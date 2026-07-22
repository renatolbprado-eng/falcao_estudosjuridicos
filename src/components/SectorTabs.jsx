import React from 'react';
import { BookMarked, Scale, FileText } from 'lucide-react';

export default function SectorTabs({ activeSector, onSelectSector, lawsCount, jurisCount }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 mb-6 pb-2">
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Tab 1: Leis e Normas */}
        <button
          onClick={() => onSelectSector('leis_normas')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            activeSector === 'leis_normas'
              ? 'bg-emerald-600 text-slate-950 font-bold shadow-md shadow-emerald-950'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Leis e Normas</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeSector === 'leis_normas'
              ? 'bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/40'
              : 'bg-slate-800 text-slate-400'
          }`}>
            {lawsCount}
          </span>
        </button>

        {/* Tab 2: Jurisprudência */}
        <button
          onClick={() => onSelectSector('jurisprudencia')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            activeSector === 'jurisprudencia'
              ? 'bg-emerald-600 text-slate-950 font-bold shadow-md shadow-emerald-950'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Jurisprudência</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeSector === 'jurisprudencia'
              ? 'bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/40'
              : 'bg-slate-800 text-slate-400'
          }`}>
            {jurisCount}
          </span>
        </button>

      </div>

      <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
        <BookMarked className="w-3.5 h-3.5 text-emerald-400" />
        <span>Falcão Estudos • Nova Paraná RP</span>
      </div>
    </div>
  );
}
