import { ChevronDown } from 'lucide-react'
import PropTypes from 'prop-types'

function CompetencyAccordionItem({ title, icon: Icon, isOpen, onClick, children }) {
  return (
    <div className={`mb-4 rounded-3xl border transition-all duration-300 ${isOpen ? 'border-[#ea580c]/20 bg-white shadow-xl' : 'border-slate-100 bg-slate-50'}`}>
      <button onClick={onClick} className="group flex w-full items-center justify-between p-5 text-left" type="button">
        <div className="flex items-center gap-4">
          <div className={`flex size-10 items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-[#ea580c] text-white shadow-lg' : 'border border-slate-100 bg-white text-slate-400 group-hover:text-[#00447e]'}`}>
            {Icon ? <Icon size={20} /> : null}
          </div>
          <h4 className={`text-sm font-black uppercase tracking-tight md:text-base ${isOpen ? 'text-[#00447e]' : 'text-slate-500'}`}>
            {title}
          </h4>
        </div>
        <ChevronDown className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#ea580c]' : 'text-slate-300'}`} size={18} />
      </button>

      <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${isOpen ? 'max-h-[760px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="ml-14 p-6 pt-0 text-sm font-medium leading-relaxed text-slate-600">
          <div className="mb-6 h-[1px] w-full bg-slate-100" />
          {children}
        </div>
      </div>
    </div>
  )
}

CompetencyAccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default CompetencyAccordionItem