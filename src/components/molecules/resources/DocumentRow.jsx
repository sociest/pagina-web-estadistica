import React from 'react';
import { Calendar, Download, FileDigit, FileText, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DocumentRow({ doc }) {
  const isPdf = doc.formato === 'pdf';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl hover:border-[#ea580c] hover:shadow-lg transition-all group"
    >
      <div className="flex items-center gap-4 flex-1">
        <div
          className={`size-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm border ${
            isPdf ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}
        >
          {isPdf ? <FileText size={24} /> : <FileDigit size={24} />}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm md:text-base font-black text-[#001d3d] uppercase leading-snug group-hover:text-[#ea580c] transition-colors break-words">
            {doc.titulo}
          </h4>
          <div className="flex items-center gap-4 mt-1.5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Calendar size={12} className="text-slate-300" /> Act: {doc.ultimaActualizacion}
            </p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <HardDrive size={12} className="text-slate-300" /> {doc.peso}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <a
          href={doc.urlArchivo}
          className="w-full md:w-auto bg-slate-50 hover:bg-[#ea580c] text-[#001d3d] hover:text-white px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-slate-200 hover:border-transparent transition-all shadow-sm"
        >
          <Download size={16} /> Descargar
        </a>
      </div>
    </motion.div>
  );
}
