import React, { useState } from 'react';
import { X, Copy, Check, Calendar, Tag, FileText, Scale, Share2, ExternalLink } from 'lucide-react';

export default function DetailModal({ item, sector, subjectTitle, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const isLaw = sector === 'leis_normas';

  const handleCopyCitation = () => {
    const citationText = `[ESTUDOS JURÍDICOS - FALCÃO / GOVERNO FEDERAL]\n${item.type} - ${item.number}\n${item.title}\n----------------------------------------\n${item.summary}\n\n${item.fullContent}`;
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-900 text-amber-300">
                {subjectTitle}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                isLaw ? 'badge-law' : 'badge-juris'
              }`}>
                {item.type}
              </span>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                {item.number}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif-legal">
              {item.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
          
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1">
              Ementa / Resumo da Norma
            </h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              {item.summary}
            </p>
          </div>

          {/* Full Text Content */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3 flex items-center gap-2 font-serif-legal">
              <FileText className="w-4 h-4 text-amber-500" />
              Texto Integral Dispositivo
            </h3>
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed shadow-inner">
              {item.fullContent}
            </div>
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Tags:</span>
            {item.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Publicado em: {item.date}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyCitation}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Citação Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Citação para RP</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 font-semibold text-xs transition"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
