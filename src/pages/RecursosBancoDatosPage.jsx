import React, { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { bancoDatosData } from '../services/recursosBancoDatosData';
import BancoDatosHeroSection from '../components/organisms/resources/BancoDatosHeroSection';
import BancoDatosFiltersSidebar from '../components/organisms/resources/BancoDatosFiltersSidebar';
import BancoDatosSearchBar from '../components/organisms/resources/BancoDatosSearchBar';
import BancoDatosDatasetGrid from '../components/organisms/resources/BancoDatosDatasetGrid';
import BancoDatosDatasetModal from '../components/organisms/resources/BancoDatosDatasetModal';

export default function RecursosBancoDatosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTipos, setSelectedTipos] = useState([]);
  const [selectedFormatos, setSelectedFormatos] = useState([]);
  const [selectedDecadas, setSelectedDecadas] = useState([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState(null);

  const filteredDatasets = useMemo(() => {
    return bancoDatosData.datasets.filter((item) => {
      const matchSearch =
        searchQuery === '' ||
        item.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fuente.toLowerCase().includes(searchQuery.toLowerCase());

      const matchTipo = selectedTipos.length === 0 || selectedTipos.includes(item.categoria);
      const matchDecada = selectedDecadas.length === 0 || selectedDecadas.includes(item.decada);
      const matchFormato =
        selectedFormatos.length === 0 || item.formatos.some((fmt) => selectedFormatos.includes(fmt));

      return matchSearch && matchTipo && matchDecada && matchFormato;
    });
  }, [searchQuery, selectedTipos, selectedFormatos, selectedDecadas]);

  const clearFilters = () => {
    setSelectedTipos([]);
    setSelectedFormatos([]);
    setSelectedDecadas([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      <BancoDatosHeroSection hero={bancoDatosData.hero} />

      <main className="max-w-[1500px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-start gap-8 min-h-screen">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="lg:hidden w-full bg-white border border-slate-200 p-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-sm text-[#001d3d]"
        >
          <SlidersHorizontal size={20} /> Mostrar Filtros de Busqueda
        </button>

        <BancoDatosFiltersSidebar
          filtros={bancoDatosData.filtros}
          selectedTipos={selectedTipos}
          selectedFormatos={selectedFormatos}
          selectedDecadas={selectedDecadas}
          setSelectedTipos={setSelectedTipos}
          setSelectedFormatos={setSelectedFormatos}
          setSelectedDecadas={setSelectedDecadas}
          isMobileFiltersOpen={isMobileFiltersOpen}
          setIsMobileFiltersOpen={setIsMobileFiltersOpen}
          resultsCount={filteredDatasets.length}
        />

        <section className="flex-1 min-w-0">
          <BancoDatosSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <BancoDatosDatasetGrid
            datasets={filteredDatasets}
            onSelectDataset={setSelectedDataset}
            searchQuery={searchQuery}
            clearFilters={clearFilters}
          />
        </section>
      </main>

      <BancoDatosDatasetModal selectedDataset={selectedDataset} onClose={() => setSelectedDataset(null)} />
    </div>
  );
}
