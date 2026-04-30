interface StatAnnotation {
  label: string;
  value: string;
}

interface StatisticalAnnotationsProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  annotations?: StatAnnotation[];
  className?: string;
}

export function StatisticalAnnotations({ 
  position = 'right', 
  annotations = [
    { label: 'σ', value: '1.05442' },
    { label: 'R²', value: '0.94218' },
    { label: 'n', value: '380+' },
    { label: 'p', value: '< 0.0001' }
  ],
  className = ''
}: StatisticalAnnotationsProps) {
  
  const positionClasses = {
    left: 'left-4 top-1/4',
    right: 'right-4 top-1/4',
    top: 'top-4 right-8',
    bottom: 'bottom-4 right-8'
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} opacity-40 pointer-events-none select-none space-y-2 ${className}`}
      aria-hidden="true"
    >
      {annotations.map((item, idx) => (
        <div 
          key={idx} 
          className="text-[10px] font-mono text-[#475569] tracking-wider flex items-center gap-2 border-l-2 border-[#cbd5e1] pl-2"
        >
          <span className="font-black text-[11px]">{item.label}:</span>
          <span className="font-bold">{item.value}</span>
        </div>
      ))}
      
      {/* Sello de autenticidad visual */}
      <div className="mt-4 pt-2 border-t border-[#cbd5e1] text-[8px] text-[#94a3b8] font-bold uppercase tracking-widest">
        UMSA · 2026
      </div>
    </div>
  );
}

// Variante para micro-datos de contexto
export function MicroDataContext({ 
  data = [
    { key: 'Gestión', val: '2026' },
    { key: 'Acreditación', val: 'CEUB-A+' },
    { key: 'Nivel', val: 'Internacional' }
  ],
  className = ''
}: { data?: Array<{ key: string; val: string }>, className?: string }) {
  return (
    <div className={`text-[9px] font-mono text-[#64748b] space-y-1 ${className}`}>
      {data.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between gap-3 border-b border-[#e2e8f0] pb-1">
          <span className="font-bold uppercase tracking-widest opacity-60">{item.key}</span>
          <span className="font-black text-[#1e293b]">{item.val}</span>
        </div>
      ))}
    </div>
  );
}

// Marcas de agua institucionales
export function InstitutionalWatermark({ 
  text = 'CARRERA DE ESTADÍSTICA · UMSA',
  opacity = 0.03,
  className = ''
}: { text?: string; opacity?: number; className?: string }) {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="text-6xl md:text-8xl lg:text-9xl font-black text-[#1e293b] uppercase tracking-tighter rotate-[-15deg] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}
