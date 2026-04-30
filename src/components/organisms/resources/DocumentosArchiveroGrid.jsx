import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, HelpCircle, ShieldCheck, Info, CheckCircle2, ClipboardList, Scale, BookText, FileSignature } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DocumentRow from '../../molecules/resources/DocumentRow';

const ICON_MAP = {
  ClipboardList,
  Scale,
  BookText,
  FileSignature
};

export default function DocumentosArchiveroGrid({ documentos, categorias, sello }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState(categorias.map(c => c.name));

  const toggleCategory = (name) => {
    setOpenCategories(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const filteredDocs = useMemo(() => {
    return documentos.filter(doc => 
      doc.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, documentos]);

  useEffect(() => {
    if (searchQuery !== '') {
      const activeCats = [...new Set(filteredDocs.map(d => d.categoria))];
      setOpenCategories(activeCats);
    }
  }, [searchQuery, filteredDocs]);

  return (
    <section className="min-w-0">
      
      {/* Barra de Búsqueda Rápida */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-3 mb-12 sticky top-28 z-30">
        <div className="w-full relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ea580c] transition-colors size-6" />
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ESCRIBA EL NOMBRE DEL FORMULARIO O REGLAMENTO..."
            className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] py-5 pl-16 pr-6 text-base font-black uppercase tracking-widest text-[#001d3d] focus:outline-none focus:bg-white focus:border-[#ea580c] transition-all"
          />
        </div>
      </div>

      {/* Listado por Categorías (Accordions) */}
      <div className="space-y-6">
        {categorias.map(cat => {
          const docsInCat = filteredDocs.filter(d => d.categoria === cat.name);
          const isOpen = openCategories.includes(cat.name);
          const IconComponent = ICON_MAP[cat.icon] || ClipboardList;

          if (searchQuery !== '' && docsInCat.length === 0) return null;

          return (
            <div key={cat.id} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => toggleCategory(cat.name)}
                className={`w-full px-8 py-6 flex items-center justify-between group transition-colors ${isOpen ? 'bg-slate-50 border-b border-slate-100' : 'bg-white'}`}
              >
                <div className="flex items-center gap-5 text-left">
                  <div className={`size-14 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100 transition-colors ${isOpen ? 'bg-[#001d3d] text-white' : 'bg-slate-50 ' + cat.color}`}>
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#001d3d] uppercase tracking-tighter">{cat.name}</h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {docsInCat.length} Archivos Disponibles
                    </p>
                  </div>
                </div>
                <div className={`size-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#ea580c] text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-[#001d3d] group-hover:text-white'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 space-y-4 bg-slate-50/30">
                      {docsInCat.length > 0 ? (
                        docsInCat.map(doc => <DocumentRow key={doc.id} doc={doc} />)
                      ) : (
                        <p className="text-center py-10 text-slate-400 italic text-sm font-medium">No hay documentos cargados en esta categoría actualmente.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {filteredDocs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <HelpCircle size={64} className="mx-auto text-slate-200 mb-4" />
            <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter">Documento no encontrado</h3>
            <p className="text-base text-slate-500 font-medium italic">Intente con una palabra clave diferente o explore las categorías manuales.</p>
          </div>
        )}
      </div>

      {/* ── SECCIÓN DE VERSIONES OFICIALES ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mt-12 bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 text-[#ea580c] rotate-12">
          <ShieldCheck size={120} />
        </div>
        <div className="size-20 bg-orange-50 rounded-3xl flex items-center justify-center text-[#ea580c] shrink-0 border border-orange-100 shadow-inner">
          <Info size={40} />
        </div>
        <div className="flex-1 text-center md:text-left relative z-10">
          <h4 className="text-2xl font-black text-[#001d3d] uppercase tracking-tighter mb-3">{sello.title}</h4>
          <p className="text-base text-slate-600 font-medium italic leading-relaxed">
            {sello.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#ea580c]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#001d3d]">{sello.badges[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#001d3d]">{sello.badges[1]}</span>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
