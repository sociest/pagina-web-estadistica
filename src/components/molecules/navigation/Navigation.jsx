import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const isInternalRoute = (href = '') => href.startsWith('/');

/**
 * Item principal del Navbar (Molécula 3)
 */
export const NavDropdownItem = ({ item, isOpen, onMouseEnter, onMouseLeave, onToggle, children }) => (
  <div className="relative" onMouseEnter={() => onMouseEnter(item.label)} onMouseLeave={onMouseLeave}>
    <button
      type="button"
      onClick={() => onToggle(item.label)}
      className="flex items-center gap-0.5 px-2.5 py-2 rounded-lg text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
      style={isOpen ? { color: 'white', background: 'rgba(255,255,255,0.15)' } : {}}
    >
      {item.label}
      <ChevronDown className="size-3 opacity-70 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
    </button>
    {children} {/* Aquí irá el Dropdown Organism */}
  </div>
);

/**
 * Item de lista dentro de Dropdowns (Molécula 4)
 */
export const DropdownListItem = ({ href, label, accent = '#00447e', badge }) => (
  isInternalRoute(href ?? '') ? (
    <Link to={href} className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-umsa-text-medio hover:text-white transition-all duration-200 relative overflow-hidden"
      onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${accent}40`; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <span className="flex items-center gap-2.5 flex-1 min-w-0">
        <div className="size-[6px] rounded-full shrink-0 transition-all duration-200 group-hover:scale-125" style={{ background: `${accent}60` }} />
        <span className="truncate leading-snug">{label}</span>
      </span>
      {badge && (
        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-black text-white uppercase tracking-wide shadow-sm" style={{ background: accent === '#00447e' ? '#ea580c' : accent }}>
          {badge}
        </span>
      )}
      <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 shrink-0 transition-all duration-200" />
    </Link>
  ) : (
    <a href={href} className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-umsa-text-medio hover:text-white transition-all duration-200 relative overflow-hidden"
      onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${accent}40`; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <span className="flex items-center gap-2.5 flex-1 min-w-0">
        <div className="size-[6px] rounded-full shrink-0 transition-all duration-200 group-hover:scale-125" style={{ background: `${accent}60` }} />
        <span className="truncate leading-snug">{label}</span>
      </span>
      {badge && (
        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-black text-white uppercase tracking-wide shadow-sm" style={{ background: accent === '#00447e' ? '#ea580c' : accent }}>
          {badge}
        </span>
      )}
      <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 shrink-0 transition-all duration-200" />
    </a>
  )
);
