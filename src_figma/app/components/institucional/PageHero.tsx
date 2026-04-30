interface PageHeroProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary';
}

export function PageHero({ title, description, variant = 'primary' }: PageHeroProps) {
  const variantStyles = {
    primary: {
      gradient: 'linear-gradient(135deg, #00447e 0%, #003a6b 100%)',
      color: '#00447e',
      decorators: ['σ = 1.05', 'R² = 0.94', 'n = 380+', 'μ = 4.2']
    },
    secondary: {
      gradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
      color: '#ea580c',
      decorators: ['β₁ = 0.87', 'R² = 0.96', 'n = 140+', 'σ = 0.21']
    }
  };

  const style = variantStyles[variant];

  return (
    <section 
      className="relative text-white py-24 overflow-hidden"
      style={{ background: style.gradient }}
    >
      {/* Enhanced statistical background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Main SVG curves */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 1400 320" preserveAspectRatio="none" fill="none">
          <path d="M0 240C350 240 700 160 1050 60C1200 20 1320 10 1400 240" stroke="white" strokeWidth="2.5" />
          <path d="M0 260C350 260 700 180 1050 80C1200 40 1320 30 1400 260" stroke="white" strokeWidth="1.8" opacity="0.7" />
          <path d="M0 220C350 220 700 140 1050 40C1200 0 1320 -10 1400 220" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </svg>

        {/* Statistical symbols positioned like Figma */}
        <div className="absolute top-10 left-12 text-7xl md:text-8xl font-bold opacity-[0.15] font-mono">σ</div>
        <div className="absolute bottom-16 right-16 text-5xl md:text-6xl font-bold opacity-[0.15] font-mono">R²</div>
        <div className="absolute top-1/3 right-1/4 text-6xl md:text-7xl font-bold opacity-[0.12] font-mono">n</div>
        <div className="absolute top-2/3 left-1/4 text-5xl font-bold opacity-[0.12] font-mono">μ</div>
        
        {/* Small statistical annotations */}
        <div className="absolute top-8 right-20 text-xs font-mono opacity-40 space-y-1 hidden md:block">
          {style.decorators.map((stat, i) => (
            <div key={i}>{stat}</div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
          style={{ textShadow: '0 3px 20px rgba(0,0,0,0.2)' }}
        >
          {title}
        </h1>
        <p 
          className="text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
        >
          {description}
        </p>
      </div>
      
      {/* Enhanced wave SVG at bottom */}
      <svg 
        className="absolute bottom-0 left-0 w-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ height: '80px' }}
      >
        <path 
          d="M0,40 C300,90 600,90 900,50 L1200,90 L1200,120 L0,120 Z" 
          fill="white" 
          opacity="0.3"
        />
        <path 
          d="M0,60 C300,100 600,100 900,70 L1200,100 L1200,120 L0,120 Z" 
          fill="white" 
        />
      </svg>
    </section>
  );
}