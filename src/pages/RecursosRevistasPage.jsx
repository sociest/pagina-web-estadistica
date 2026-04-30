import React, { useMemo, useState } from 'react';
import { revistasData } from '../services/recursosRevistasData';
import RevistasHeroSection from '../components/organisms/resources/RevistasHeroSection';
import RevistasFilterBar from '../components/organisms/resources/RevistasFilterBar';
import RevistasPublicationsGrid from '../components/organisms/resources/RevistasPublicationsGrid';

export default function RecursosRevistasPage() {
  const [activeFilter, setActiveFilter] = useState('Todas');

  const filteredPublications = useMemo(() => {
    if (activeFilter === 'Todas') return revistasData.publicaciones;
    if (activeFilter === 'Internacionales') {
      return revistasData.publicaciones.filter((pub) => pub.alcance === 'Internacional');
    }
    if (activeFilter === 'Nacionales') {
      return revistasData.publicaciones.filter(
        (pub) => pub.alcance === 'Nacional' || pub.alcance === 'Institucional'
      );
    }
    if (activeFilter === 'Boletines') {
      return revistasData.publicaciones.filter((pub) => pub.categoria === 'Boletin Informativo');
    }
    return revistasData.publicaciones;
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      <RevistasHeroSection hero={revistasData.hero} />

      <main className="max-w-[1400px] mx-auto px-6 py-16 min-h-screen">
        <RevistasFilterBar
          filters={revistasData.filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <RevistasPublicationsGrid publications={filteredPublications} activeFilter={activeFilter} />
      </main>
    </div>
  );
}
