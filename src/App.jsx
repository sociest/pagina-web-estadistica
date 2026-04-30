import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/organisms/layout/Header';
import { Footer } from './components/organisms/layout/Footer';
import { resolvePageByPath } from './routes/pageRegistry';

// Importar la data falsa (el CMS del futuro)
import {
  mockNavItems,
  mockFooterLinks,
} from './services/mockData';

function App() {
  const { pathname } = useLocation();
  const ActivePage = resolvePageByPath(pathname);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans pt-[64px] sm:pt-[70px]">
      <Header navItems={mockNavItems} />

      <main>
        <ActivePage />
      </main>

      <Footer quickLinks={mockFooterLinks} />
    </div>
  );
}

export default App;
