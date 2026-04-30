const StatisticalOverlay = ({ sigma = '1.05', r2 = '0.94', n = '380' }) => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.05] z-0 font-mono text-sm sm:text-base md:text-lg uppercase tracking-widest text-[#475569]" aria-hidden="true">
    <div className="absolute top-2 left-4">REF_DOC: UMSA_EST_2026</div>
    <div className="absolute top-2 right-4">sigma = {sigma}</div>
    <div className="absolute bottom-2 left-4">n = {n}</div>
    <div className="absolute bottom-2 right-4">R2 = {r2}</div>
  </div>
)

export default StatisticalOverlay
