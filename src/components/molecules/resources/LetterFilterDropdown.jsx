import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, ChevronDown } from 'lucide-react';

export default function LetterFilterDropdown({ 
  selectedLetter, 
  setSelectedLetter, 
  setCurrentPageAuthors, 
  autores, 
  alphabet 
}) {
  const [isAlphaDropdownOpen, setIsAlphaDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAlphaDropdownOpen(false);
      }
    };
    if (isAlphaDropdownOpen) {
      // Using mousedown to capture outside clicks reliably
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isAlphaDropdownOpen]);

  const handleLetterSelect = (letra) => {
    setSelectedLetter(letra);
    setIsAlphaDropdownOpen(false);
    setCurrentPageAuthors(1);
  };

  const handleClear = () => {
    setSelectedLetter(null);
    setIsAlphaDropdownOpen(false);
    setCurrentPageAuthors(1);
  };

  return (
    <div className="relative hidden md:block z-10" ref={dropdownRef}>
      <button 
        type="button"
        onClick={() => setIsAlphaDropdownOpen(!isAlphaDropdownOpen)} 
        className={`shrink-0 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-colors border ${selectedLetter ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-lg' : 'bg-slate-100 text-[#001d3d] border-slate-100 hover:bg-slate-200'}`}
      >
        <Grid size={16}/> {selectedLetter ? `Letra: ${selectedLetter}` : 'Índice A-Z'} <ChevronDown size={16}/>
      </button>
      
      <AnimatePresence>
        {isAlphaDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute right-0 top-full mt-4 p-6 bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200 w-[350px] z-50"
          >
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Matriz Alfabética</span>
              <button 
                type="button"
                onClick={handleClear} 
                className="text-xs font-black uppercase bg-slate-100 text-slate-500 px-4 py-2 rounded-lg hover:bg-[#001d3d] hover:text-white transition-colors"
              >
                Limpiar
              </button>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {alphabet.map(letra => {
                const tieneAutores = autores.some(a => a.letra_inicial === letra);
                return (
                  <button 
                    key={letra} 
                    type="button"
                    disabled={!tieneAutores} 
                    onMouseDown={(e) => {
                      // Prevent mousedown from propagating to document which might close the dropdown prematurely in some edge cases
                      e.stopPropagation();
                    }}
                    onClick={() => handleLetterSelect(letra)}
                    className={`aspect-square rounded-xl flex items-center justify-center text-sm font-black transition-all ${selectedLetter === letra ? 'bg-[#ea580c] text-white shadow-md' : tieneAutores ? 'bg-slate-50 text-[#001d3d] border border-slate-100 hover:border-[#ea580c] hover:text-[#ea580c] hover:bg-orange-50' : 'bg-transparent text-slate-300 opacity-30 cursor-not-allowed'}`}
                  >
                    {letra}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
