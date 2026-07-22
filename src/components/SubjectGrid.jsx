import React from 'react';
import { Scale, Shield, Gavel, BookOpen, Building2, Vote, Scroll, ChevronRight } from 'lucide-react';
import { LEGAL_DATA } from '../data/legalData';

const ICON_MAP = {
  Scale,
  Shield,
  Gavel,
  BookOpen,
  Building2,
  Vote,
  Scroll
};

export default function SubjectGrid({ subjects, activeSubjectId, onSelectSubject }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif-legal">
            Grupos de Estudos Jurídicos
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Selecione uma matéria para acessar suas Leis, Normas e Jurisprudências
          </p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
          {subjects.length} Matérias Principais
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {subjects.map((sub) => {
          const IconComp = ICON_MAP[sub.icon] || Scale;
          const isActive = activeSubjectId === sub.id;
          const lawsCount = LEGAL_DATA[sub.id]?.leis_normas?.length || 0;
          const jurisCount = LEGAL_DATA[sub.id]?.jurisprudencia?.length || 0;

          return (
            <button
              key={sub.id}
              onClick={() => onSelectSubject(sub.id)}
              className={`text-left p-4 rounded-2xl transition-all duration-200 border relative overflow-hidden group ${
                isActive
                  ? 'bg-blue-900 text-white border-amber-500/50 shadow-lg ring-2 ring-amber-500/30'
                  : 'bg-white dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Row: Icon & Counter */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive
                      ? 'bg-amber-400 text-blue-950 font-bold'
                      : 'bg-slate-100 dark:bg-slate-700/70 text-blue-800 dark:text-blue-400'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className={`px-2 py-0.5 rounded-md font-medium ${
                    isActive
                      ? 'bg-blue-800 text-amber-300'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {lawsCount} N
                  </span>
                  <span className={`px-2 py-0.5 rounded-md font-medium ${
                    isActive
                      ? 'bg-blue-800 text-amber-200'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {jurisCount} J
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className={`text-base font-bold mb-1 font-serif-legal line-clamp-1 ${
                isActive ? 'text-white' : 'text-slate-900 dark:text-slate-100'
              }`}>
                {sub.title}
              </h3>
              <p className={`text-xs line-clamp-2 ${
                isActive ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'
              }`}>
                {sub.subtitle}
              </p>

              {/* Active Indicator Bar */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
