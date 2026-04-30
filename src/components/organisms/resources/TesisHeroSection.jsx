import React from 'react';
import { ShieldCheck, Sigma } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';

export default function TesisHeroSection({ hero }) {
  return (
    <section className="bg-[#001d3d] pt-40 pb-20 px-6 relative overflow-hidden border-b-[8px] border-[#ea580c]">
      <div className="absolute inset-0 z-0 opacity-10">
        <StatisticalOverlay opacity="0.6" color="#ffffff" />
      </div>
      <Sigma className="absolute -left-10 top-20 text-white/5 opacity-40" size={350} />

      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-2.5 rounded-xl mb-6 backdrop-blur-md shadow-sm">
          <ShieldCheck className="text-[#ea580c]" size={16} />
          <span className="text-xs font-black text-white uppercase tracking-[0.3em]">{hero.eyebrow}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
          {hero.title[0]} <br />{' '}
          <span className="text-[#ea580c] italic font-serif uppercase tracking-normal">{hero.title[1]}</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-200/90 font-medium italic max-w-3xl border-l-4 border-[#ea580c] pl-6 py-2 leading-relaxed mx-auto text-left md:text-center md:border-l-0 md:pl-0">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
