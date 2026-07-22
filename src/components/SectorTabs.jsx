import React from 'react';
import { BookMarked, Scale, FileText } from 'lucide-react';

export default function SectorTabs({ activeSector, onSelectSector, lawsCount, jurisCount }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/80 mb-6 pb-2">
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Tab 1: Leis e Normas */}
        <button
          onClick={() => onSelectSector('leis_normas')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            activeSector === 'leis_normas'
              ? 'bg-blue-900 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Leis e Normas</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeSector === 'leis_normas'
              ? 'bg-blue-800 text-amber-300 font-bold'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}>
            {lawsCount}
          </span>
        </button>

        {/* Tab 2: Jurisprudência */}
        <button
          onClick={() => onSelectSector('jurisprudencia')}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            activeSector === 'jurisprudencia'
              ? 'bg-blue-900 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Jurisprudência</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            activeSector === 'jurisprudencia'
              ? 'bg-blue-800 text-amber-300 font-bold'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}>
            {jurisCount}
          </span>
        </button>

      </div>

      <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <BookMarked className="w-3.5 h-3.5 text-amber-500" />
        <span>Falcão Estudos • Base Legal RP</span>
      </div>
    </div>
  );
}
