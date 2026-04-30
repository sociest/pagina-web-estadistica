import { GraduationCap, Cloud, Mail, ExternalLink } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    label: 'Moodle',
    sublabel: 'Aula Virtual',
    description: 'Accede a tus materias, tareas y recursos académicos en línea.',
    href: 'https://virtual.umsa.bo',
    color: '#00447e',
    bg: 'rgba(255,255,255,0.98)',
    border: 'rgba(100,116,139,0.20)',
  },
  {
    icon: Cloud,
    label: 'SIA',
    sublabel: 'Sistema de Información',
    description: 'Inscripción, historial académico y trámites universitarios en línea.',
    href: 'https://sia.umsa.bo',
    color: '#00447e',
    bg: 'rgba(255,255,255,0.98)',
    border: 'rgba(100,116,139,0.20)',
  },
  {
    icon: Mail,
    label: 'Webmail',
    sublabel: 'Correo Institucional',
    description: 'Comunicación oficial con docentes y administración de la UMSA.',
    href: 'https://webmail.umsa.bo',
    color: '#00447e',
    bg: 'rgba(255,255,255,0.98)',
    border: 'rgba(100,116,139,0.20)',
  },
];

export function QuickAccess() {
  return (
    <div className="relative z-20 -mt-16 px-6 sm:px-12 lg:px-20 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl p-6 flex items-start gap-4 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden bg-white shadow-xl border border-slate-200"
            >
              {/* Icon */}
              <div
                className="relative shrink-0 size-[56px] rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                style={{ background: card.color }}
              >
                <Icon className="size-6" />
              </div>

              {/* Text */}
              <div className="relative flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[18px] text-slate-800">{card.label}</span>
                  <ExternalLink className="size-4 opacity-40 shrink-0 group-hover:opacity-70" />
                </div>
                <p className="text-[12px] font-bold uppercase tracking-wider mb-2" style={{ color: card.color }}>{card.sublabel}</p>
                <p className="text-[13px] text-slate-500 leading-relaxed">{card.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
