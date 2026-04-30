import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Download,
  Eye,
  FileCode2,
  Fingerprint,
  Info,
  Sigma,
  X,
} from 'lucide-react';
import CategoryBadge from '../../molecules/resources/CategoryBadge';
import FormatBadge from '../../molecules/resources/FormatBadge';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';
import ScatterPlotSVG from '../../atoms/resources/ScatterPlotSVG';

export default function BancoDatosDatasetModal({ selectedDataset, onClose }) {
  return (
    <AnimatePresence>
      {selectedDataset && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#001d3d]/90 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl relative flex flex-col overflow-hidden border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-500 hover:text-white hover:bg-[#ea580c] rounded-full p-2.5 transition-all shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="bg-[#001d3d] p-6 md:px-10 md:py-8 text-white relative shrink-0 border-b-[6px] border-[#ea580c]">
              <StatisticalOverlay opacity="0.1" color="#ffffff" />
              <ScatterPlotSVG className="absolute right-0 top-0 w-48 h-48 opacity-20 text-[#ea580c]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <CategoryBadge category={selectedDataset.categoria} />
                  <span className="bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    {selectedDataset.ano}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight mb-2 pr-10">
                  {selectedDataset.titulo}
                </h2>
                <p className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest flex items-center gap-2">
                  <Fingerprint size={16} className="text-[#ea580c]" /> Fuente Oficial: {selectedDataset.fuente}
                </p>
              </div>
            </div>

            <div className="p-6 md:px-10 md:py-8 overflow-y-auto bg-white flex-1 grid md:grid-cols-[1.2fr_0.8fr] gap-8 relative">
              <Sigma className="absolute left-10 bottom-10 opacity-[0.03] text-[#001d3d]" size={250} />

              <div className="relative z-10">
                <h3 className="text-lg font-black text-[#001d3d] uppercase tracking-tighter mb-3 flex items-center gap-2">
                  <Info className="text-[#ea580c]" size={20} /> Resumen Tecnico
                </h3>
                <p className="text-sm text-slate-600 font-medium italic leading-relaxed mb-6">
                  {selectedDataset.descripcion}
                </p>

                <h3 className="text-lg font-black text-[#001d3d] uppercase tracking-tighter mb-3 flex items-center gap-2">
                  <FileCode2 className="text-[#ea580c]" size={20} /> Formatos Disponibles
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedDataset.formatos.map((fmt) => (
                    <FormatBadge key={fmt} format={fmt} />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Volumen aprox.</p>
                    <p className="text-xs font-black text-[#001d3d]">{selectedDataset.tamano}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Categorizacion</p>
                    <p className="text-xs font-black text-[#001d3d]">{selectedDataset.decada}</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col bg-slate-50 rounded-[2rem] border border-slate-200 h-[380px] overflow-hidden">
                <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 z-20 shrink-0 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.05)]">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#001d3d] flex items-center gap-2">
                    <Download size={16} className="text-[#ea580c]" /> Archivos Disponibles
                  </h4>
                </div>

                <div className="p-5 overflow-y-auto hide-scrollbar flex-1">
                  <div className="space-y-3">
                    {selectedDataset.archivos?.map((archivo, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between gap-3 hover:border-[#ea580c] hover:shadow-md transition-all group"
                      >
                        <div className="flex-1">
                          <p className="text-xs font-black text-[#001d3d] uppercase leading-snug break-words" title={archivo.nombre}>
                            {archivo.nombre}
                          </p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{archivo.tamano}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                          <FormatBadge format={archivo.formato} />
                          <a
                            href={archivo.url}
                            className={`size-9 text-white rounded-lg flex items-center justify-center transition-colors shadow-md ${
                              selectedDataset.categoria === 'Repositorio'
                                ? 'bg-[#001d3d] hover:bg-[#ea580c]'
                                : 'bg-[#ea580c] hover:bg-[#001d3d]'
                            }`}
                            title={selectedDataset.categoria === 'Repositorio' ? 'Leer Documento' : 'Descargar Microdatos'}
                          >
                            {selectedDataset.categoria === 'Repositorio' ? <Eye size={14} /> : <Download size={14} />}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[9px] font-bold text-slate-400 text-center mt-6 px-2 uppercase tracking-widest leading-relaxed">
                    El uso de esta informacion debe ser propiamente citado y es de exclusiva responsabilidad del investigador.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
