function StudentsCallsFilterTabs({ filters, activeFilter, onFilterChange, filterIcon: FilterIcon }) {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-md shadow-inner">
      <div className="hidden items-center border-r border-white/20 pl-4 pr-2 text-white/40 sm:flex">
        {FilterIcon ? <FilterIcon size={16} /> : null}
      </div>
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${
            activeFilter === filter
              ? 'bg-[#ea580c] text-white shadow-lg'
              : 'text-white/65 hover:bg-white/20 hover:text-white'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default StudentsCallsFilterTabs
