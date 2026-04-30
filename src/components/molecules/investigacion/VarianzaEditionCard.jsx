import VarianzaCoverImage from './VarianzaCoverImage'

const VarianzaEditionCard = ({ edition, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(edition)}
    className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ea580c] hover:shadow-xl"
  >
    <VarianzaCoverImage edition={edition.id} year={edition.year} />

    <div className="mt-6 flex flex-1 flex-col justify-between">
      <div>
        <h4 className="text-xl font-black uppercase tracking-tight text-[#001d3d] transition-colors group-hover:text-[#ea580c]">{edition.title}</h4>
        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">{edition.date}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
          ARTICULOS
          <span className="mt-1 block text-xl font-black text-[#001d3d]">{edition.originales}</span>
        </div>
        <div className="border-l border-slate-100 pl-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
          PAGINAS
          <span className="mt-1 block text-xl font-black text-[#001d3d]">{edition.paginas}</span>
        </div>
      </div>
    </div>
  </button>
)

export default VarianzaEditionCard
