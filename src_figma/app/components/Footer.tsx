import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram, ExternalLink, BarChart3, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Plan de Estudios', href: '#' },
  { label: 'Malla Curricular', href: '#' },
  { label: 'Calendario Académico', href: '#' },
  { label: 'Docentes', href: '#' },
  { label: 'Trámites y Servicios', href: '#' },
];

const postgradoLinks = [
  { label: 'Maestría en Análisis de Datos', href: '#' },
  { label: 'Diplomados', href: '#' },
  { label: 'Cursos de Actualización', href: '#' },
  { label: 'IETA — Investigación', href: '#' },
  { label: 'Repositorio Institucional', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(170deg, #001d3d 0%, #003d6e 50%, #00447e 100%)' }}>
      {/* Statistical decoration */}
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1400 80" preserveAspectRatio="none" fill="none">
            <path d="M0 60C233 60 467 40 700 14C933 -12 1167 10 1400 60" stroke="white" strokeWidth="1.8" />
            <path d="M0 68C233 68 467 48 700 22C933 -4 1167 18 1400 68" stroke="white" strokeWidth="1.3" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Top accent bar */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0.5), #ffffff)' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="size-[48px] rounded-[10px] flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ffffff, #e0f2f7)', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <BarChart3 className="size-[24px] text-[#00447e]" />
              </div>
              <div>
                <p className="font-bold text-[15px] text-white leading-tight">Carrera de Estadística</p>
                <p className="text-[11px] text-white/70 leading-tight">UMSA · Bolivia</p>
              </div>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed mb-5">
              Formando estadísticos y científicos de datos para el desarrollo de Bolivia desde 1974.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-white/90 shrink-0 mt-0.5" />
                <p className="text-[12px] text-white/70 leading-snug">
                  Av. Villazón N° 1995, Monoblock Central,<br />
                  Piso 3 — La Paz, Bolivia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-white/90 shrink-0" />
                <a href="tel:+59122442100" className="text-[12px] text-white/70 hover:text-white transition-colors">
                  (591-2) 2442100
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-white/90 shrink-0" />
                <a href="mailto:estadistica@umsa.bo" className="text-[12px] text-white/70 hover:text-white transition-colors">
                  estadistica@umsa.bo
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="size-[38px] rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white transition-all hover:scale-110"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-[13px] text-white uppercase tracking-widest mb-4">Académico</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Postgrado links */}
          <div>
            <h3 className="font-bold text-[13px] text-white uppercase tracking-widest mb-4">Postgrado e IETA</h3>
            <ul className="space-y-2.5">
              {postgradoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Accesos rápidos */}
            <div className="mt-6 space-y-2">
              <h4 className="font-bold text-[11px] text-white/70 uppercase tracking-widest mb-3">Accesos Directos</h4>
              {[
                { label: 'Moodle — Aula Virtual', href: 'https://virtual.umsa.bo' },
                { label: 'SIA — Sistema Académico', href: 'https://sia.umsa.bo' },
                { label: 'Webmail UMSA', href: 'https://webmail.umsa.bo' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink className="size-3" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-bold text-[13px] text-white uppercase tracking-widest mb-4">Ubicación</h3>
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg mb-3">
              <iframe
                title="Ubicación Carrera de Estadística UMSA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1892!2d-68.1196!3d-16.5046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20d9f45f0001%3A0xabcdef1234!2sAv.+Villaz%C3%B3n+1995%2C+La+Paz!5e0!3m2!1ses!2sbo!4v1000000000000"
                width="100%"
                height="160"
                style={{ border: 0, filter: 'grayscale(30%) brightness(0.9) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-xl p-4 border border-white/15" style={{ background: 'rgba(255,255,255,0.10)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-semibold text-white">Horario de atención</span>
              </div>
              <p className="text-[12px] text-white/70">Lunes a Viernes: 08:00 — 17:00</p>
              <p className="text-[12px] text-white/70">Sábados: 08:00 — 12:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Statistical notation strip */}
          <div className="flex items-center gap-4 font-mono text-[10px] text-white/30">
            <span>σ = 1.05</span>
            <span>R² = 0.94</span>
            <span>n = 380+</span>
            <span>β₁ = 0.87</span>
            <span>p &lt; 0.001</span>
          </div>
          <p className="text-[12px] text-white/60 text-center sm:text-right">
            © {new Date().getFullYear()} Carrera de Estadística — Universidad Mayor de San Andrés. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}