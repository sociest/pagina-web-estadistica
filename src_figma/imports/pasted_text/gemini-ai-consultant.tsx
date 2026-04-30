import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Menu, X, ChevronDown, BarChart3, ChevronRight, 
  GraduationCap, Cloud, Mail, ExternalLink, MapPin, 
  Phone, Facebook, Twitter, Youtube, Instagram, ArrowRight,
  BookOpen, Microscope, FlaskConical, TrendingUp, Calendar,
  Quote, Building2, ChevronLeft, Clock, Globe, ShieldCheck, UserCheck, Users,
  Activity, Database, Cpu, PieChart, FileText, CheckCircle2, Sigma, Sparkles, Send, Loader2
} from 'lucide-react';

// ── CONFIGURACIÓN DE LA API DE GEMINI ───────────────────────────────────────
const apiKey = ""; // La clave se proporciona en el entorno de ejecución

const callGemini = async (userQuery, systemPrompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  const retryWithBackoff = async (attempt = 0) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
      if (attempt < 4) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        return retryWithBackoff(attempt + 1);
      }
      throw error;
    }
  };

  return retryWithBackoff();
};

// ── PALETA DE COLORES TÉCNICA (Mate & Sobria) ──────────────────────────────
const COLORS = {
  whiteMate: '#f8fafc',
  blueInst: '#00447e',
  greyProf: {
    light: '#f1f5f9',
    border: '#cbd5e1',
    text: '#64748b',
    dark: '#475569'
  },
  orangeProf: '#ea580c',
  details: {
    turquoise: '#14b8a6',
    green: '#16a34a',
    red: '#dc2626'
  }
};

// ── COMPONENTES IA ──────────────────────────────────────────────────────────

const GeminiAIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse("");
    setError(null);
    
    const systemPrompt = `Eres el Consultor Académico IA de la Carrera de Estadística de la Universidad Mayor de San Andrés (UMSA). 
    Tu objetivo es ayudar a estudiantes y postulantes con información sobre:
    - El plan de estudios (10 semestres).
    - Requisitos de admisión.
    - El Instituto IETA.
    - Definiciones estadísticas rápidas.
    Responde de forma institucional, profesional y concisa. Si no sabes algo específico del reglamento actual, sugiere contactar a Kardex Académico.`;

    try {
      const text = await callGemini(query, systemPrompt);
      setResponse(text);
    } catch (err) {
      setError("No se pudo conectar con el servidor académico IA. Por favor, intente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 md:w-96 bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden mb-4 flex flex-col max-h-[500px]"
          >
            <div className="bg-[#00447e] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-400" />
                <span className="font-black text-xs uppercase tracking-widest">Consultor Académico IA</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18}/></button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 font-medium text-xs leading-relaxed text-slate-600">
              {!response && !isLoading && !error && (
                <p className="italic opacity-60">Hola, soy el asistente virtual de la Carrera. ¿En qué puedo ayudarte hoy?</p>
              )}
              {isLoading && (
                <div className="flex items-center gap-2 text-[#00447e]">
                  <Loader2 className="animate-spin" size={14} />
                  <span>Procesando consulta técnica...</span>
                </div>
              )}
              {error && <p className="text-red-600 font-bold">{error}</p>}
              {response && (
                <div className="prose prose-sm">
                  <p className="whitespace-pre-wrap">{response}</p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                  placeholder="Escribe tu duda académica..."
                  className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#00447e] outline-none"
                />
                <button 
                  onClick={handleAsk}
                  disabled={isLoading}
                  className="bg-[#00447e] text-white p-2 rounded-lg hover:bg-slate-800 transition disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#00447e] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white"
      >
        {isOpen ? <X /> : <Sparkles className="animate-pulse" />}
      </button>
    </div>
  );
};

// ── COMPONENTES DE IDENTIDAD (FONDOS Y CURVAS) ──────────────────────────────

const IdentityBackground = ({ opacity = 0.4 }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" style={{ opacity }}>
    <div className="absolute inset-0 opacity-[0.1]" 
      style={{ backgroundImage: `radial-gradient(${COLORS.greyProf.dark} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
    />
    <svg className="absolute top-[10%] -right-20 w-[800px] h-[400px] opacity-[0.03]" viewBox="0 0 400 100">
      <path d="M0 80C100 80 150 20 200 20C250 20 300 80 400 80" stroke={COLORS.details.turquoise} strokeWidth="1.5" fill="none" />
    </svg>
    <svg className="absolute bottom-[5%] -left-20 w-[600px] h-[300px] opacity-[0.03]" viewBox="0 0 400 100">
      <path d="M0 20C100 20 150 80 200 80C250 80 300 20 400 20" stroke={COLORS.details.red} strokeWidth="1" fill="none" />
    </svg>
  </div>
);

// ── SECCIONES DEL PORTAL ─────────────────────────────────────────────────────

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'La Carrera', children: ['Historia y Misión', 'Acreditación', 'Autoridades'] },
    { label: 'Académico', children: ['Pregrado', 'Postgrado', 'Admisiones'] },
    { label: 'Investigación', children: ['IETA', 'Revista Varianza', 'Proyectos'] },
    { label: 'Estudiantes', children: ['Trámites', 'Becas', 'Cursos'] },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-5"
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4">
          <div className="size-11 bg-[#00447e] rounded flex items-center justify-center shadow-lg">
            <BarChart3 className="size-6 text-white" />
          </div>
          <div>
            <h1 className={`font-black text-lg leading-none uppercase ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Estadística <span className="text-[#ea580c]">UMSA</span>
            </h1>
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${scrolled ? 'text-slate-400' : 'text-white/60'}`}>
              Facultad de Ciencias Puras
            </p>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={`px-4 py-2 rounded text-[12px] font-black uppercase tracking-widest transition flex items-center gap-1 ${
                scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}>
                {item.label} <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 bg-white shadow-2xl border border-slate-100 p-2 min-w-[240px] rounded-xl border-t-4 border-[#00447e]">
                    {item.children.map(child => (
                      <a key={child} href="#" className="block px-4 py-3 text-[12px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#00447e] transition">
                        {child}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className={`p-2 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}><Search size={20} /></button>
          <button className="bg-[#00447e] text-white px-6 py-2.5 rounded-lg text-xs font-black tracking-widest shadow-lg hover:bg-slate-800 transition uppercase">SIA ACCESO</button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Formando Científicos de Datos para el Futuro',
      tag: '🎓 PREGRADO',
      desc: 'Liderazgo académico en análisis estadístico y modelado predictivo con base científica sólida.',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Excelencia en Investigación Aplicada IETA',
      tag: '🔬 INVESTIGACIÓN',
      desc: 'Generamos conocimiento estratégico para el desarrollo social y económico del país.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  return (
    <section className="relative h-[95vh] bg-[#001d3d] overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0">
          <img src={slides[currentSlide].img} className="w-full h-full object-cover opacity-30 grayscale-[0.4]" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001d3d] via-[#001d3d]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#ea580c] text-white px-4 py-1.5 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-xl">
              {slides[currentSlide].tag} · Estadística UMSA
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl">
              Arquitectos de <br/>
              <span className="text-slate-300 italic">la Evidencia.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12 font-medium border-l-4 border-[#ea580c] pl-8">
              {slides[currentSlide].desc}
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-white text-[#00447e] px-12 py-5 rounded-xl font-black text-sm tracking-widest hover:bg-slate-100 transition shadow-2xl uppercase">
                Plan de Estudios 2026
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-xl font-black text-sm tracking-widest hover:bg-white/10 transition uppercase">
                Instituto IETA
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-8 flex items-center gap-4 z-20">
        <button onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))} className="size-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition"><ChevronLeft/></button>
        <button onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)} className="size-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition"><ChevronRight/></button>
      </div>

      <div className="absolute bottom-10 right-10 opacity-10 text-white font-mono text-[11px] space-y-1 text-right">
        <div>σ = 1.05442</div>
        <div>R² = 0.94218</div>
        <div>n = 380+</div>
        <div>p &lt; 0.0001</div>
      </div>
    </section>
  );
};

const QuickAccess = () => {
  const links = [
    { icon: GraduationCap, label: 'Moodle', sub: 'AULA VIRTUAL', desc: 'Recursos digitales y materias en línea.' },
    { icon: Cloud, label: 'SIA', sub: 'SISTEMA ACADÉMICO', desc: 'Trámites e historial académico digital.' },
    { icon: Mail, label: 'Webmail', sub: 'CORREO INSTITUCIONAL', desc: 'Comunicación oficial universitaria.' },
  ];

  return (
    <div className="relative z-30 -mt-20 max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {links.map((link, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-3xl border border-slate-200 flex gap-6 group cursor-pointer transition-all duration-500"
        >
          <div className="size-14 bg-slate-50 flex items-center justify-center text-[#00447e] rounded-xl group-hover:bg-[#00447e] group-hover:text-white transition-colors duration-500">
            <link.icon size={28} />
          </div>
          <div>
            <h4 className="font-black text-slate-800 text-lg tracking-tight uppercase leading-none">{link.label}</h4>
            <p className="text-[10px] font-bold text-[#ea580c] mt-1.5 uppercase tracking-widest">{link.sub}</p>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed font-medium">{link.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const AcademicKPIs = () => {
  const metrics = [
    { v: '92%', l: 'Empleabilidad Directa', s: 'Egresados en puestos senior', c: COLORS.blueInst },
    { v: '15:1', l: 'Ratio Estudiante/Docente', s: 'Atención personalizada', c: COLORS.orangeProf },
    { v: '25+', l: 'Investigaciones IETA', s: 'Proyectos de impacto nacional', c: COLORS.blueInst },
    { v: 'A+', l: 'Acreditación CEUB', s: 'Excelencia Internacional', c: COLORS.orangeProf }
  ];

  return (
    <section className="py-28 bg-[#f8fafc] relative overflow-hidden">
      <IdentityBackground opacity={0.3} />
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1.5 w-12 bg-[#00447e]" />
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Métricas Institucionales</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter italic">Resultados de Excelencia Académica</h2>
           </div>
           <p className="text-slate-500 font-bold max-w-sm text-sm uppercase tracking-widest leading-loose">Gestión Educativa <br/> Carrera de Estadística 2026</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="group border-l-2 border-slate-200 pl-8 hover:border-[#00447e] transition-all">
              <div className="text-6xl font-black tracking-tighter mb-4" style={{ color: m.c }}>{m.v}</div>
              <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight">{m.l}</h4>
              <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-widest">{m.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppliedScienceX1 = () => {
  const [projectSummary, setProjectSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);

  const generateSummary = async () => {
    setIsSummarizing(true);
    const context = "Instituto IETA (Instituto de Estadística Teórica y Aplicada) de la UMSA desarrolla modelos de alta precisión para pobreza multidimensional, análisis de Big Data en sector público y consultoría estatal avanzada.";
    try {
      const summary = await callGemini(`Resume este contexto en 2 frases de impacto profesional: ${context}`, "Eres un analista de comunicación científica.");
      setProjectSummary(summary);
    } catch (e) {
      setProjectSummary("Error al generar resumen.");
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <section className="py-28 bg-white px-8 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-24 items-center relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-slate-400 font-mono text-sm tracking-widest">$X_1$</span>
            <div className="h-0.5 flex-1 bg-slate-100"></div>
          </div>
          <h3 className="text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10 uppercase">
            Ciencia Aplicada <br/>
            <span className="text-[#00447e]">Instituto IETA</span>
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium">
            El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad.
          </p>

          {/* AI Feature: Project Summary */}
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
               <Sparkles size={24} className="text-orange-500" />
             </div>
             <button 
                onClick={generateSummary}
                className="flex items-center gap-2 text-[10px] font-black text-orange-600 uppercase tracking-widest mb-3 hover:text-orange-700 transition"
              >
                {isSummarizing ? <Loader2 size={12} className="animate-spin"/> : <Sparkles size={12}/>} ✨ Generar Resumen IA
             </button>
             <p className="text-xs text-slate-500 leading-relaxed italic">
                {projectSummary || "Haga clic para generar una síntesis automática de las investigaciones actuales mediante IA."}
             </p>
          </div>

          <div className="space-y-6">
             {[
               { t: 'Modelado Multivariante', d: 'Análisis de pobreza multidimensional con organismos internacionales.' },
               { t: 'Ciencia de Datos Pública', d: 'Soporte técnico avanzado para el INE y UDAPE.' }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 p-8 bg-[#f1f5f9] rounded-2xl border border-slate-200 group hover:border-[#00447e] transition-all">
                  <div className="size-12 bg-white rounded-xl flex items-center justify-center text-[#ea580c] shrink-0 shadow-lg group-hover:scale-110 transition">
                     <Sigma size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-800 text-sm uppercase tracking-tight">{item.t}</h5>
                    <p className="text-xs text-slate-400 font-bold mt-2 leading-relaxed tracking-widest uppercase">{item.d}</p>
                  </div>
               </div>
             ))}
          </div>
          <button className="mt-12 group flex items-center gap-4 bg-[#001d3d] text-white px-10 py-5 rounded-xl font-black text-xs tracking-[0.2em] hover:bg-[#00447e] transition-all uppercase shadow-2xl">
            Explorar Investigaciones <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-12 grid-rows-12 h-[600px] gap-6">
            <div className="col-span-8 row-span-12 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-[#f1f5f9]">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600" className="w-full h-full object-cover grayscale" alt="Research 1" />
              <div className="absolute inset-0 bg-[#00447e]/10" />
            </div>
            <div className="col-span-4 row-span-6 rounded-[2.5rem] bg-[#00447e] flex flex-col items-center justify-center p-8 text-white shadow-2xl">
               <span className="text-5xl font-black tracking-tighter italic">R² = 0.98</span>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-4 opacity-60">Poder Predictivo</p>
            </div>
            <div className="col-span-4 row-span-6 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-[#f1f5f9]">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=400" className="w-full h-full object-cover grayscale" alt="Research 2" />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 size-40 border-r-4 border-b-4 border-[#16a34a] opacity-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#001d3d] text-white pt-28 pb-12 relative overflow-hidden border-t-2 border-[#ea580c]">
    <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
      <div className="space-y-10">
        <div className="flex items-center gap-4">
           <div className="size-14 bg-white rounded-xl flex items-center justify-center text-[#001d3d] shadow-2xl">
              <BarChart3 size={32} />
           </div>
           <div>
              <h4 className="font-black text-2xl leading-none uppercase tracking-tighter">Estadística</h4>
              <p className="text-[11px] font-bold text-[#ea580c] tracking-[0.4em] uppercase mt-1">UMSA Bolivia</p>
           </div>
        </div>
        <p className="text-[14px] text-white/40 leading-relaxed font-medium">Líderes regionales en formación científica y análisis estratégico de datos para el desarrollo del estado boliviano.</p>
        <div className="flex gap-4">
           {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
             <a key={i} href="#" className="size-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00447e] transition group border border-white/5">
                <Icon size={20} className="text-white/40 group-hover:text-white transition" />
             </a>
           ))}
        </div>
      </div>

      <div>
        <h5 className="font-black text-xs text-white uppercase tracking-[0.3em] mb-12 border-l-4 border-[#ea580c] pl-4">Académico</h5>
        <ul className="space-y-5 text-sm font-bold text-white/50">
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-[#ea580c] group-hover:w-4 transition-all" /> Plan de Estudios
           </li>
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-[#ea580c] group-hover:w-4 transition-all" /> Calendario
           </li>
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-[#ea580c] group-hover:w-4 transition-all" /> Admisiones
           </li>
        </ul>
      </div>

      <div>
        <h5 className="font-black text-xs text-white uppercase tracking-[0.3em] mb-12 border-l-4 border-white/20 pl-4">Investigación</h5>
        <ul className="space-y-5 text-sm font-bold text-white/50">
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-white/40 group-hover:w-4 transition-all" /> Instituto IETA
           </li>
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-white/40 group-hover:w-4 transition-all" /> Revista Varianza
           </li>
           <li className="hover:text-white transition cursor-pointer flex items-center gap-3 group">
              <div className="h-0.5 w-0 bg-white/40 group-hover:w-4 transition-all" /> Consultoría
           </li>
        </ul>
      </div>

      <div>
        <h5 className="font-black text-xs text-white uppercase tracking-[0.3em] mb-12 border-l-4 border-[#14b8a6] pl-4">Ubicación</h5>
        <div className="space-y-8 text-sm text-white/40 font-medium">
           <div className="flex gap-4">
              <MapPin size={22} className="text-[#ea580c] shrink-0 mt-1"/>
              <span>Campus Monoblock Central, Av. Villazón N° 1995, Edif. FCPN Piso 3. La Paz.</span>
           </div>
           <div className="flex gap-4 items-center">
              <Phone size={22} className="text-[#ea580c] shrink-0"/>
              <span>(591-2) 244-2100</span>
           </div>
           <div className="flex gap-4 items-center">
              <Mail size={22} className="text-[#ea580c] shrink-0"/>
              <span>estadistica@fcpn.edu.bo</span>
           </div>
        </div>
      </div>
    </div>

    <div className="max-w-[1440px] mx-auto px-8 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
       <div className="flex flex-wrap justify-center gap-10 font-mono text-[11px] text-white/10 uppercase tracking-[0.4em] font-black italic">
          <span>σ = 1.054</span> <span>R² = 0.942</span> <span>β₁ = 0.871</span> <span>p &lt; 0.0001</span>
       </div>
       <p className="text-[11px] text-white/20 font-black uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Carrera de Estadística · UMSA · Facultad de Ciencias Puras y Naturales
       </p>
    </div>
  </footer>
);

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#00447e] selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <QuickAccess />
      <AcademicKPIs />
      
      {/* Sección Perfil del Graduado */}
      <section className="py-28 bg-[#f1f5f9] border-y border-slate-200 relative overflow-hidden">
         <IdentityBackground opacity={0.2} />
         <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="relative order-2 lg:order-1">
               <div className="absolute -inset-10 bg-[#00447e]/5 blur-[100px] rounded-full" />
               <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" className="relative rounded-[3rem] shadow-3xl grayscale-[0.3] border-8 border-white" alt="Alumni" />
               <div className="absolute -bottom-8 -right-8 bg-[#00447e] p-10 rounded-[2.5rem] shadow-3xl text-white hidden md:block border-4 border-white">
                  <div className="text-5xl font-black tracking-tighter mb-2">92%</div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Inserción Laboral</p>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="flex items-center gap-3 mb-6">
                 <div className="h-1.5 w-12 bg-[#ea580c]" />
                 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Propósito Académico</span>
               </div>
               <h2 className="text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10 uppercase">Perfil del <br/><span className="text-[#00447e]">Egresado</span></h2>
               <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                  Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.
               </p>
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { t: 'Analista de Riesgos', d: 'Sectores bancarios y seguros.' },
                    { t: 'Data Scientist', d: 'IA y Machine Learning avanzado.' },
                    { t: 'Consultor Público', d: 'Políticas basadas en evidencia.' },
                    { t: 'Investigador', d: 'Desarrollo de nuevas metodologías.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                       <CheckCircle2 className="text-[#ea580c] shrink-0 mt-1" size={20} />
                       <div>
                          <h5 className="font-black text-slate-800 text-sm uppercase tracking-tight">{item.t}</h5>
                          <p className="text-[11px] text-slate-400 font-bold mt-1 uppercase tracking-widest">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <AppliedScienceX1 />
      
      {/* Sección Agenda & Noticias */}
      <section className="py-28 bg-[#001d3d] text-white">
         <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-[1.6fr_1fr] gap-20">
            <div>
               <div className="flex items-center justify-between mb-12">
                  <h3 className="text-4xl font-black tracking-tighter uppercase">Actualidad <span className="text-blue-400">Institucional</span></h3>
                  <button className="text-xs font-black tracking-[0.2em] border-b-2 border-blue-400 pb-1 hover:text-blue-400 transition uppercase">Ver Noticias</button>
               </div>
               <div className="space-y-6">
                  {[1,2].map(i => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex gap-8 items-center group hover:bg-white/10 transition-all cursor-pointer">
                       <div className="size-28 bg-slate-800 rounded-2xl overflow-hidden shrink-0 shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=300" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="News" />
                       </div>
                       <div>
                          <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">Investigación</span>
                          <h4 className="text-xl font-black mt-3 group-hover:text-blue-400 transition">Resultados del análisis masivo de datos para el censo 2025</h4>
                          <div className="flex items-center gap-3 mt-4 text-[11px] text-white/40 font-bold uppercase tracking-widest"><Clock size={14}/> 15 Mar, 2025</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div>
               <h3 className="text-4xl font-black tracking-tighter uppercase mb-12">Agenda <span className="text-[#ea580c]">UMSA</span></h3>
               <div className="space-y-4">
                  {[
                    { d: '20', m: 'MAR', t: 'Inicio Censo Universitario', l: 'Monoblock' },
                    { d: '25', m: 'MAR', t: 'Ceremonia de Graduación', l: 'Paraninfo' },
                    { d: '30', m: 'MAR', t: 'Cierre Inscripciones Postgrado', l: 'FCPN' }
                  ].map((ev, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 group hover:border-[#ea580c] transition cursor-pointer">
                       <div className="size-16 rounded-xl bg-slate-900 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-[#ea580c] transition shadow-2xl">
                          <span className="text-2xl font-black leading-none">{ev.d}</span>
                          <span className="text-[11px] font-bold mt-1 tracking-tighter">{ev.m}</span>
                       </div>
                       <div className="flex-1">
                          <h5 className="font-bold text-[14px] leading-tight group-hover:text-[#ea580c] transition uppercase">{ev.t}</h5>
                          <p className="text-[11px] text-white/40 mt-2 flex items-center gap-1 font-black uppercase tracking-widest"><MapPin size={12} className="text-[#ea580c]"/> {ev.l}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <Footer />
      <GeminiAIConsultant />
    </div>
  );
}