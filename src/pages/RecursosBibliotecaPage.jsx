import React, { useState, useMemo, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { AUTORES, LIBROS, ALPHABET } from '../services/recursosBibliotecaData';

import LibraryHeroSection from '../components/organisms/resources/LibraryHeroSection';
import LibraryToggleSearch from '../components/molecules/resources/LibraryToggleSearch';
import BooksCatalogGrid from '../components/organisms/resources/BooksCatalogGrid';
import AuthorsDirectoryGrid from '../components/organisms/resources/AuthorsDirectoryGrid';
import BookDetailModal from '../components/organisms/resources/BookDetailModal';
import AuthorDetailModal from '../components/organisms/resources/AuthorDetailModal';

export default function RecursosBibliotecaPage() {
  const [activeTab, setActiveTab] = useState('libros');
  const [searchQuery, setSearchQuery] = useState('');

  const [currentPageBooks, setCurrentPageBooks] = useState(1);
  const [currentPageAuthors, setCurrentPageAuthors] = useState(1);
  const itemsPerPage = 12;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const [selectedBookDetail, setSelectedBookDetail] = useState(null);
  const [selectedAuthorDetail, setSelectedAuthorDetail] = useState(null);
  const exploreRef = useRef(null);

  const scrollToExplore = (tab) => {
    setActiveTab(tab);
    if (exploreRef.current) {
      const yOffset = -100;
      const y = exploreRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSimpleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setSelectedCategory(null);
      setCurrentPageBooks(1);
      setCurrentPageAuthors(1);
    }
  };

  const filteredBooks = useMemo(() => {
    let result = LIBROS;
    if (searchQuery) {
      result = result.filter(l =>
        l.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.categoria.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      result = result.filter(l => l.categoria === selectedCategory);
    }
    return result;
  }, [searchQuery, selectedCategory]);

  const paginatedBooks = filteredBooks.slice((currentPageBooks - 1) * itemsPerPage, currentPageBooks * itemsPerPage);
  const totalBooksPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const filteredAuthors = useMemo(() => {
    let result = AUTORES;
    if (selectedLetter) {
      result = result.filter(a => a.letra_inicial === selectedLetter);
    }
    if (searchQuery) {
      result = result.filter(a => a.nombre_completo.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return result.sort((a, b) => a.nombre_completo.localeCompare(b.nombre_completo));
  }, [searchQuery, selectedLetter]);

  const paginatedAuthors = filteredAuthors.slice((currentPageAuthors - 1) * itemsPerPage, currentPageAuthors * itemsPerPage);
  const totalAuthorsPages = Math.ceil(filteredAuthors.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white relative">

      <LibraryHeroSection scrollToExplore={scrollToExplore} />

      <main ref={exploreRef} className="max-w-[1400px] mx-auto px-6 py-16 min-h-screen">

        <LibraryToggleSearch
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSimpleSearch={handleSimpleSearch}
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
          setCurrentPageAuthors={setCurrentPageAuthors}
          autores={AUTORES}
          alphabet={ALPHABET}
        />

        <AnimatePresence mode="wait">
          {activeTab === 'libros' ? (
            <BooksCatalogGrid 
              key="books-grid-main"
              paginatedBooks={paginatedBooks}
              filteredBooks={filteredBooks}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              autores={AUTORES}
              setSelectedBookDetail={setSelectedBookDetail}
              currentPageBooks={currentPageBooks}
              setCurrentPageBooks={setCurrentPageBooks}
              totalBooksPages={totalBooksPages}
            />
          ) : (
            <AuthorsDirectoryGrid
              key="authors-grid-main"
              paginatedAuthors={paginatedAuthors}
              filteredAuthors={filteredAuthors}
              libros={LIBROS}
              setSelectedAuthorDetail={setSelectedAuthorDetail}
              currentPageAuthors={currentPageAuthors}
              setCurrentPageAuthors={setCurrentPageAuthors}
              totalAuthorsPages={totalAuthorsPages}
            />
          )}
        </AnimatePresence>
      </main>

      {/* ================================================================= */}
      {/* MODALES UX */}
      {/* ================================================================= */}
      <AnimatePresence>
        {selectedBookDetail && (
          <BookDetailModal 
            key="book-modal-view"
            selectedBookDetail={selectedBookDetail} 
            setSelectedBookDetail={setSelectedBookDetail} 
          />
        )}
        {selectedAuthorDetail && (
          <AuthorDetailModal 
            key="author-modal-view"
            selectedAuthorDetail={selectedAuthorDetail} 
            setSelectedAuthorDetail={setSelectedAuthorDetail}
            libros={LIBROS}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
