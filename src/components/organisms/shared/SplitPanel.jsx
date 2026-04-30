import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { AgendaEventCard, CompactNewsCard, FeaturedNewsCard } from '../../molecules/cards/CardBlocks';

/**
 * Panel Dividido: Noticias (Izquierda) y Agenda (Derecha) (Organismo 6)
 */
export const SplitPanel = ({ news = [], events = [] }) => {
  const featuredNews = news[0] ?? null;
  const secondaryNews = news.slice(1, 7);

  const agendaVariants = [
    {
      accent: '#00447e',
      bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
      border: 'rgba(203,213,225,0.50)',
      badgeFrom: '#00447e',
      badgeTo: '#003a6b',
    },
    {
      accent: '#00447e',
      bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
      border: 'rgba(203,213,225,0.50)',
      badgeFrom: '#00447e',
      badgeTo: '#003a6b',
    },
    {
      accent: '#ea580c',
      bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
      border: 'rgba(203,213,225,0.50)',
      badgeFrom: '#ea580c',
      badgeTo: '#c2410c',
    },
    {
      accent: '#64748b',
      bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
      border: 'rgba(203,213,225,0.50)',
      badgeFrom: '#64748b',
      badgeTo: '#475569',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#001d3d] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
          <path d="M0 400C350 400 700 200 1050 150C1200 120 1320 100 1400 400" stroke="#00447e" strokeWidth="2" />
          <path d="M0 420C350 420 700 220 1050 170C1200 140 1320 120 1400 420" stroke="#00447e" strokeWidth="2" opacity="0.6" />
          <circle cx="1100" cy="200" r="100" stroke="#ea580c" strokeWidth="2" opacity="0.5" fill="none" />
        </svg>
      </div>

      <div className="absolute top-20 right-16 text-8xl font-black text-white opacity-[0.04] select-none pointer-events-none" aria-hidden="true">χ²</div>
      <div className="absolute bottom-20 left-20 text-7xl font-black text-white opacity-[0.04] select-none pointer-events-none" aria-hidden="true">p</div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-[3px] w-6 bg-white/40 rounded-full" />
                  <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-white/60">Noticias</span>
                </div>
                <h2 className="text-[24px] font-bold text-white">Actualidad <span className="text-[#ea580c]">Institucional</span></h2>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-base font-semibold text-white/70 hover:text-white transition">
                Ver noticias <ArrowRight className="size-4" />
              </a>
            </div>

            {featuredNews && (
              <FeaturedNewsCard item={featuredNews} />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {secondaryNews.map((item) => (
                <CompactNewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-[3px] w-6 bg-[#ea580c] rounded-full" />
                <span className="text-base sm:text-base md:text-lg font-bold uppercase tracking-widest text-white/60">Agenda</span>
              </div>
              <h2 className="text-[24px] font-bold text-white">Agenda <span className="text-[#ea580c]">UMSA</span></h2>
            </div>

            <div className="space-y-4">
              {events.map((event, idx) => {
                const variant = agendaVariants[idx % agendaVariants.length];
                return (
                  <AgendaEventCard key={`${event.title}-${idx}`} event={event} variant={variant} />
                );
              })}
            </div>

            <a href="#" className="flex items-center justify-center gap-2 mt-5 py-3 rounded-xl text-base font-semibold border transition-all hover:shadow-md" style={{ color: '#1a6b1a', borderColor: 'rgba(26,107,26,0.3)', background: 'rgba(26,107,26,0.05)' }}>
              <Calendar className="size-4" />
              Ver calendario completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
