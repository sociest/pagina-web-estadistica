import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ExternalLink } from 'lucide-react';

/**
 * Tag con icono y texto (Molécula 5)
 */
export const IconTag = ({ icon, text, variant = 'blue' }) => {
  const bg = variant === 'blue' ? '#00447edd' : '#ea580cdd';
  const border = variant === 'blue' ? '#00447e' : '#ea580c';
  return (
    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[12px] font-bold backdrop-blur-sm text-white"
         style={{ background: bg, border: `1px solid ${border}`, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
      {icon} {text}
    </div>
  );
};

/**
 * Item de lista de características (Molécula 8)
 */
export const FeatureListItem = ({ text }) => (
  <li className="flex items-start gap-2.5">
    <div className="size-5 sm:size-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-umsa-blue/20">
      <div className="size-2 sm:size-2.5 rounded-full bg-umsa-blue" />
    </div>
    <span className="text-[13px] sm:text-[14px] text-umsa-text-medio leading-snug">
      {text}
    </span>
  </li>
);

/**
 * Anotación marginal específica con valor (Molécula 9)
 */
export const StatBadge = ({ value, position = "bottom-2 right-3" }) => (
  <div className={`absolute font-mono text-[7px] text-umsa-annotations opacity-40 ${position}`}>
    {value}
  </div>
);

/**
 * Lista de enlaces para columnas del footer (Molécula 14)
 */
export const FooterLinkList = ({ title, links = [] }) => (
  <div>
    <h3 className="font-bold text-xs text-white uppercase tracking-widest mb-4">{title}</h3>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors group">
            <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Lista de accesos externos del footer (Molécula 15)
 */
export const ExternalAccessLinks = ({ title = 'Accesos Directos', links = [] }) => (
  <div className="mt-6 space-y-2">
    <h4 className="font-bold text-xs text-white/70 uppercase tracking-widest mb-3">{title}</h4>
    {links.map((link) => (
      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-white/70 hover:text-white transition-colors">
        <ExternalLink className="size-3" />
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

IconTag.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['blue', 'orange']),
};

FeatureListItem.propTypes = {
  text: PropTypes.string,
};

StatBadge.propTypes = {
  value: PropTypes.string,
  position: PropTypes.string,
};

FooterLinkList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

ExternalAccessLinks.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
