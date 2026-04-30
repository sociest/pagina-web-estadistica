import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Search, Menu, X, ChevronDown, BarChart3, ChevronRight } from 'lucide-react';

// ── Nav structure ─────────────────────────────────────────────────────────────

interface NavChild {
  label: string;
  href?: string;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  accent?: string;
  align?: 'left' | 'center' | 'right'; // dropdown alignment
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: 'Inicio',
    href: '/',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Noticias Destacadas y Avisos', href: '#hero' },
      { label: 'Accesos Rápidos (Moodle, Webmail, SIA)', href: '#accesos' },
    ],
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
      { label: 'Rendición de Cuentas / Transparencia', href: '/institucional/transparencia' },
    ],
  },
  {
    label: 'Pregrado',
    href: '#pregrado',
    accent: '#00447e',
    align: 'left',
    children: [
      { label: 'Perfil Profesional y Laboral', href: '#' },
      { label: 'Plan de Estudios y Malla Curricular', href: '#' },
      { label: 'Horarios de Clases por Semestre', href: '#' },
      { label: 'Admisiones y Modalidades de Ingreso', href: '#' },
      { label: 'Convalidaciones', href: '#' },
      { label: 'Modalidades de Graduación', href: '#' },
      { label: 'Calendario Académico', href: '#' },
    ],
  },
  {
    label: 'Postgrado',
    href: '#postgrado',
    accent: '#00447e',
    align: 'center',
    children: [
      { label: 'Maestría Terminal', href: '#' },
      { label: 'Maestría Autofinanciada', href: '#' },
      { label: 'Diplomados y Especialidades', href: '#' },
      { label: 'Convocatorias y Admisiones', href: '#', badge: 'Nuevo' },
    ],
  },
  {
    label: 'Estudiantes',
    href: '#estudiantes',
    accent: '#ea580c',
    align: 'center',
    children: [
      { label: 'Guía y Seguimiento de Trámites', href: '#' },
      { label: 'Convocatorias (Auxiliaturas)', href: '#', badge: 'Nuevo' },
      { label: 'Becas y Beneficios (Comedor, IDH)', href: '#' },
      { label: 'Pasantías y Bolsa de Trabajo', href: '#' },
      { label: 'Sociedades Científicas', href: '#' },
      { label: 'Centro de Estudiantes (CEE)', href: '#' },
    ],
  },
  {
    label: 'Investigación',
    href: '#investigacion',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Acerca del IETA', href: '#' },
      { label: 'Líneas de Investigación y Proyectos', href: '#' },
      { label: 'Plantel de Investigadores', href: '#' },
    ],
  },
  {
    label: 'Recursos',
    href: '#recursos',
    accent: '#00447e',
    align: 'right',
    children: [
      { label: 'Biblioteca Especializada y BD Libre', href: '#' },
      { label: 'Revista Varianza y Publicaciones', href: '#' },
      { label: 'Repositorio de Tesis y Proyectos', href: '#' },
      { label: 'Laboratorios y Software (R, Python, SPSS)', href: '#' },
      { label: 'Sistema Académico', href: '#', badge: 'Próx.' },
      { label: 'Documentos Digitales', href: '#', badge: 'Próx.' },
    ],
  },
  {
    label: 'Contacto',
    href: '#contacto',
    accent: '#ea580c',
    align: 'right',
    children: [
      { label: 'Directorio Telefónico Completo', href: '#' },
      { label: 'Formulario de Atención y Correos', href: '#' },
      { label: 'Ubicación e Infraestructura (Mapas)', href: '#' },
    ],
  },
];

// ── Dropdown ──────────────────────────────────────────────────────────────────

function Dropdown({ item, open }: { item: NavItem; open: boolean }) {
  if (!item.children || !open) return null;
  const accent = item.accent ?? '#00447e';

  // Positional classes based on align prop
  const posClass =
    item.align === 'right'
      ? 'right-0 left-auto'
      : item.align === 'left'
      ? 'left-0 right-auto'
      : 'left-1/2 -translate-x-1/2';

  return (
    <div
      className={`absolute top-full ${posClass} mt-2 bg-[#fafafa] rounded-2xl shadow-2xl border-2 py-3 z-50 min-w-[300px] max-w-[380px] animate-in fade-in slide-in-from-top-2 duration-200`}
      style={{ 
        borderColor: `${accent}30`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px ${accent}20` 
      }}
    >
      {/* Statistical bg decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 300 280" preserveAspectRatio="none" fill="none">
          <path d="M0 215C50 215 100 165 150 75C200 -15 250 35 300 215" stroke={accent} strokeWidth="1.5" />
          <path d="M0 200C50 200 100 150 150 60C200 -30 250 20 300 200" stroke={accent} strokeWidth="1.1" opacity="0.7" />
        </svg>
        {/* Statistical annotations */}
        <div className="absolute top-2 left-3 font-mono text-[7px] text-[#94a3b8] opacity-40">
          n = {item.children.length}
        </div>
        <div className="absolute bottom-2 right-3 font-mono text-[7px] text-[#94a3b8] opacity-40">
          σ = 0.05
        </div>
      </div>

      {/* Header with accent gradient bar */}
      <div className="relative px-3 mb-2">
        <div 
          className="h-[4px] rounded-full mb-2" 
          style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40, transparent)` }} 
        />
        <div className="flex items-center gap-2 px-1">
          <div 
            className="size-2 rounded-full shadow-md" 
            style={{ background: accent }}
          />
          <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: accent }}>
            {item.label}
          </span>
        </div>
      </div>

      {/* Menu items */}
      <div className="relative space-y-0.5 px-2">
        {item.children.map((child, idx) => (
          <a
            key={child.label}
            href={child.href ?? '#'}
            className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#374151] hover:text-white transition-all duration-200 relative overflow-hidden"
            style={{
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = accent;
              (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
              (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${accent}40`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <span className="flex items-center gap-2.5 flex-1 min-w-0">
              <div 
                className="size-[6px] rounded-full shrink-0 transition-all duration-200 group-hover:scale-125" 
                style={{ background: `${accent}60` }}
              />
              <span className="truncate leading-snug">{child.label}</span>
            </span>
            {child.badge && (
              <span
                className="shrink-0 px-2 py-0.5 rounded-full text-[9px] font-black text-white uppercase tracking-wide shadow-sm"
                style={{ background: accent === '#00447e' ? '#ea580c' : accent }}
              >
                {child.badge}
              </span>
            )}
            <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 shrink-0 transition-all duration-200" />
          </a>
        ))}
      </div>

      {/* Footer decoration */}
      <div className="relative mt-2 px-3">
        <div 
          className="h-[2px] rounded-full opacity-20" 
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} 
        />
      </div>
    </div>
  );
}

// ── Mobile accordion ──────────────────────────────────────────────────────────

function MobileAccordion({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const accent = item.accent ?? '#00447e';

  return (
    <div 
      className="rounded-xl overflow-hidden transition-all duration-300" 
      style={{ 
        border: `2px solid ${open ? accent + '50' : 'transparent'}`,
        background: open ? 'rgba(255,255,255,0.08)' : 'transparent'
      }}
    >
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold text-white/90 hover:text-white transition-all text-left group"
        onClick={() => setOpen(!open)}
        style={{
          background: open ? 'rgba(255,255,255,0.05)' : 'transparent'
        }}
      >
        <span className="flex items-center gap-2">
          <div 
            className="size-2 rounded-full transition-all duration-300" 
            style={{ 
              background: open ? accent : 'rgba(255,255,255,0.4)',
              boxShadow: open ? `0 0 8px ${accent}` : 'none'
            }}
          />
          {item.label}
        </span>
        <ChevronDown
          className="size-4 transition-all duration-300"
          style={{ 
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)', 
            color: open ? accent : 'rgba(255,255,255,0.7)',
            filter: open ? `drop-shadow(0 0 4px ${accent})` : 'none'
          }}
        />
      </button>

      {open && item.children && (
        <div className="pb-2 px-2 animate-in slide-in-from-top-2 duration-200">
          {/* Separator */}
          <div 
            className="h-[2px] mx-2 mb-2 rounded-full" 
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          />
          
          {item.children.map((child, idx) => (
            <a
              key={child.label}
              href={child.href ?? '#'}
              className="group flex items-center justify-between gap-2 px-3 py-2.5 mx-1 rounded-lg text-[13px] text-white/80 hover:text-white transition-all duration-200"
              style={{
                transition: 'all 0.2s ease-out'
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = `${accent}40`;
                (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
              }}
            >
              <span className="flex items-center gap-2 flex-1 min-w-0">
                <div 
                  className="size-1.5 rounded-full shrink-0 transition-all duration-200 group-hover:scale-150" 
                  style={{ background: `${accent}80` }}
                />
                <span className="truncate">{child.label}</span>
              </span>
              {child.badge && (
                <span 
                  className="shrink-0 px-1.5 py-0.5 rounded-full text-[9px] font-black text-white uppercase tracking-wide shadow-sm"
                  style={{ background: accent === '#00447e' ? '#ea580c' : accent }}
                >
                  {child.badge}
                </span>
              )}
              <ChevronRight className="size-3 opacity-0 group-hover:opacity-60 shrink-0 transition-all duration-200" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(0, 68, 126, 0.98)'
          : 'linear-gradient(90deg, #00447e 0%, #004b8b 50%, #005a9e 100%)',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : '0 2px 12px rgba(0,0,0,0.15)',
        borderBottom: '2px solid rgba(255,255,255,0.15)',
      }}
    >
      {/* Stat decorators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1400 70" preserveAspectRatio="none" fill="none">
          <path d="M0 50C233 50 467 34 700 10C933 -14 1167 8 1400 50" stroke="white" strokeWidth="1.5" />
        </svg>
        <span className="absolute top-[8px] left-[14px] font-mono text-[8px] text-white/30">σ = 1.05</span>
        <span className="absolute top-[8px] right-[14px] font-mono text-[8px] text-white/30">R² = 0.94</span>
      </div>

      {/* ── Main bar ── */}
      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 h-[64px] sm:h-[70px] flex items-center justify-between gap-2 sm:gap-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            className="size-[40px] sm:size-[48px] rounded-[10px] flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #e0f2f7 100%)', border: '2px solid rgba(255,255,255,0.3)' }}
          >
            <BarChart3 className="size-[20px] sm:size-[24px] text-[#00447e]" />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-[14px] sm:text-[16px] leading-tight text-white tracking-wide">CARRERA DE ESTADÍSTICA</p>
            <p className="text-[10px] sm:text-[11px] text-white/80 leading-tight font-medium">Facultad de Ciencias Puras y Naturales</p>
          </div>
        </Link>

        {/* Desktop nav — all 8 items */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-0.5 px-2.5 py-2 rounded-lg text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                style={openDropdown === item.label ? { color: 'white', background: 'rgba(255,255,255,0.15)' } : {}}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className="size-3 opacity-70 transition-transform duration-200"
                    style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                )}
              </a>
              <Dropdown item={item} open={openDropdown === item.label} />
            </div>
          ))}
        </nav>

        {/* Reduced nav for lg (not xl) screens — icons + labels */}
        <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
          {navItems.slice(0, 6).map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-0.5 px-2 py-2 rounded-lg text-[11px] font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
                style={openDropdown === item.label ? { color: 'white', background: 'rgba(255,255,255,0.15)' } : {}}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className="size-3 opacity-60 transition-transform duration-200"
                    style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                )}
              </a>
              <Dropdown item={item} open={openDropdown === item.label} />
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">

          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Buscar..."
                className="w-[140px] sm:w-[180px] pl-3 pr-8 py-1.5 text-[12px] sm:text-[13px] border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-white/40 bg-white/20 text-white placeholder:text-white/60 transition-all"
                onBlur={() => setSearchOpen(false)}
              />
            )}
            <button
              className="p-1.5 sm:p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setSearchOpen(!searchOpen)}
              style={searchOpen ? { position: 'absolute', right: 0 } : {}}
            >
              <Search className="size-4" />
            </button>
          </div>

          {/* SIA CTA */}
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[11px] md:text-[12px] font-bold text-[#00447e] transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap shadow-md"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #e8f4f8 100%)' }}
          >
            <span className="hidden md:inline">Acceso </span>SIA
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-white/80 hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/15 bg-[#003d6e]/98 backdrop-blur-sm px-4 py-4 space-y-1.5 max-h-[80vh] overflow-y-auto"
          style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.25)' }}
        >
          {/* Search bar mobile */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Buscar en el sitio..."
              className="w-full px-4 py-2.5 text-[13px] border border-white/25 rounded-xl outline-none focus:ring-2 focus:ring-white/40 bg-white/15 text-white placeholder:text-white/60"
            />
          </div>

          {navItems.map((item) =>
            item.children ? (
              <MobileAccordion key={item.label} item={item} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-[14px] font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            )
          )}

          {/* Mobile SIA button */}
          <div className="pt-2">
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-bold text-[#00447e] shadow-md"
              style={{ background: 'linear-gradient(135deg, #ffffff, #e8f4f8)' }}
            >
              Acceso SIA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}