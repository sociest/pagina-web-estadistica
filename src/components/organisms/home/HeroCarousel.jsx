import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchiveImage } from '../../atoms/data/StatGraphics';
import { StatisticalAnnotations } from '../../atoms/data/Stats';
import { Button } from '../../atoms/buttons/Button';
import { IconTag } from '../../molecules/data/ListsAndTags';

/**
 * Hero Carousel (Organismo 3)
 */
export const HeroCarousel = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const readStat = (statEntry) => {
    if (!statEntry) return '';
    if (typeof statEntry === 'string') {
      const parts = statEntry.split('=');
      return parts[1] ? parts[1].trim() : statEntry;
    }
    if (typeof statEntry === 'object' && statEntry.text) {
      const parts = statEntry.text.split('=');
      return parts[1] ? parts[1].trim() : statEntry.text;
    }
    return '';
  };

  const go = (idx) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(idx);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, slides.length]);

  const next = () => go((current + 1) % slides.length);
  const prev = () => go((current - 1 + slides.length) % slides.length);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden bg-[#f1f5f9]" style={{ height: 'clamp(420px, 55vw, 640px)' }}>
      {slides.map((s, i) => (
        <div key={`${s.title}-${s.imageUrl}`} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <ArchiveImage src={s.imageUrl} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale-[0.7] contrast-[1.2]" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.20) 100%)' }} />

          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 1400 640" preserveAspectRatio="none" fill="none">
              <path d="M0 520C350 520 700 400 1050 180C1200 100 1320 80 1400 520" stroke="white" strokeWidth="2.2" />
              <path d="M0 540C350 540 700 420 1050 200C1200 120 1320 100 1400 540" stroke="white" strokeWidth="1.6" opacity="0.7" />
              <path d="M0 500C350 500 700 380 1050 160C1200 80 1320 60 1400 500" stroke="white" strokeWidth="1.4" opacity="0.5" />
            </svg>

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

      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-umsa-container mx-auto">
        <div className="max-w-[640px] text-white">
          <div
            className="mb-3 sm:mb-4"
          >
            <IconTag text={slide.tag} variant={slide.accent === '#ea580c' ? 'orange' : 'blue'} />
          </div>
          <h1 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[52px] leading-[1.1] font-bold mb-3 sm:mb-4" style={{ textShadow: '0 3px 24px rgba(0,0,0,0.5), 0 1px 8px rgba(0,0,0,0.3)' }}>
            {slide.title}
          </h1>
          <p className="text-base sm:text-[16px] md:text-[18px] leading-relaxed text-gray-100 mb-5 sm:mb-8 max-w-[520px]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {slide.description}
          </p>
          <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
            <Button variant={slide.accent === '#ea580c' ? 'orange' : 'primary'}>{slide.buttonText}</Button>
            <Button variant="outline">Más información</Button>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 size-[40px] sm:size-[48px] rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.25)' }}>
        <ChevronLeft className="size-5 sm:size-6 text-white" />
      </button>
      <button onClick={next} className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 size-[40px] sm:size-[48px] rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.25)' }}>
        <ChevronRight className="size-5 sm:size-6 text-white" />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((dotSlide, i) => (
          <button key={`dot-${dotSlide.title}-${dotSlide.imageUrl}`} onClick={() => go(i)} className="rounded-full transition-all duration-300" style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? 'white' : 'rgba(255,255,255,0.50)' }} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(248,250,252,0.45))' }} />
    </div>
  );
};

HeroCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      buttonText: PropTypes.string,
      imageUrl: PropTypes.string,
      accent: PropTypes.string,
      tag: PropTypes.string,
      stats: PropTypes.array,
    }),
  ),
};
