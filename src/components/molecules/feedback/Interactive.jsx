import React from 'react';
import PropTypes from 'prop-types';

/**
 * Botón con icono animado (Molécula 2)
 */
export const IconButton = ({ icon, label, onClick }) => {
  const Icon = icon;

  return (
    <button onClick={onClick} className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl-umsa font-semibold text-[13px] sm:text-[15px] text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2 group bg-gradient-cta">
      <Icon className="size-4 group-hover:translate-x-1 transition-transform" />
      {label}
    </button>
  );
};

/**
 * Enlace a Redes Sociales (Molécula 10)
 */
export const SocialLink = ({ href, icon, label, className = '', iconClassName = 'size-5' }) => {
  const Icon = icon;

  return (
    <a href={href} className={`p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all hover:scale-110 ${className}`} aria-label={label}>
      <Icon className={iconClassName} />
    </a>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

SocialLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};
