import React from 'react';
import { Search, Sun, Moon, Scale, Shield, Globe, ExternalLink } from 'lucide-react';

export default function Header({
  searchTerm,
  setSearchTerm,
  darkMode,
  setDarkMode,
  activeSubjectTitle
}) {
  return (
    <header className="sticky top-0 z-40 header-glass border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md border border-amber-500/30 flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 font-serif-legal">
                    Governo Federal
                  </h1>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Uma realização <strong>Organização Governamental</strong> e <strong>Nova Paraná RP</strong>
                </p>
              </div>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                title="Alternar Tema"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Search Bar & Desktop Theme Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar leis, normas, artigos..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/40"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                title="Alternar Tema Claro / Escuro"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
