import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms/buttons/Button';
import { SearchInput } from '../../atoms/forms/Input';
import { BrandLogo } from '../../molecules/navigation/Brand';
import { DropdownListItem, NavDropdownItem } from '../../molecules/navigation/Navigation';

const isInternalRoute = (href = '') => href.startsWith('/');

const defaultNavigationItems = [
  {
    label: 'Inicio',
    href: '/',
    accent: '#00447e',
    align: 'left',
  },
  {
    label: 'Institucional',
    href: '/institucional/acerca',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Acerca de la Carrera (Historia, Misión, Visión)', href: '/institucional/acerca' },
      { label: 'Acreditación y Evaluación Continua', href: '/institucional/acreditacion' },
      { label: 'Autoridades (Director y HCC)', href: '/institucional/autoridades' },
      { label: 'Plantel Docente y Administrativo', href: '/institucional/docentes' },
      { label: 'Convenios Interinstitucionales', href: '/institucional/convenios' },
      { label: 'Reglamentos y Resoluciones', href: '/institucional/reglamentos' },
    ],
  },
  {
    label: 'Pregrado',
    href: '/pregrado/perfil-profesional',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Perfil Profesional y Laboral', href: '/pregrado/perfil-profesional' },
      { label: 'Plan de Estudios y Malla Curricular', href: '/pregrado/malla-curricular' },
      { label: 'Admisiones y Modalidades de Ingreso', href: '/pregrado/admisiones' },
      { label: 'Convalidaciones', href: '/pregrado/convalidaciones' },
      { label: 'Modalidades de Graduación', href: '/pregrado/modalidades-graduacion' },
      { label: 'Calendario Académico', href: '/pregrado/calendario-academico' },
    ],
  },
  {
    label: 'Docentes',
    href: '/institucional/docentes',
    accent: '#00447e',
    align: 'left',
  },
  {
    label: 'Postgrado',
    href: '/postgrado/maestria-terminal',
    accent: '#00447e',
    align: 'center',
    children: [
      { label: 'Maestría Terminal', href: '/postgrado/maestria-terminal' },
      { label: 'Maestría Autofinanciada', href: '/postgrado/maestria-autofinanciada' },
      { label: 'Diplomados y Especialidades', href: '/postgrado/diplomados-especialidades' },
      { label: 'Convocatorias y Admisiones', href: '#', badge: 'Nuevo' },
    ],
  },
  {
    label: 'Estudiantes',
    href: '#estudiantes',
    accent: '#ea580c',
    align: 'center',
    children: [
      { label: 'Guia y Seguimiento de Tramites', href: '/estudiantes/guia-seguimiento-tramites' },
      { label: 'Centro de Estudiantes (CEE)', href: '/estudiantes/centro-estudiantes' },
      { label: 'Convocatorias (Auxiliaturas)', href: '/estudiantes/convocatorias-auxiliaturas', badge: 'Nuevo' },
      { label: 'Becas y Beneficios (Comedor, IDH)', href: '#' },
      { label: 'Pasantías y Bolsa de Trabajo', href: '/estudiantes/pasantias-bolsa-trabajo' },
      { label: 'Sociedades Científicas', href: '/estudiantes/sociedad-cientifica' },
    ],
  },
  {
    label: 'Investigación',
    href: '#investigacion',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Acerca del IETA', href: '/investigacion/acerca-ieta' },
      { label: 'Personal', href: '/investigacion/personal' },
      { label: 'Investigación y Proyectos', href: '/investigacion/proyectos' },
      { label: 'Revista Varianza', href: '/investigacion/revista-varianza' },
      { label: 'Autores Varianza', href: '/investigacion/autores-varianza' },
      { label: 'Servicios y Capacitación', href: '/investigacion/servicios' },
      { label: 'Contacto IETA', href: '/investigacion/contacto' },
    ],
  },
  {
    label: 'Recursos',
    href: '#recursos',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Biblioteca Especializada', href: '/recursos/biblioteca' },
      { label: 'Banco de Datos (Censos y Encuestas)', href: '/recursos/banco-datos' },
      { label: 'Revistas y Publicaciones', href: '/investigacion/revista-varianza' },
      { label: 'Repositorio de Tesis y Proyectos (Cyber-Tesis)', href: '#recursos-repositorio-tesis' },
      { label: 'Documentos Digitales', href: '/documentos' },
    ],
  },
  {
    label: 'Contacto',
    href: '/contacto',
    accent: '#ea580c',
    align: 'right',
  },
];

const dropdownAlignmentClasses = {
  left: 'left-0 right-auto',
  center: 'left-1/2 -translate-x-1/2',
  right: 'right-0 left-auto',
};

function HeaderDropdown({ item, open }) {
  if (!item.children?.length || !open) return null;

  const accent = item.accent ?? '#00447e';
  const positionClass = dropdownAlignmentClasses[item.align ?? 'left'] ?? dropdownAlignmentClasses.left;

  return (
    <div
      className={[
        'absolute top-full mt-2 rounded-2xl border-2 bg-[#fafafa] py-3 shadow-2xl',
        'z-50 min-w-[300px] max-w-[380px] animate-in fade-in slide-in-from-top-2 duration-200',
        positionClass,
      ].join(' ')}
      style={{
        borderColor: `${accent}30`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.18), 0 0 0 1px ${accent}25`,
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 300 280" preserveAspectRatio="none" fill="none">
          <path d="M0 215C50 215 100 165 150 75C200 -15 250 35 300 215" stroke={accent} strokeWidth="1.5" />
          <path d="M0 200C50 200 100 150 150 60C200 -30 250 20 300 200" stroke={accent} strokeWidth="1.1" opacity="0.7" />
        </svg>
        <div className="absolute top-2 left-3 font-mono text-[7px] text-[#94a3b8] opacity-40">n = {item.children.length}</div>
        <div className="absolute bottom-2 right-3 font-mono text-[7px] text-[#94a3b8] opacity-40">σ = 0.05</div>
      </div>

      <div className="relative px-3 mb-2">
        <div
          className="h-[4px] rounded-full mb-2"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}40, transparent)`,
          }}
        />
        <div className="flex items-center gap-2 px-1">
          <div className="size-2 rounded-full shadow-md" style={{ background: accent }} />
          <span className="text-xs font-black uppercase tracking-wider" style={{ color: accent }}>
            {item.label}
          </span>
        </div>
      </div>

      <div className="relative space-y-0.5 px-2">
        {item.children.map((child) => (
          <DropdownListItem
            key={`${child.label}-${child.href ?? 'no-href'}`}
            href={child.href ?? '#'}
            label={child.label}
            accent={accent}
            badge={child.badge}
          />
        ))}
      </div>

      <div className="relative mt-2 px-3">
        <div className="h-[2px] rounded-full opacity-20" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      </div>
    </div>
  );
}

/**
 * Mobile accordion row for a top-level menu item.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.item - Top-level navigation entry.
 * @returns {JSX.Element} Interactive accordion item.
 */
function MobileNavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const accent = item.accent ?? '#00447e';
  const openBorderColor = `${accent}50`;
  const isInternalRoute = (href = '') => href.startsWith('/');

  if (!item.children?.length) {
    return isInternalRoute(item.href ?? '') ? (
      <Link
        to={item.href}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-white/90 hover:text-white"
      >
        {item.label}
      </Link>
    ) : (
      <a
        href={item.href ?? '#'}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-white/90 hover:text-white"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: `2px solid ${isOpen ? openBorderColor : 'transparent'}`,
        background: isOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
      }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-white/90 hover:text-white text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="flex items-center gap-2">
          <div
            className="size-2 rounded-full transition-all duration-300"
            style={{
              background: isOpen ? accent : 'rgba(255,255,255,0.4)',
              boxShadow: isOpen ? `0 0 8px ${accent}` : 'none',
            }}
          />
          {item.label}
        </span>
        <ChevronDown
          className="size-4 transition-all duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {isOpen && (
        <div className="pb-2 px-2 animate-in slide-in-from-top-2 duration-200">
          <div
            className="h-[2px] mx-2 mb-2 rounded-full"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          />
          {item.children.map((child) => (
            isInternalRoute(child.href ?? '') ? (
              <Link
                key={child.label}
                to={child.href}
                className="group flex items-center justify-between gap-2 px-3 py-2.5 mx-1 rounded-lg text-base text-white/80 hover:text-white transition-all duration-200"
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = `${accent}40`;
                  event.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = 'transparent';
                  event.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="size-1.5 rounded-full shrink-0 transition-all duration-200 group-hover:scale-150" style={{ background: `${accent}80` }} />
                  <span className="line-clamp-3">{child.label}</span>
                </span>
                {child.badge && (
                  <span className="shrink-0 px-1.5 py-0.5 rounded-full text-xs font-black text-white uppercase tracking-wide shadow-sm" style={{ background: accent === '#00447e' ? '#ea580c' : accent }}>
                    {child.badge}
                  </span>
                )}
                <ChevronRight className="size-3 opacity-0 group-hover:opacity-60 shrink-0 transition-all duration-200" />
              </Link>
            ) : (
              <a
                key={child.label}
                href={child.href ?? '#'}
                className="group flex items-center justify-between gap-2 px-3 py-2.5 mx-1 rounded-lg text-base text-white/80 hover:text-white transition-all duration-200"
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = `${accent}40`;
                  event.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = 'transparent';
                  event.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="size-1.5 rounded-full shrink-0 transition-all duration-200 group-hover:scale-150" style={{ background: `${accent}80` }} />
                  <span className="line-clamp-3">{child.label}</span>
                </span>
                {child.badge && (
                  <span className="shrink-0 px-1.5 py-0.5 rounded-full text-xs font-black text-white uppercase tracking-wide shadow-sm" style={{ background: accent === '#00447e' ? '#ea580c' : accent }}>
                    {child.badge}
                  </span>
                )}
                <ChevronRight className="size-3 opacity-0 group-hover:opacity-60 shrink-0 transition-all duration-200" />
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Main header for the institutional experience.
 *
 * @typedef {Object} HeaderNavigationItem
 * @property {string} label - Text shown in the navigation for the CMS-managed menu item.
 * @property {string} [href] - Anchor or URL destination for the item.
 * @property {string} [to] - Optional router destination when using SPA routes.
 * @property {'left' | 'center' | 'right'} [align] - Dropdown alignment token.
 * @property {string} [accent] - Accent color token used in dropdown visual details.
 * @property {Array<{label: string, href?: string}>} [children] - Child links for dropdown menus.
 *
 * @param {Object} props - Component props.
 * @param {HeaderNavigationItem[]} [props.navigationItems=defaultNavigationItems] - Menu items shown in the header navigation.
 * @param {HeaderNavigationItem[]} [props.navItems] - Alias from CMS/service layer for navigation items.
 * @param {string} [props.className] - Additional layout classes for special page contexts.
 * @returns {JSX.Element} Responsive institutional header ready for CMS-managed nav trees.
 */
function Header({
  navigationItems = defaultNavigationItems,
  navItems,
  className,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimerRef = useRef(null);
  const resolvedNavigationItems = navItems ?? navigationItems;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        background: scrolled
          ? 'rgba(0, 41, 86, 0.98)'
          : '#002956',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : '0 2px 12px rgba(0,0,0,0.15)',
        borderBottom: '2px solid rgba(255,255,255,0.15)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1400 70" preserveAspectRatio="none" fill="none">
          <path d="M0 50C233 50 467 34 700 10C933 -14 1167 8 1400 50" stroke="white" strokeWidth="1.5" />
        </svg>
        <span className="absolute top-[8px] left-[14px] font-mono text-[8px] text-white/30">σ = 1.05</span>
        <span className="absolute top-[8px] right-[14px] font-mono text-[8px] text-white/30">R² = 0.94</span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 h-[64px] sm:h-[70px] flex items-center justify-between gap-2 sm:gap-3">
        <BrandLogo />

        <nav className="hidden xl:flex items-center gap-0.5">
          {resolvedNavigationItems.map((item) => {
            if (item.children?.length) {
              return (
                <NavDropdownItem
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onToggle={handleDropdownToggle}
                >
                  <HeaderDropdown item={item} open={openDropdown === item.label} />
                </NavDropdownItem>
              );
            }

            return (
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-2.5 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : isInternalRoute(item.href ?? '') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-2.5 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href ?? '#'}
                  className="px-2.5 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            );
          })}
        </nav>

        <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
          {resolvedNavigationItems.slice(0, 6).map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children?.length ? (
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(item.label)}
                  className="flex items-center gap-0.5 px-2 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                  style={openDropdown === item.label ? { color: 'white', background: 'rgba(255,255,255,0.15)' } : {}}
                >
                  {item.label}
                  <ChevronDown className="size-3 opacity-60 transition-transform duration-200" style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
              ) : isInternalRoute(item.href ?? '') ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-0.5 px-2 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href ?? '#'}
                  className="flex items-center gap-0.5 px-2 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              )}
              <HeaderDropdown item={item} open={openDropdown === item.label} />
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {searchOpen ? (
            <SearchInput placeholder="Buscar..." autoFocus onBlur={() => setSearchOpen(false)} />
          ) : (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-1.5 sm:p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Abrir búsqueda"
              style={searchOpen ? { position: 'absolute', right: 0 } : {}}
            >
              <Search className="size-4" />
            </button>
          )}
          <Button variant="sia"><span className="hidden md:inline">Acceso </span>SIA</Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-1.5 sm:p-2 rounded-lg text-white/80 hover:bg-white/10 transition-all"
          aria-label="Abrir navegación principal"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#002956]/98 backdrop-blur-sm px-4 py-4 space-y-1.5 max-h-[80vh] overflow-y-auto" style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.25)' }}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Buscar en el sitio..."
              className="w-full px-4 py-2.5 text-base border border-white/25 rounded-xl outline-none focus:ring-2 focus:ring-white/40 bg-white/15 text-white placeholder:text-white/60"
            />
          </div>
          <div className="space-y-2">
            {resolvedNavigationItems.map((item) => (
              <MobileNavItem key={item.label} item={item} />
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-base font-bold text-[#00447e] shadow-md"
              style={{ background: 'linear-gradient(135deg, #ffffff, #e8f4f8)' }}
            >
              Acceso SIA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
export { Header };