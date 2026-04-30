import React from 'react';
import { Line, SvgCurve } from '../../atoms/layout/Decorations';
import { StatSymbol } from '../../atoms/data/StatGraphics';
import { useCounter } from '../../../hooks/useCounter';

const StatCard = ({ stat }) => {
  const [count, ref] = useCounter(stat.value, 1800);

  return (
    <div ref={ref} className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
      <SvgCurve variant="card" />
      <div className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 sm:mb-3 relative z-10" style={{ color: stat.color }}>
        {count}<span className="text-3xl sm:text-4xl">{stat.suffix}</span>
      </div>
      <h3 className="text-sm sm:text-base font-black text-[#1e293b] uppercase tracking-tight mb-1.5 sm:mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: stat.title }} />
      <p className="text-[10px] sm:text-base sm:text-base md:text-lg text-umsa-text-suave font-bold uppercase tracking-wider sm:tracking-widest">
        {stat.description}
      </p>
    </div>
  );
};

/**
 * Sección de Métricas KPI (Organismo 5)
 */
export const StatsSection = ({ stats = [] }) => (
  <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f8fafc] relative overflow-hidden">
    <SvgCurve variant="background" />
    <StatSymbol symbol="σ²" className="top-20 right-12 text-6xl md:text-8xl" />

    <div className="max-w-[1200px] mx-auto mb-10 sm:mb-12 md:mb-16 relative z-10">
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <Line variant="horizontal" />
        <span className="text-base sm:text-base md:text-lg font-bold text-umsa-text-suave uppercase tracking-widest">
          Métricas Institucionales
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] leading-none tracking-tight">
          Resultados de Excelencia<br />Académica
        </h2>
        <div className="text-sm sm:text-base md:text-lg text-umsa-text-suave uppercase tracking-wider sm:tracking-widest font-bold">
          Gestión Educativa<br />
          <span className="text-umsa-orange">Carrera de Estadística 2026</span>
        </div>
      </div>
    </div>

    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
      {stats.map((stat, idx) => (
        <StatCard key={idx} stat={stat} />
      ))}
    </div>
  </section>
);
