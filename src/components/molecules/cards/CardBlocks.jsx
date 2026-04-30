import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header pequeño para secciones (Molécula 6)
 */
export const CardSectionHeader = ({ title }) => (
  <div className="relative px-3 mb-2">
    <div className="h-[4px] rounded-full mb-2 bg-gradient-to-r from-umsa-blue via-umsa-blue/40 to-transparent" />
    <div className="flex items-center gap-2 px-1">
      <div className="size-2 rounded-full shadow-md bg-umsa-blue" />
      <span className="text-xs font-black uppercase tracking-wider text-umsa-blue">
        {title}
      </span>
    </div>
  </div>
);

/**
 * Indicador de Fecha para Agenda (Molécula 7)
 */
export const DateIndicator = ({
  day,
  month,
  color = '#00447e',
  className = '',
  dayClassName = 'text-2xl',
  monthClassName = 'text-[10px]',
  style,
}) => (
  <div
    className={`flex flex-col items-center justify-center shrink-0 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-lg ${className}`}
    style={{ background: color, color: 'white', ...style }}
  >
    <span className={`${dayClassName} font-black leading-none`}>{day}</span>
    <span className={`${monthClassName} font-bold uppercase tracking-wide leading-tight`}>{month}</span>
  </div>
);

/**
 * Tarjeta destacada de noticia (Molécula 11)
 */
export const FeaturedNewsCard = ({ item }) => {
  if (!item) return null;

  return (
    <a href={item.href ?? '#'} className="block relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all mb-4 group bg-[#fafafa]">
      <div className="relative h-[200px] overflow-hidden">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'grayscale(0.7) contrast(1.2)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-black text-white uppercase tracking-wider shadow-lg" style={{ background: item.accent ?? '#00447e' }}>
          {item.category}
        </span>
      </div>
      <div className="relative p-6 bg-[#fafafa]">
        <div className="flex items-center gap-2 text-sm text-[#64748b] font-bold mb-3 mt-1">
          <span>{item.date}</span>
          <span>·</span>
          <span>{item.readTime ?? '4 min'} lectura</span>
        </div>
        <h3 className="font-semibold text-xl text-[#1e293b] leading-tight mb-3 tracking-tight">{item.title}</h3>
        <p className="text-base text-[#475569] leading-relaxed font-medium">{item.excerpt}</p>
      </div>
    </a>
  );
};

/**
 * Tarjeta compacta de noticia (Molécula 12)
 */
export const CompactNewsCard = ({ item }) => {
  if (!item) return null;

  return (
    <a href={item.href ?? '#'} className="rounded-xl overflow-hidden transition-all group hover:-translate-y-1 hover:shadow-2xl bg-[#fafafa] border border-[#e2e8f0]">
      <div className="relative h-[110px] overflow-hidden">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'grayscale(0.7) contrast(1.2)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-black text-white uppercase tracking-wide shadow-md" style={{ background: item.accent ?? '#00447e' }}>
          {item.category}
        </span>
      </div>
      <div className="relative p-5 bg-[#fafafa]">
        <p className="text-xs text-[#64748b] font-bold mb-2 mt-0.5">{item.date}</p>
        <p className="text-base font-semibold text-[#1e293b] leading-snug line-clamp-3">{item.title}</p>
      </div>
    </a>
  );
};

/**
 * Tarjeta de evento para agenda (Molécula 13)
 */
export const AgendaEventCard = ({ event, variant }) => {
  if (!event || !variant) return null;

  return (
    <div className="relative rounded-[12px] overflow-hidden cursor-pointer transition-all hover:-translate-x-1 hover:shadow-md" style={{ backgroundImage: variant.bgGradient, border: `1px solid ${variant.border}`, boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)' }}>
      <div className="relative min-h-[116px] w-full flex items-center">
        <DateIndicator
          day={event.day}
          month={event.month}
          className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[76px] z-10"
          dayClassName="text-[26px]"
          monthClassName="text-[12px]"
          style={{ background: `linear-gradient(180deg, ${variant.badgeFrom} 0%, ${variant.badgeTo} 100%)`, boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1)' }}
        />

        <div className="absolute left-[112px] top-4 right-5 bottom-4 z-10 flex flex-col justify-center">
          <p className="font-semibold text-lg text-[#1e293b] leading-snug mb-1 line-clamp-2">{event.title}</p>
          <p className="text-sm font-semibold text-[#475569] mb-1">{event.time}</p>
          <p className="text-sm font-medium line-clamp-2 leading-snug" style={{ color: event.color ?? variant.accent }}>📍 {event.location}</p>
        </div>
      </div>
    </div>
  );
};

CardSectionHeader.propTypes = {
  title: PropTypes.string,
};

DateIndicator.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  dayClassName: PropTypes.string,
  monthClassName: PropTypes.string,
  style: PropTypes.object,
};

FeaturedNewsCard.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    accent: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    readTime: PropTypes.string,
    excerpt: PropTypes.string,
  }),
};

CompactNewsCard.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    accent: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
  }),
};

AgendaEventCard.propTypes = {
  event: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
    color: PropTypes.string,
  }),
  variant: PropTypes.shape({
    bgGradient: PropTypes.string,
    border: PropTypes.string,
    badgeFrom: PropTypes.string,
    badgeTo: PropTypes.string,
    accent: PropTypes.string,
  }),
};
