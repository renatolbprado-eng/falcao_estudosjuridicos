import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubjectGrid from './components/SubjectGrid';
import SectorTabs from './components/SectorTabs';
import ItemList from './components/ItemList';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';
import { SUBJECT_GROUPS, LEGAL_DATA } from './data/legalData';
import { Search, Sparkles, BookOpen, Shield, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSubjectId, setActiveSubjectId] = useState('civil');
  const [activeSector, setActiveSector] = useState('leis_normas');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Active Subject details
  const currentSubject = SUBJECT_GROUPS.find((s) => s.id === activeSubjectId) || SUBJECT_GROUPS[0];
  const subjectData = LEGAL_DATA[activeSubjectId] || { leis_normas: [], jurisprudencia: [] };

  const lawsList = subjectData.leis_normas || [];
  const jurisList = subjectData.jurisprudencia || [];

  // Current sector list before search filter
  const currentSectorItems = activeSector === 'leis_normas' ? lawsList : jurisList;

  // Filter items if search term is active across current subject OR across all subjects if searching global
  const filteredItems = currentSectorItems.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchTitle = item.title.toLowerCase().includes(term);
    const matchNumber = item.number.toLowerCase().includes(term);
    const matchSummary = item.summary.toLowerCase().includes(term);
    const matchType = item.type.toLowerCase().includes(term);
    const matchTags = item.tags?.some((t) => t.toLowerCase().includes(term));
    const matchContent = item.fullContent?.toLowerCase().includes(term);
    return matchTitle || matchNumber || matchSummary || matchType || matchTags || matchContent;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-200">
      
      {/* Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSubjectTitle={currentSubject.title}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner Hero */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden border border-amber-500/20">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Base Jurídica RP • Governo Federal</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif-legal mb-2">
              Falcão - Estudos Jurídicos
            </h1>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Navegue com facilidade entre as normas, decretos, leis ordinárias e jurisprudência dos órgãos do Governo Federal. Selecione um grupo abaixo para consultar o ordenamento jurídico.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200 font-medium">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                7 Matérias Principais
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-400" />
                Setores: Leis & Jurisprudência
              </span>
            </div>
          </div>
        </div>

        {/* 7 Main Subject Groups Navigation */}
        <SubjectGrid
          subjects={SUBJECT_GROUPS}
          activeSubjectId={activeSubjectId}
          onSelectSubject={(id) => {
            setActiveSubjectId(id);
            setSearchTerm('');
          }}
        />

        {/* Selected Subject Content Header */}
        <div className="bg-white dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          
          {/* Active Title Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Matéria Selecionada
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-serif-legal">
                {currentSubject.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {currentSubject.subtitle}
              </p>
            </div>

            {searchTerm && (
              <div className="text-xs px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300">
                Filtro ativo: "<strong>{searchTerm}</strong>" ({filteredItems.length} resultados)
              </div>
            )}
          </div>

          {/* Sector Tabs (Leis e Normas / Jurisprudência) */}
          <SectorTabs
            activeSector={activeSector}
            onSelectSector={setActiveSector}
            lawsCount={lawsList.length}
            jurisCount={jurisList.length}
          />

          {/* Document / Item List */}
          <ItemList
            items={filteredItems}
            sector={activeSector}
            onSelectItem={setSelectedItem}
            activeSubjectTitle={currentSubject.title}
          />

        </div>
      </main>

      {/* Reader Modal */}
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          sector={activeSector}
          subjectTitle={currentSubject.title}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
