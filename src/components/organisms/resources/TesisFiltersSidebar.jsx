import React from 'react';
import {
  ArrowDownAZ,
  CalendarDays,
  Check,
  ChevronDown,
  Filter,
  FileBadge,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TesisFiltersSidebar({
  activeTab,
  alphabet,
  indices,
  selectedAnios,
  selectedModalidades,
  selectedLetter,
  selectedEntity,
  setSelectedAnios,
  setSelectedModalidades,
  setSelectedLetter,
  setSelectedEntity,
  isMobileFiltersOpen,
  setIsMobileFiltersOpen,
  modalidades,
  filteredEntities,
  isYearDropdownOpen,
  setIsYearDropdownOpen,
}) {
  const toggleFilter = (setFilterState, filterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterState(filterArray.filter((item) => item !== value));
    } else {
      setFilterState([...filterArray, value]);
    }
  };

  return (
    <aside className={`lg:w-1/4 xl:w-[22%] shrink-0 ${isMobileFiltersOpen ? 'fixed inset-0 z-[200] bg-white overflow-y-auto p-6' : 'hidden lg:block sticky top-48 self-start'}`}>
      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
        {isMobileFiltersOpen && (
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
            <h3 className="text-xl font-black text-[#001d3d] uppercase tracking-tighter flex items-center gap-2">
              <Filter size={20} className="text-[#ea580c]" /> Filtros
            </h3>
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="bg-slate-100 p-2.5 rounded-xl text-slate-500"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {!isMobileFiltersOpen && (
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
          <h3 className="text-xl font-black text-[#001d3d] uppercase tracking-tighter flex items-center gap-2">
            <Filter size={20} className="text-[#ea580c]" /> Filtros
          </h3>
          {(selectedAnios.length > 0 || selectedModalidades.length > 0 || selectedLetter) && (
            <button
              onClick={() => {
                setSelectedAnios([]);
                setSelectedModalidades([]);
                setSelectedLetter(null);
                setSelectedEntity(null);
              }}
              className="text-xs font-black uppercase text-[#ea580c] hover:underline"
            >
              Limpiar
            </button>
          )}
          </div>
        )}

        <div className="mb-10">
          <button
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            className="w-full flex items-center justify-between mb-4 group"
          >
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-2 group-hover:text-[#ea580c] transition-colors">
              <CalendarDays size={16} /> Ano de Defensa
            </h4>
            <ChevronDown size={18} className={`text-slate-400 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isYearDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="max-h-64 overflow-y-auto bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 mb-4 shadow-inner">
                  {indices.anios.map((anio) => (
                    <button
                      key={anio}
                      onClick={() => toggleFilter(setSelectedAnios, selectedAnios, anio)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        selectedAnios.includes(anio)
                          ? 'bg-[#001d3d] text-white shadow-md'
                          : 'text-slate-600 hover:bg-white hover:text-[#ea580c]'
                      }`}
                    >
                      {anio}
                      {selectedAnios.includes(anio) && <Check size={16} strokeWidth={4} />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {['autores', 'tutores', 'materias', 'temas'].includes(activeTab) && !selectedEntity && (
          <div className="mb-10">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] mb-5 flex items-center gap-2">
              <ArrowDownAZ size={16} /> Indice Alfabetico
            </h4>
            <div className="grid grid-cols-6 gap-2">
              {alphabet.map((letter) => {
                const available = filteredEntities.availableLetters.includes(letter);
                return (
                  <button
                    key={letter}
                    disabled={!available}
                    onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                    className={`aspect-square rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                      selectedLetter === letter
                        ? 'bg-[#ea580c] text-white shadow-lg scale-110'
                        : available
                        ? 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-[#001d3d] hover:bg-white'
                        : 'bg-transparent text-slate-200 opacity-20 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'general' && (
          <div className="mb-4">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] mb-5 flex items-center gap-2">
              <FileBadge size={16} /> Modalidad
            </h4>
            <div className="space-y-4">
              {modalidades.map((mod) => (
                <button
                  key={mod}
                  onClick={() => toggleFilter(setSelectedModalidades, selectedModalidades, mod)}
                  className="w-full flex items-center gap-3 group text-left"
                >
                  <div
                    className={`size-6 rounded-lg flex items-center justify-center border transition-all ${
                      selectedModalidades.includes(mod)
                        ? 'bg-[#ea580c] border-[#ea580c] text-white shadow-md'
                        : 'bg-slate-50 border-slate-300 text-transparent group-hover:border-[#ea580c]'
                    }`}
                  >
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <span
                    className={`text-sm md:text-base font-bold transition-colors ${
                      selectedModalidades.includes(mod) ? 'text-[#001d3d]' : 'text-slate-600'
                    }`}
                  >
                    {mod}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
