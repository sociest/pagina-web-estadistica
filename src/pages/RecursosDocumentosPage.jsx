import React from 'react';
import { documentosData } from '../services/recursosDocumentosData';
import DocumentosHeroSection from '../components/organisms/resources/DocumentosHeroSection';
import DocumentosArchiveroGrid from '../components/organisms/resources/DocumentosArchiveroGrid';
import DocumentosSidebar from '../components/organisms/resources/DocumentosSidebar';

export default function RecursosDocumentosPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      
      {/* ── HERO ── */}
      <DocumentosHeroSection hero={documentosData.hero} />

      {/* ── INTERFAZ DE EXPLORACIÓN ── */}
      <main className="max-w-[1400px] mx-auto px-6 py-16 min-h-screen grid lg:grid-cols-[1fr_350px] gap-12 relative z-20">
        
        {/* COLUMNA IZQUIERDA: ARCHIVERO */}
        <DocumentosArchiveroGrid 
          documentos={documentosData.documentos}
          categorias={documentosData.categorias}
          sello={documentosData.sello}
        />

        {/* COLUMNA DERECHA: SIDEBAR DE KARDEX */}
        <DocumentosSidebar kardexInfo={documentosData.kardex} />

      </main>

    </div>
  );
}
