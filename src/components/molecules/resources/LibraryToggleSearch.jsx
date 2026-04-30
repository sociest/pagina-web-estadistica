import React from 'react';
import { Search, BookCopy, UserCircle } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import LetterFilterDropdown from './LetterFilterDropdown';

export default function LibraryToggleSearch({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  handleSimpleSearch,
  selectedLetter,
  setSelectedLetter,
  setCurrentPageAuthors,
  autores,
  alphabet
}) {
  return (
    <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-200 p-2.5 mb-12 sticky top-24 z-40">
      <div className="flex flex-col lg:flex-row items-center gap-3 relative">
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] pointer-events-none">
          <StatisticalOverlay opacity="0.02" color="#001d3d" />
        </div>
        
        {/* Toggle Switch */}
        <div className="flex bg-slate-100 p-1.5 rounded-[1.25rem] w-full lg:w-auto shrink-0 border border-slate-200 relative z-10">
            <button 
              type="button"
              onClick={() => setActiveTab('libros')}
              className={`flex-1 flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'libros' ? 'bg-[#001d3d] text-white shadow-lg' : 'text-slate-500 hover:text-[#001d3d]'}`}
            >
              <BookCopy size={18} /> Libros
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('autores')}
              className={`flex-1 flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'autores' ? 'bg-[#ea580c] text-white shadow-lg' : 'text-slate-500 hover:text-[#ea580c]'}`}
            >
              <UserCircle size={18} /> Autores
            </button>
        </div>

        {/* Barra de Búsqueda */}
        <form onSubmit={handleSimpleSearch} className="w-full relative group flex-1 z-10">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ea580c] transition-colors size-6" />
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={activeTab === 'libros' ? "BUSCAR LIBRO O TEMA..." : "BUSCAR AUTOR O INSTITUCIÓN..."}
            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-14 pr-5 text-sm font-black uppercase tracking-widest text-[#001d3d] focus:outline-none focus:bg-white focus:border-[#ea580c] transition-all shadow-inner"
          />
        </form>

        {/* Menú Dropdown A-Z para Autores */}
        {activeTab === 'autores' && (
          <LetterFilterDropdown 
            selectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
            setCurrentPageAuthors={setCurrentPageAuthors}
            autores={autores}
            alphabet={alphabet}
          />
        )}
      </div>
    </div>
  );
}
