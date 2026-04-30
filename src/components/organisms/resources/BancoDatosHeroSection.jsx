import React from 'react';
import { Database, Library, Sigma } from 'lucide-react';
import StatisticalOverlay from '../../atoms/resources/StatisticalOverlay';

const iconMap = {
  database: Database,
  library: Library,
};

export default function BancoDatosHeroSection({ hero }) {
  return (
    <section className="bg-[#001d3d] pt-40 pb-28 px-6 relative overflow-hidden border-b-[8px] border-[#ea580c]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#001d3d]" />
        <StatisticalOverlay opacity="0.1" color="#ffffff" />
      </div>

      <Sigma className="absolute -left-10 top-20 text-white/5 opacity-50" size={350} />

      <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-2.5 rounded-xl mb-6 backdrop-blur-md shadow-sm">
            <span className="flex size-2.5 rounded-full bg-[#ea580c] animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.8)]" />
            <span className="text-xs font-black text-white uppercase tracking-[0.3em]">{hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            {hero.title[0]} <br />{' '}
            <span className="text-[#ea580c] italic font-serif uppercase tracking-normal">{hero.title[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200/90 font-medium italic max-w-2xl border-l-4 border-[#ea580c] pl-6 py-2 leading-relaxed">
            {hero.description}
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-5">
          {hero.stats.map((stat) => {
            const StatIcon = iconMap[stat.icon] ?? Database;
            return (
              <div key={stat.label} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm flex items-center gap-6">
                <div className="size-16 bg-[#ea580c] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <StatIcon size={32} />
                </div>
                <div>
                  <p className="text-4xl font-black text-white leading-none">{stat.value}</p>
                  <p className="text-xs font-black uppercase text-blue-300 tracking-widest mt-2">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
