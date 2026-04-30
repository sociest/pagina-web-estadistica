function ContactFaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
      >
        <span className="pr-4 text-xs font-black uppercase tracking-tight text-[#002a52]">{item.question}</span>
        <span
          className={`inline-flex size-7 items-center justify-center rounded-full border text-sm font-black transition-all ${
            isOpen ? 'border-[#ea580c] bg-orange-50 text-[#ea580c]' : 'border-slate-200 text-slate-500'
          }`}
          aria-hidden="true"
        >
          {isOpen ? '-' : '+'}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 p-5 pt-4 text-sm font-medium italic text-slate-600">{item.answer}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactFaqItem
