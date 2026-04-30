import { ArrowRight, Calendar } from 'lucide-react';
import svgPathsNews from '../../imports/svg-ppvgwl1cki';
import { imgGroup as imgGroupNews } from '../../imports/svg-6jtlu';
import svgPathsAgenda from '../../imports/svg-4b821n0hmj';
import { imgGroup as imgGroupAgenda } from '../../imports/svg-b6dt0';

// ── Data ──────────────────────────────────────────────────────────────────────

const newsItems = [
  {
    id: 1,
    category: 'Investigación',
    accent: '#ea580c',
    date: '15 Mar 2025',
    title: 'Investigadores de la Carrera publican en revista ISI sobre modelos de pobreza multidimensional en Bolivia',
    excerpt: 'El equipo del IETA presentó resultados de tres años de investigación aplicada con datos del INE, siendo la primera publicación boliviana en el índice.',
    imageUrl: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?w=600',
    readTime: '4 min',
    sigma: '1.87', r2: '0.95', n: '312',
  },
  {
    id: 2,
    category: 'Académico',
    accent: '#00447e',
    date: '10 Mar 2025',
    title: 'Apertura de inscripciones para la Maestría en Análisis de Datos 2025',
    excerpt: 'El Postgrado de la Carrera anuncia el inicio de inscripciones para la nueva cohorte.',
    imageUrl: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?w=600',
    readTime: '3 min',
    sigma: '2.41', r2: '0.91', n: '148',
  },
  {
    id: 3,
    category: 'Eventos',
    accent: '#64748b',
    date: '05 Mar 2025',
    title: 'Feria de Ciencia de Datos: estudiantes presentan proyectos de análisis social',
    excerpt: 'La segunda edición reunió a más de 150 estudiantes con proyectos innovadores.',
    imageUrl: 'https://images.unsplash.com/photo-1761223976721-8fb221946658?w=600',
    readTime: '5 min',
    sigma: '0.78', r2: '0.88', n: '267',
  },
];

// 4-color palette cycling — exact from Figma Container.tsx
const AGENDA_VARIANTS = [
  {
    accent: '#00447e',
    bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
    border: 'rgba(203,213,225,0.50)',
    badgeFrom: '#00447e',
    badgeTo: '#003a6b',
    sigma: '0.34', r2: '0.96', n: '245',
  },
  {
    accent: '#00447e',
    bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
    border: 'rgba(203,213,225,0.50)',
    badgeFrom: '#00447e',
    badgeTo: '#003a6b',
    sigma: '1.12', r2: '0.93', n: '178',
  },
  {
    accent: '#ea580c',
    bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
    border: 'rgba(203,213,225,0.50)',
    badgeFrom: '#ea580c',
    badgeTo: '#c2410c',
    sigma: '0.67', r2: '0.98', n: '312',
  },
  {
    accent: '#64748b',
    bgGradient: 'linear-gradient(175.377deg, rgba(255,255,255,1) 1.742%, rgba(248,250,252,0.98) 98.258%)',
    border: 'rgba(203,213,225,0.50)',
    badgeFrom: '#64748b',
    badgeTo: '#475569',
    sigma: '2.05', r2: '0.89', n: '419',
  },
];

const events = [
  { day: '20', month: 'MAR', title: 'Inicio Censo Universitario 2025',       time: '08:00 — 17:00', location: 'Campus UMSA' },
  { day: '25', month: 'MAR', title: 'Ceremonia de Graduación 2024',           time: '09:00  12:00', location: 'Auditorio Central UMSA' },
  { day: '30', month: 'MAR', title: 'Cierre de Inscripciones — Postgrado',    time: '08:00 — 16:00', location: 'Secretaría, Piso 3' },
  { day: '04', month: 'ABR', title: 'Taller: Python para Estadísticos',       time: '14:00 — 18:00', location: 'Sala de Cómputo 201' },
  { day: '10', month: 'ABR', title: 'Defensa de Tesis de Maestría',           time: '09:00 — 13:00', location: 'Sala de Postgrado' },
  { day: '18', month: 'ABR', title: 'Seminario: Big Data en el INE Bolivia',  time: '10:00 — 12:00', location: 'Auditorio Facultad' },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

/** Statistical wave overlay for news cards */
function NewsStatBg({ accent, sigma, r2, n }: { accent: string; sigma: string; r2: string; n: string }) {
  return (
    <>
      {/* σ top-left */}
      <span
        className="absolute top-[9px] left-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        σ = {sigma}
      </span>
      {/* R² top-right */}
      <span
        className="absolute top-[9px] right-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        R² = {r2}
      </span>
      {/* n bottom-right */}
      <span
        className="absolute bottom-[9px] right-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        n = {n}
      </span>
      {/* Wave curves */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
        style={{
          maskImage: `url('${imgGroupNews}')`,
          maskSize: '100% 123px',
          maskRepeat: 'no-repeat',
          maskPosition: '0px -4.1px',
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" fill="none" viewBox="0 0 388 95" preserveAspectRatio="none">
          <path d={svgPathsNews.p21878f80} stroke="#14b8a6" strokeWidth="1.5" />
          <path d={svgPathsNews.p2f2f87e0} stroke="#14b8a6" strokeWidth="1.15" opacity="0.7" />
          <path d={svgPathsNews.p331c8e80} stroke="#14b8a6" strokeWidth="1.15" opacity="0.5" />
        </svg>
      </div>
    </>
  );
}

/** Statistical wave overlay for agenda cards — color matches variant */
function AgendaStatBg({ accent, sigma, r2, n }: { accent: string; sigma: string; r2: string; n: string }) {
  return (
    <>
      {/* σ top-left */}
      <span
        className="absolute top-[9px] left-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        σ = {sigma}
      </span>
      {/* R² top-right */}
      <span
        className="absolute top-[9px] right-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        R² = {r2}
      </span>
      {/* n bottom-right */}
      <span
        className="absolute bottom-[9px] right-[13px] font-mono text-[9px] text-[#94a3b8] opacity-50 whitespace-nowrap pointer-events-none select-none z-10"
      >
        n = {n}
      </span>
      {/* Bar chart decoration (top-right, behind text) */}
      <div
        className="absolute top-[32px] right-[14px] flex items-end gap-[2px] h-[40px] opacity-[0.08] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        {[24, 36, 28, 40, 32].map((h, i) => (
          <div key={i} className="w-[4px]" style={{ height: h, background: '#dc2626' }} />
        ))}
      </div>
      {/* Wave curves */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
        style={{
          maskImage: `url('${imgGroupAgenda}')`,
          maskSize: '100% 104px',
          maskRepeat: 'no-repeat',
          maskPosition: '0px -3.467px',
        }}
      >
        <div className="absolute inset-[-1.18%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1214.41 81.6177">
            <g opacity="0.04">
              <path d={svgPathsAgenda.p21396a80} stroke="#14b8a6" strokeWidth="2.51253" />
              <path d={svgPathsAgenda.p3e74a100} opacity="0.7" stroke="#14b8a6" strokeWidth="1.88439" />
              <path d={svgPathsAgenda.p2afdf900} opacity="0.5" stroke="#14b8a6" strokeWidth="1.88439" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function SplitPanel() {
  return (
    <section
      className="py-20 px-6 sm:px-12 lg:px-20 bg-[#001d3d] relative overflow-hidden" /* Fondo oscuro tipo imagen 3 */
    >
      {/* Curvas estadísticas de fondo - MÁS VISIBLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none">
          <path d="M0 400C350 400 700 200 1050 150C1200 120 1320 100 1400 400" stroke="#00447e" strokeWidth="2" />
          <path d="M0 420C350 420 700 220 1050 170C1200 140 1320 120 1400 420" stroke="#00447e" strokeWidth="2" opacity="0.6" />
          <circle cx="1100" cy="200" r="100" stroke="#ea580c" strokeWidth="2" opacity="0.5" fill="none" />
        </svg>
      </div>

      {/* Fórmulas decorativas flotantes - MÁS VISIBLES */}
      <div className="absolute top-20 right-16 text-8xl font-black text-white opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
        χ²
      </div>
      <div className="absolute bottom-20 left-20 text-7xl font-black text-white opacity-[0.04] select-none pointer-events-none" aria-hidden="true">
        p
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── NEWS COLUMN ── */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-[3px] w-6 bg-white/40 rounded-full" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Noticias</span>
                </div>
                <h2 className="text-[24px] font-bold text-white">Actualidad <span className="text-[#ea580c]">Institucional</span></h2>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-white/70 hover:text-white transition">
                Ver noticias <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Featured large card */}
            {(() => {
              const item = newsItems[0];
              return (
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all mb-4 group bg-[#fafafa]"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    {/* Tratamiento Official-Archive */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[11px] font-black text-white uppercase tracking-wider shadow-lg"
                      style={{ background: item.accent }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="relative p-6 bg-[#fafafa]">
                    <NewsStatBg accent={item.accent} sigma={item.sigma} r2={item.r2} n={item.n} />
                    <div className="flex items-center gap-2 text-[11px] text-[#64748b] font-bold mb-3 mt-1">
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.readTime} lectura</span>
                    </div>
                    <h3 className="font-black text-[17px] text-[#1e293b] leading-tight mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed font-medium">{item.excerpt}</p>
                  </div>
                </div>
              );
            })()}

            {/* Smaller cards grid — each with its own accent color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {newsItems.slice(1).map((item) => {
                return (
                  <a
                    key={item.id}
                    href="#"
                    className="rounded-xl overflow-hidden transition-all group hover:-translate-y-1 hover:shadow-2xl bg-[#fafafa] border border-[#e2e8f0]"
                  >
                    <div className="relative h-[110px] overflow-hidden">
                      {/* Tratamiento Official-Archive */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span
                        className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-wide shadow-md"
                        style={{ background: item.accent }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div className="relative p-3.5 bg-[#fafafa]">
                      <NewsStatBg accent={item.accent} sigma={item.sigma} r2={item.r2} n={item.n} />
                      <p className="text-[10px] text-[#64748b] font-bold mb-1.5 mt-0.5">{item.date}</p>
                      <p className="text-[13px] font-black text-[#1e293b] leading-snug line-clamp-3">{item.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── AGENDA COLUMN ── */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-[3px] w-6 bg-[#ea580c] rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Agenda</span>
              </div>
              <h2 className="text-[24px] font-bold text-white">Agenda <span className="text-[#ea580c]">UMSA</span></h2>
            </div>

            <div className="space-y-4">
              {events.map((ev, i) => {
                const v = AGENDA_VARIANTS[i % AGENDA_VARIANTS.length];
                return (
                  <div
                    key={i}
                    className="relative rounded-[12px] overflow-hidden cursor-pointer transition-all hover:-translate-x-1 hover:shadow-md"
                    style={{
                      backgroundImage: v.bgGradient,
                      border: `1px solid ${v.border}`,
                      boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* inner container matches Figma p-px wrapper */}
                    <div className="relative h-[104px] w-full">
                      {/* Statistical decorations */}
                      <AgendaStatBg
                        accent={v.accent}
                        sigma={v.sigma}
                        r2={v.r2}
                        n={v.n}
                      />

                      {/* Date badge — exact Figma: 72×72, rounded-[12px], absolute left-[16px] top-[16px] */}
                      <div
                        className="absolute left-[16px] top-[16px] size-[72px] rounded-[12px] flex flex-col items-center justify-center z-10"
                        style={{
                          background: `linear-gradient(180deg, ${v.badgeFrom} 0%, ${v.badgeTo} 100%)`,
                          boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.1)',
                        }}
                      >
                        <span className="font-bold text-[24px] text-white leading-none">{ev.day}</span>
                        <span className="font-medium text-[14px] text-white uppercase tracking-wide">{ev.month}</span>
                      </div>

                      {/* Info block — absolute left-[104px] top-[18px] */}
                      <div className="absolute left-[104px] top-[18px] right-[44px] z-10">
                        <p className="font-semibold text-[16px] text-[#1e293b] leading-snug mb-[4px] truncate">{ev.title}</p>
                        <p className="text-[14px] text-[#475569] mb-[2px]">{ev.time}</p>
                        <p className="text-[14px] truncate" style={{ color: v.accent }}>📍 {ev.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2 mt-5 py-3 rounded-xl text-[13px] font-semibold border transition-all hover:shadow-md"
              style={{ color: '#1a6b1a', borderColor: 'rgba(26,107,26,0.3)', background: 'rgba(26,107,26,0.05)' }}
            >
              <Calendar className="size-4" />
              Ver calendario completo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}