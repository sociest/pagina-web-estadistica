import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';

/**
 * Accesos Flotantes (Organismo 4)
 */
export const QuickAccess = ({ links = [] }) => (
  <section className="relative z-20 -mt-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1360px] mx-auto">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a key={link.title} href={link.href} className="relative rounded-2xl p-5 flex items-start gap-4 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(167.48deg, rgba(255,255,255,0.98) 8.128%, rgba(255,255,255,0.98) 91.872%)', border: '1px solid rgba(100,116,139,0.20)', boxShadow: '0 10px 36px rgba(0,0,0,0.11), 0 3px 10px rgba(0,0,0,0.07)', backdropFilter: 'blur(16px)' }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 300 90" preserveAspectRatio="none" fill="none">
                <path d="M0 70C75 70 150 50 225 20C262 5 282 0 300 70" stroke="#14b8a6" strokeWidth="1.6" />
                <path d="M0 78C75 78 150 58 225 28C262 13 282 8 300 78" stroke="#14b8a6" strokeWidth="1.2" opacity="0.7" />
              </svg>
              {link.stat && (
                <div className="absolute top-2 right-3 text-right font-mono text-[7px] text-[#64748b] opacity-40">n = {link.stat}</div>
              )}
            </div>

            <div className="relative shrink-0 size-[52px] rounded-[14px] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${link.color}, ${link.color}bb)`, boxShadow: '0px 4px 8px rgba(0,0,0,0.12), 0px 2px 4px rgba(0,0,0,0.08)' }}>
                <Icon className="size-6 text-white" />
              </div>

            <div className="relative flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-bold text-base text-[#1e293b]">{link.title}</span>
                <ExternalLink className="size-3.5 opacity-45 shrink-0 transition-all group-hover:opacity-70" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: link.color }}>Acceso rápido</p>
              <p className="text-base text-[#475569] leading-snug">{link.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  </section>
);

QuickAccess.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.elementType,
      color: PropTypes.string,
      stat: PropTypes.string,
    }),
  ),
};
