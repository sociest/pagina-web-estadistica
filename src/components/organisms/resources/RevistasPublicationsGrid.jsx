import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, FileBadge, Search, ShieldAlert } from 'lucide-react';
import PublicationBadge from '../../molecules/resources/PublicationBadge';

export default function RevistasPublicationsGrid({ publications, activeFilter }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {publications.map((pub) => (
            <motion.div
              layout
              key={pub.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#ea580c] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="h-64 relative bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={pub.imagenPortada}
                  alt={pub.titulo}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <PublicationBadge text={pub.categoria} type="Revista Cientifica" />
                  <PublicationBadge text={pub.alcance} type={pub.alcance} />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative bg-white">
                <div className="mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-[#ea580c] mb-1.5 flex items-center gap-1.5">
                    <ShieldAlert size={14} /> Editado por:
                  </p>
                  <p className="text-sm font-bold text-slate-600 truncate" title={pub.editor}>
                    {pub.editor}
                  </p>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#ea580c] transition-colors">
                  {pub.titulo}
                </h3>

                <p className="text-sm text-slate-500 font-medium italic leading-relaxed line-clamp-3 mb-8">
                  {pub.descripcion}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  {pub.esExterno ? (
                    <a
                      href={pub.urlDestino}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-50 hover:bg-[#ea580c] border border-slate-200 hover:border-transparent text-[#001d3d] hover:text-white py-4 px-6 rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-between transition-all group/btn shadow-sm"
                    >
                      Visitar Portal Oficial
                      <ExternalLink size={18} className="text-slate-400 group-hover/btn:text-white group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  ) : (
                    <a
                      href={pub.urlDestino}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#001d3d] hover:bg-[#002855] text-white py-4 px-6 rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-between transition-all shadow-md group/btn"
                    >
                      Leer Documento Interno
                      <FileBadge size={18} className="group-hover/btn:scale-110 transition-transform text-[#ea580c]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {publications.length === 0 && (
        <div className="text-center py-20">
          <div className="size-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={40} className="text-slate-400" />
          </div>
          <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter mb-2">No se encontraron publicaciones</h3>
          <p className="text-base text-slate-500 font-medium italic">Intenta seleccionando otra categoria en los filtros.</p>
        </div>
      )}
    </>
  );
}
