import React from 'react';
import { Calendar, Tag, ChevronRight, FileText, Scale, CheckCircle2 } from 'lucide-react';

export default function ItemList({ items, sector, onSelectItem, activeSubjectTitle }) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-3">
          <Scale className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1 font-serif-legal">
          Nenhum registro encontrado
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Não foram encontrados documentos em <strong>{activeSubjectTitle}</strong> para o setor de{' '}
          <strong>{sector === 'leis_normas' ? 'Leis e Normas' : 'Jurisprudência'}</strong> com os filtros atuais.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isLaw = sector === 'leis_normas';

        return (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="interactive-card p-5 cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
              
              {/* Header Badges & Number */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                  isLaw ? 'badge-law' : 'badge-juris'
                }`}>
                  {item.type}
                </span>

                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2.5 py-1 rounded-lg">
                  {item.number}
                </span>

                {item.status && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg badge-status flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {item.status}
                  </span>
                )}
              </div>

              {/* Date / Relator info */}
              <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400">
                {item.relator && (
                  <span className="text-amber-600 dark:text-amber-400 font-medium">
                    Relator: {item.relator}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

            {/* Title & Ementa Summary */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors font-serif-legal">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
              {item.summary}
            </p>

            {/* Tags & Action Button */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/60">
              <div className="flex flex-wrap items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                {item.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-blue-800 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Ver Texto Integral</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
