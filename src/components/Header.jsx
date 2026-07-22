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
    <header className="sticky top-0 z-40 header-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              
              {/* Government Logo attached by user */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 overflow-hidden border border-emerald-500/40 shadow-md flex items-center justify-center p-0.5 flex-shrink-0">
                <img
                  src="/governo_logo.png"
                  alt="Governo do Brasil"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-serif-legal">
                    Governo Federal
                  </h1>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Uma realização <strong className="text-emerald-400">Organização Governamental</strong> e <strong className="text-emerald-400">Nova Paraná RP</strong>
                </p>
              </div>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition border border-slate-700"
                title="Alternar Tema"
              >
                {darkMode ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-emerald-400" />}
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
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-900/90 text-slate-100 placeholder-slate-400 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition border border-slate-700"
                title="Alternar Tema"
              >
                {darkMode ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
