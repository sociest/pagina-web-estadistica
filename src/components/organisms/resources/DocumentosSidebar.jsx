import React from 'react';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';

export default function DocumentosSidebar({ kardexInfo }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-8">
        
        {/* Card de Contacto Kardex */}
        <div className="bg-[#001d3d] rounded-[3rem] p-8 text-white relative overflow-hidden border-b-[8px] border-[#ea580c] shadow-xl">
          <StatisticalOverlay opacity="0.05" color="#ffffff" />
          <div className="relative z-10">
            <h4 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
              <HelpCircle className="text-[#ea580c]" /> ¿Dudas sobre Trámites?
            </h4>
            <p className="text-sm text-blue-200/80 font-medium italic leading-relaxed mb-8">
              Si necesita orientación sobre certificados de notas, inscripciones o trámites de titulación, comuníquese con Kardex Académico.
            </p>
            
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Phone className="text-[#ea580c] shrink-0" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase text-blue-300">Central Telefónica</p>
                  <p className="text-sm font-black">{kardexInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Mail className="text-[#ea580c] shrink-0" size={20} />
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase text-blue-300">Correo de Trámites</p>
                  <p className="text-sm font-black truncate">{kardexInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 p-5 rounded-2xl text-center">
              <p className="text-[10px] font-black text-[#ea580c] uppercase tracking-widest mb-1">Horario de Ventanilla</p>
              <p className="text-xs font-bold text-white uppercase">{kardexInfo.hours}</p>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
}
