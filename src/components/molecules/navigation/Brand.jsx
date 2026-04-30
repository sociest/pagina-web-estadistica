import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Logo y Texto de la Institución (Molécula 1)
 */
export const BrandLogo = () => (
  <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
    <img
      src="/iconos/icono_estaditica.png"
      alt="Logo Carrera de Estadística"
      className="h-[34px] w-[34px] sm:h-[42px] sm:w-[42px] object-contain shrink-0"
    />
    <div className="hidden sm:block">
      <p className="font-bold text-[14px] sm:text-[16px] leading-tight text-white tracking-wide">
        CARRERA DE ESTADÍSTICA
      </p>
      <p className="text-[10px] sm:text-[11px] text-white/80 leading-tight font-medium">
        Facultad de Ciencias Puras y Naturales
      </p>
    </div>
  </Link>
);
