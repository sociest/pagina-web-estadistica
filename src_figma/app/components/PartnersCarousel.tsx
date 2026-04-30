import { useEffect, useRef } from 'react';

const partners = [
  { name: 'INE Bolivia', abbr: 'INE' },
  { name: 'Banco Central de Bolivia', abbr: 'BCB' },
  { name: 'Ministerio de Economía', abbr: 'MEF' },
  { name: 'UDAPE', abbr: 'UDAPE' },
  { name: 'Banco Mundial', abbr: 'BM' },
  { name: 'OPS / OMS', abbr: 'OPS' },
  { name: 'CEPAL', abbr: 'CEPAL' },
  { name: 'Banco BNB', abbr: 'BNB' },
  { name: 'UNFPA Bolivia', abbr: 'UNFPA' },
  { name: 'Ministerio de Salud', abbr: 'MSD' },
  { name: 'Banco Unión', abbr: 'BU' },
  { name: 'PNUD Bolivia', abbr: 'PNUD' },
];

function PartnerLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex-shrink-0 mx-6 flex items-center justify-center h-[60px] px-6 rounded-xl bg-[#fafafa] border border-[#e2e8f0] grayscale hover:grayscale-0 hover:border-[rgba(0,165,168,0.3)] transition-all duration-300 shadow-sm">
      <span className="font-bold text-[15px] tracking-wide text-[#64748b] hover:text-[#00a5a8] transition-colors whitespace-nowrap">{abbr}</span>
    </div>
  );
}

export function PartnersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>();
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame
    let paused = false;

    const loop = () => {
      if (!paused && track) {
        posRef.current -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(loop);
    };

    track.parentElement?.addEventListener('mouseenter', () => { paused = true; });
    track.parentElement?.addEventListener('mouseleave', () => { paused = false; });
    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Duplicate for infinite effect
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, white 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-20 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[3px] w-6 bg-[#00a5a8] rounded-full" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#00a5a8]">Alianzas</span>
        </div>
        <h2 className="text-[24px] font-bold text-[#1e293b]">Nuestros Egresados Trabajan En</h2>
        <p className="text-[14px] text-[#64748b] mt-1">Convenios con instituciones públicas y organismos internacionales.</p>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center will-change-transform">
            {doubled.map((p, i) => (
              <PartnerLogo key={i} name={p.name} abbr={p.abbr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}