import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { StatisticalAnnotations } from '../../atoms/data/Stats';
import { HeroSlideContent } from '../../molecules/home/HeroSlideContent';
import { TopNewsHeader } from '../../molecules/home/TopNewsHeader';
import { TopNewsCard } from '../../molecules/home/TopNewsCard';

const readStat = (statEntry) => {
  if (!statEntry) return '';
  if (typeof statEntry !== 'string') return String(statEntry);
  const parts = statEntry.split('=');
  return parts[1] ? parts[1].trim() : statEntry;
};

const buildTopNews = (news = []) =>
  news.slice(0, 3).map((item) => ({
    id: item.id,
    category: item.category,
    categoryColor: item.accent || '#00447e',
    date: item.date,
    title: item.title,
    imageUrl: item.imageUrl,
    readTime: item.readTime,
    href: item.href || '#',
  }));

export const HeroNewsSection = ({ slides = [], news = [] }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(idx);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, slides.length]);

  if (!slides.length) return null;

  const slide = slides[current];
  const topNews = buildTopNews(news);

  const scrollToNews = () => {
    const newsSection = document.getElementById('news-section-full');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative w-full bg-[#0a1628] overflow-hidden"
      style={{ height: 'clamp(460px, 74vh, 760px)' }}
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={`${s.title}-${s.imageUrl}`}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img
              src={s.imageUrl}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.7] contrast-[1.2]"
              style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, rgba(10,22,40,0.76) 0%, rgba(10,22,40,0.78) 60%, rgba(10,22,40,0.68) 100%)',
              }}
            />

            <div
              className="hidden lg:block absolute inset-y-0 right-0 w-[42%]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,68,126,0) 0%, rgba(0,68,126,0.70) 45%, rgba(0,68,126,0.92) 100%)',
              }}
            />

            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.07]"
                viewBox="0 0 1400 900"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 650C350 650 700 480 1050 220C1200 140 1320 120 1400 650"
                  stroke="white"
                  strokeWidth="2.5"
                />
                <path
                  d="M0 680C350 680 700 510 1050 250C1200 170 1320 150 1400 680"
                  stroke="white"
                  strokeWidth="1.8"
                  opacity="0.6"
                />
                <path
                  d="M0 620C350 620 700 450 1050 190C1200 110 1320 90 1400 620"
                  stroke="#ea580c"
                  strokeWidth="2.2"
                  opacity="0.5"
                />
              </svg>

              <div className="hidden xl:block absolute top-24 left-[15%] text-[10rem] font-black text-white opacity-[0.025] select-none pointer-events-none font-serif italic">
                σ
              </div>
              <div className="hidden xl:block absolute bottom-40 right-[22%] text-[8rem] font-black text-[#ea580c] opacity-[0.03] select-none pointer-events-none font-serif italic">
                R²
              </div>

              <StatisticalAnnotations
                position="bottom"
                annotations={[
                  { label: 'σ', value: readStat(s.stats?.[0]) || '1.05' },
                  { label: 'R²', value: readStat(s.stats?.[1]) || '0.94' },
                  { label: 'n', value: readStat(s.stats?.[2]) || '380+' },
                ]}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10">
        <div className="w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-[1.05fr_430px] xl:grid-cols-[1fr_520px] gap-8 xl:gap-10 items-center">
          <HeroSlideContent key={current} slide={slide} />

          <div className="hidden lg:flex w-full max-w-[520px] justify-self-end flex-col py-6 pl-3 pr-0 xl:pl-5 xl:pr-0">
            <TopNewsHeader mode="hero" />

            <div className="space-y-3">
              {topNews.map((item, idx) => (
                <TopNewsCard key={item.id} item={item} idx={idx} mode="hero" />
              ))}
            </div>

            <button
              onClick={scrollToNews}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-[1.25rem] transition-all group mt-4"
              style={{
                background: 'linear-gradient(135deg, rgba(234,88,12,0.20) 0%, rgba(234,88,12,0.12) 100%)',
                backdropFilter: 'blur(16px)',
                border: '2px solid rgba(234,88,12,0.35)',
                boxShadow: '0 4px 16px rgba(234,88,12,0.15)',
              }}
            >
              <ChevronDown className="size-4 text-orange-300 group-hover:text-orange-200 transition-colors" />
              <span className="text-xs font-black text-orange-200 group-hover:text-white uppercase tracking-wider transition-colors">
                Ver todas las noticias y agenda
              </span>
              <ArrowRight className="size-3.5 text-orange-300 group-hover:text-orange-200 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full"
        style={{
          background: 'rgba(10,22,40,0.65)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {slides.map((item, i) => (
          <button
            key={`${item.title}-${i}`}
            onClick={() => go(i)}
            className="group relative transition-all"
            aria-label={`Ir a slide ${i + 1}`}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '42px' : '12px',
                height: '12px',
                background:
                  i === current
                    ? 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)'
                    : 'rgba(255,255,255,0.35)',
                boxShadow: i === current ? '0 4px 12px rgba(234,88,12,0.5)' : 'none',
              }}
            />
          </button>
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(241,245,249,0.4))' }}
      />

      <style>
        {`@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } @keyframes slideInRight { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }`}
      </style>
    </section>
  );
};

export const HomeTopNewsSection = ({ news = [] }) => {
  const topNews = buildTopNews(news);

  const scrollToNews = () => {
    const newsSection = document.getElementById('news-section-full');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative lg:hidden px-4 sm:px-6 md:px-10 lg:px-20 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 bg-[#f1f5f9] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 520" preserveAspectRatio="none" fill="none">
          <path d="M0 360C350 360 700 200 1050 170C1200 155 1320 140 1400 360" stroke="#00447e" strokeWidth="2" />
          <path d="M0 385C350 385 700 225 1050 195C1200 180 1320 165 1400 385" stroke="#ea580c" strokeWidth="1.8" opacity="0.65" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <TopNewsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {topNews.map((item, idx) => (
            <TopNewsCard key={item.id} item={item} idx={idx} mode="section" />
          ))}
        </div>

        <button
          onClick={scrollToNews}
          className="w-full md:w-auto md:min-w-[380px] mx-auto flex items-center justify-center gap-2 p-4 rounded-[1.5rem] transition-all group mt-5 sm:mt-6"
          style={{
            background: 'linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(234,88,12,0.10) 100%)',
            border: '2px solid rgba(234,88,12,0.35)',
            boxShadow: '0 4px 16px rgba(234,88,12,0.15)',
          }}
        >
          <ChevronDown className="size-4 text-orange-500 group-hover:text-orange-400 transition-colors" />
          <span className="text-base font-black text-orange-600 group-hover:text-[#1e293b] uppercase tracking-wider transition-colors">
            Ver todas las noticias y agenda
          </span>
          <ArrowRight className="size-3.5 text-orange-500 group-hover:text-orange-400 transition-colors" />
        </button>
      </div>
    </section>
  );
};

HeroNewsSection.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      buttonText: PropTypes.string,
      imageUrl: PropTypes.string,
      accent: PropTypes.string,
      tag: PropTypes.string,
      stats: PropTypes.array,
    }),
  ),
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      accent: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      readTime: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

HomeTopNewsSection.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      accent: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      readTime: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
