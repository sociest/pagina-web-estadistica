import { Sigma } from 'lucide-react'

const VarianzaCoverImage = ({ edition, year, isLarge = false }) => (
  <div
    className={[
      'group relative flex w-full flex-col items-center justify-between overflow-hidden border-4 border-[#001122] bg-[#001d3d] shadow-md transition-all duration-500 group-hover:shadow-2xl',
      isLarge ? 'h-[400px]' : 'h-64',
    ].join(' ')}
  >
    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
    <Sigma className="absolute -bottom-10 -left-10 text-white/5" size={isLarge ? 250 : 150} aria-hidden="true" />

    <div className="z-10 w-full border-b-4 border-[#c24100] bg-[#ea580c] py-2 text-center text-white shadow-lg">
      <h3 className={isLarge ? 'text-2xl font-black uppercase tracking-[0.3em]' : 'text-sm font-black uppercase tracking-[0.3em]'}>
        VARIANZA
      </h3>
      <p className={isLarge ? 'text-[10px] font-bold italic tracking-[0.4em] text-white/80' : 'text-[7px] font-bold italic tracking-[0.2em] text-white/80'}>
        REVISTA CIENTIFICA
      </p>
    </div>

    <div className="z-10 flex flex-1 flex-col items-center justify-center text-white">
      <div className={isLarge ? 'flex size-32 flex-col items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm' : 'flex size-20 flex-col items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm'}>
        <span className={isLarge ? 'text-5xl font-black leading-none tracking-tighter text-[#ea580c]' : 'text-3xl font-black leading-none tracking-tighter text-[#ea580c]'}>
          {edition}
        </span>
        <span className={isLarge ? 'mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-slate-300' : 'mt-2 text-[6px] font-black uppercase tracking-[0.2em] text-slate-300'}>
          EDICION OFICIAL
        </span>
      </div>
    </div>

    <div className="z-10 flex w-full justify-between border-t border-white/10 bg-[#001122] px-6 py-2 text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">
      <span>IETA - UMSA</span>
      <span className="text-white">{year}</span>
    </div>
  </div>
)

export default VarianzaCoverImage
