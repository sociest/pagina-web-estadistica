import React from 'react';
import { Check, Filter, X } from 'lucide-react';

export default function BancoDatosFiltersSidebar({
  filtros,
  selectedTipos,
  selectedFormatos,
  selectedDecadas,
  setSelectedTipos,
  setSelectedFormatos,
  setSelectedDecadas,
  isMobileFiltersOpen,
  setIsMobileFiltersOpen,
  resultsCount,
}) {
  const toggleFilter = (setFilterState, filterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterState(filterArray.filter((item) => item !== value));
    } else {
      setFilterState([...filterArray, value]);
    }
  };

  return (
    <aside className={`lg:w-1/4 xl:w-[22%] shrink-0 ${isMobileFiltersOpen ? 'fixed inset-0 z-[200] bg-white overflow-y-auto p-6' : 'hidden lg:block sticky top-28 self-start'}`}>
      <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
        <div className="flex items-center justify-between lg:hidden mb-6 border-b border-slate-100 pb-4">
          <h3 className="text-2xl font-black text-[#001d3d] uppercase">Filtros</h3>
          <button onClick={() => setIsMobileFiltersOpen(false)} className="bg-slate-100 p-2.5 rounded-xl text-slate-500">
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <Filter className="text-[#ea580c]" size={20} />
          <h3 className="text-lg font-black text-[#001d3d] uppercase tracking-widest">Filtros</h3>
          {(selectedTipos.length > 0 || selectedFormatos.length > 0 || selectedDecadas.length > 0) && (
            <button
              onClick={() => {
                setSelectedTipos([]);
                setSelectedFormatos([]);
                setSelectedDecadas([]);
              }}
              className="ml-auto text-[10px] font-black uppercase bg-slate-100 text-slate-500 px-2.5 py-1.5 rounded-md hover:bg-[#ea580c] hover:text-white transition-colors"
            >
              Limpiar
            </button>
          )}
        </div>

        <div className="mb-6">
          <h4 className="text-[11px] md:text-xs font-black uppercase text-slate-400 tracking-widest mb-3">Tipo de Informacion</h4>
          <div className="space-y-3">
            {filtros.tipos.map((tipo) => (
              <button
                key={tipo}
                onClick={(event) => {
                  event.preventDefault();
                  toggleFilter(setSelectedTipos, selectedTipos, tipo);
                }}
                className="w-full flex items-center gap-3 cursor-pointer group text-left"
              >
                <div
                  className={`size-5 shrink-0 rounded flex items-center justify-center border transition-all ${
                    selectedTipos.includes(tipo)
                      ? 'bg-[#ea580c] border-[#ea580c] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-300 text-transparent group-hover:border-[#ea580c]'
                  }`}
                >
                  <Check size={14} strokeWidth={4} />
                </div>
                <span
                  className={`text-sm font-bold transition-colors ${
                    selectedTipos.includes(tipo) ? 'text-[#001d3d]' : 'text-slate-600 group-hover:text-[#001d3d]'
                  }`}
                >
                  {tipo}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-[11px] md:text-xs font-black uppercase text-slate-400 tracking-widest mb-3">Formato de Archivo</h4>
          <div className="flex flex-wrap gap-2">
            {filtros.formatos.map((fmt) => (
              <button
                key={fmt}
                onClick={() => toggleFilter(setSelectedFormatos, selectedFormatos, fmt)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all border ${
                  selectedFormatos.includes(fmt)
                    ? 'bg-[#001d3d] text-white border-[#001d3d] shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#001d3d]'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <h4 className="text-[11px] md:text-xs font-black uppercase text-slate-400 tracking-widest mb-3">Decada / Rango</h4>
          <div className="space-y-3">
            {filtros.decadas.map((decada) => (
              <button
                key={decada}
                onClick={(event) => {
                  event.preventDefault();
                  toggleFilter(setSelectedDecadas, selectedDecadas, decada);
                }}
                className="w-full flex items-center gap-3 cursor-pointer group text-left"
              >
                <div
                  className={`size-5 shrink-0 rounded flex items-center justify-center border transition-all ${
                    selectedDecadas.includes(decada)
                      ? 'bg-[#ea580c] border-[#ea580c] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-300 text-transparent group-hover:border-[#ea580c]'
                  }`}
                >
                  <Check size={14} strokeWidth={4} />
                </div>
                <span
                  className={`text-sm font-bold transition-colors ${
                    selectedDecadas.includes(decada)
                      ? 'text-[#001d3d]'
                      : 'text-slate-600 group-hover:text-[#001d3d]'
                  }`}
                >
                  {decada}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-10 pt-5 border-t border-slate-100">
          <button
            onClick={() => setIsMobileFiltersOpen(false)}
            className="w-full bg-[#001d3d] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl"
          >
            Ver {resultsCount} Resultados
          </button>
        </div>
      </div>
    </aside>
  );
}
