import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Globe, Layers } from 'lucide-react';
import CategoryBadge from '../../molecules/resources/CategoryBadge';
import FormatBadge from '../../molecules/resources/FormatBadge';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';

export default function BancoDatosDatasetGrid({
  datasets,
  onSelectDataset,
  searchQuery,
  clearFilters,
}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tighter">Resultados</h2>
        <div className="bg-slate-100 px-6 py-3 rounded-xl border border-slate-200 w-max">
          <p className="text-xs md:text-sm font-black uppercase tracking-widest text-[#001d3d]">{datasets.length} Encontrados</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence>
          {datasets.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => onSelectDataset(item)}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex flex-col group hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)] hover:border-[#ea580c] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <StatisticalOverlay opacity="0.02" color="#001d3d" />

              <div className="flex items-start justify-between mb-6 relative z-10">
                <CategoryBadge category={item.categoria} />
                <span className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest">{item.ano}</span>
              </div>

              <div className="flex-1 relative z-10 mb-8">
                <h3 className="text-xl md:text-2xl font-black text-[#001d3d] uppercase leading-tight mb-4 group-hover:text-[#ea580c] transition-colors line-clamp-3">
                  {item.titulo}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
                  <span className="flex items-center gap-1.5">
                    <Layers size={16} className="text-slate-400" /> {item.tamano}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Globe size={16} className="text-slate-400" /> {item.fuente}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.formatos.map((fmt) => (
                    <FormatBadge key={fmt} format={fmt} />
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between relative z-10 border-t border-slate-100 pt-6">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Ficha Tecnica</span>
                <span className="size-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {datasets.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center text-center py-32 bg-white border-2 border-dashed border-slate-200 rounded-[3rem] shadow-sm"
        >
          <div className="size-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
            <AlertCircle size={40} />
          </div>
          <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter mb-3">No hay resultados</h3>
          <p className="text-base text-slate-500 font-medium italic mb-8 max-w-lg mx-auto">
            No encontramos bases de datos o documentos que coincidan con la combinacion de filtros seleccionada.
          </p>
          <button
            onClick={clearFilters}
            className="bg-[#001d3d] text-white px-8 py-4.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ea580c] transition-colors shadow-lg"
          >
            Restablecer Filtros
          </button>
        </motion.div>
      )}
    </>
  );
}
