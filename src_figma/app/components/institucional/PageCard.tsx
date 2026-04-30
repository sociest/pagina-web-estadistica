import { ReactNode } from 'react';

interface PageCardProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  icon?: ReactNode;
  title?: string;
  decorator?: string;
}

export function PageCard({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  title,
  decorator = 'σ'
}: PageCardProps) {
  const variantStyles = {
    primary: {
      color: '#00447e',
      bg: 'rgba(0,68,126,0.08)',
      border: 'rgba(203,213,225,0.50)',
      gradient: 'linear-gradient(167.48deg, rgba(241,245,249,1) 8.128%, rgba(255,255,255,0.98) 91.872%)',
    },
    secondary: {
      color: '#ea580c',
      bg: 'rgba(234,88,12,0.08)',
      border: 'rgba(203,213,225,0.50)',
      gradient: 'linear-gradient(167.48deg, rgba(241,245,249,1) 8.128%, rgba(255,255,255,0.98) 91.872%)',
    },
    accent: {
      color: '#00447e',
      bg: 'rgba(0,68,126,0.08)',
      border: 'rgba(203,213,225,0.50)',
      gradient: 'linear-gradient(167.48deg, rgba(241,245,249,1) 8.128%, rgba(255,255,255,0.98) 91.872%)',
    }
  };

  const style = variantStyles[variant];

  return (
    <div 
      className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
      style={{
        background: style.gradient,
        border: `1px solid ${style.border}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      }}
    >
      {/* Statistical background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none">
          <path d="M0 310C100 310 200 250 300 140C400 30 500 90 600 310" stroke="#14b8a6" strokeWidth="1.8" />
          <path d="M0 295C100 295 200 235 300 125C400 15 500 75 600 295" stroke="#14b8a6" strokeWidth="1.3" opacity="0.7" />
          <path d="M0 325C100 325 200 265 300 155C400 45 500 105 600 325" stroke="#14b8a6" strokeWidth="1.1" opacity="0.5" />
        </svg>
        
        {/* Statistical decorators */}
        <div 
          className="absolute top-4 right-6 text-7xl font-bold opacity-[0.05] font-mono text-[#94a3b8]"
        >
          {decorator}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header con icono y título */}
        {(icon || title) && (
          <div className="flex items-center gap-4 mb-6">
            {icon && (
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ 
                  background: `linear-gradient(135deg, ${style.color}, ${style.color}bb)`,
                }}
              >
                <div className="text-white">{icon}</div>
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-bold text-[#1e293b]">{title}</h2>
            )}
          </div>
        )}
        
        {/* Contenido */}
        <div className="text-[#64748b] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}