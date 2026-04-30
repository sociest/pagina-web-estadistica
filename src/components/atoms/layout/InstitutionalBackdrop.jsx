import { StatisticalGrid } from '../data/StatisticalCharts'

const InstitutionalBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <StatisticalGrid color="#00447e" opacity={0.03} />

    <svg className="absolute -top-12 right-0 h-[420px] w-[680px] opacity-[0.08]" viewBox="0 0 680 420" fill="none">
      <path d="M0 220 Q170 120 340 220 T680 220" stroke="#00447e" strokeWidth="2.2" />
      <path d="M0 245 Q170 145 340 245 T680 245" stroke="#00447e" strokeWidth="1.8" opacity="0.72" />
      <path d="M0 270 Q170 170 340 270 T680 270" stroke="#c2410c" strokeWidth="1.5" opacity="0.58" />
      <path d="M0 294 Q170 194 340 294 T680 294" stroke="#00447e" strokeWidth="1.1" opacity="0.45" />
    </svg>

    <svg className="absolute bottom-20 left-[-120px] h-[420px] w-[420px] opacity-[0.065]" viewBox="0 0 420 420" fill="none">
      <circle cx="210" cy="210" r="180" stroke="#00447e" strokeWidth="2.1" />
      <circle cx="210" cy="210" r="140" stroke="#00447e" strokeWidth="1.6" opacity="0.74" />
      <circle cx="210" cy="210" r="100" stroke="#c2410c" strokeWidth="1.3" opacity="0.56" />
      <circle cx="210" cy="210" r="66" stroke="#00447e" strokeWidth="1" opacity="0.46" />
    </svg>

    <svg className="absolute right-8 top-[48%] h-[180px] w-[240px] opacity-[0.075]" viewBox="0 0 240 180" fill="none">
      <rect x="20" y="110" width="18" height="50" rx="2" fill="#00447e" />
      <rect x="50" y="90" width="18" height="70" rx="2" fill="#00447e" opacity="0.8" />
      <rect x="80" y="70" width="18" height="90" rx="2" fill="#00447e" opacity="0.7" />
      <rect x="110" y="86" width="18" height="74" rx="2" fill="#c2410c" opacity="0.8" />
      <rect x="140" y="58" width="18" height="102" rx="2" fill="#00447e" opacity="0.7" />
      <line x1="10" y1="160" x2="210" y2="160" stroke="#00447e" strokeWidth="1" opacity="0.72" />
      <line x1="10" y1="130" x2="210" y2="130" stroke="#00447e" strokeWidth="1" opacity="0.48" />
      <line x1="10" y1="100" x2="210" y2="100" stroke="#00447e" strokeWidth="1" opacity="0.34" />
    </svg>

    <div className="absolute right-20 top-24 hidden select-none font-serif text-8xl italic font-black text-[#00447e] opacity-[0.05] md:block">Sigma</div>
    <div className="absolute bottom-24 left-12 hidden select-none font-serif text-7xl italic font-black text-[#c2410c] opacity-[0.04] md:block">mu</div>
    <div className="absolute left-10 top-[36%] hidden select-none font-serif text-6xl italic font-black text-[#00447e] opacity-[0.04] lg:block">chi2</div>
    <div className="absolute right-10 top-[62%] hidden font-mono text-[10px] font-bold tracking-[0.22em] text-[#00447e] opacity-[0.25] lg:block">REF_QUALITY_2026</div>
  </div>
)

export default InstitutionalBackdrop
