import React from 'react';
import { Scale, Shield, Gavel, BookOpen, Building2, Vote, Scroll } from 'lucide-react';
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
          <h2 className="text-lg font-bold text-slate-100 font-serif-legal flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Grupos de Estudos Jurídicos
          </h2>
          <p className="text-xs text-slate-400">
            Selecione uma matéria para acessar suas Leis, Normas e Jurisprudências
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-semibold">
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
                  ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white border-emerald-500 shadow-lg ring-2 ring-emerald-500/40'
                  : 'bg-slate-900/90 text-slate-100 border-slate-800 hover:border-emerald-500/60 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Row: Icon & Counter */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-slate-800 text-emerald-400 border border-slate-700'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className={`px-2 py-0.5 rounded-md font-medium ${
                    isActive
                      ? 'bg-emerald-900 text-emerald-300 border border-emerald-700'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {lawsCount} N
                  </span>
                  <span className={`px-2 py-0.5 rounded-md font-medium ${
                    isActive
                      ? 'bg-emerald-900 text-emerald-200 border border-emerald-700'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {jurisCount} J
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className={`text-base font-bold mb-1 font-serif-legal line-clamp-1 ${
                isActive ? 'text-emerald-300' : 'text-slate-100 group-hover:text-emerald-400'
              }`}>
                {sub.title}
              </h3>
              <p className={`text-xs line-clamp-2 ${
                isActive ? 'text-slate-300' : 'text-slate-400'
              }`}>
                {sub.subtitle}
              </p>

              {/* Active Indicator Bar */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
