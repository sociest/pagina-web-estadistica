function StudentsInternshipOfferCard({ offer, postulateIcon: PostulateIcon }) {
  return (
    <article className="group flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#001d3d] hover:shadow-xl md:flex-row md:items-center md:p-8">
      <div className="flex items-start gap-5 md:items-center">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-[#f8fafc] text-[#ea580c] transition-colors group-hover:bg-[#001d3d] group-hover:text-white">
          <span className="text-lg font-black">Σ</span>
        </div>

        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#ea580c]/20 bg-[#ea580c]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#ea580c]">
              {offer.type}
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-500">
              {offer.area}
            </span>
          </div>

          <h3 className="mb-1 text-xl font-black uppercase tracking-tighter text-[#001d3d]">{offer.role}</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{offer.company}</p>
        </div>
      </div>

      <div className="w-full border-t border-slate-100 pt-4 md:w-auto md:border-t-0 md:pt-0 md:text-right">
        <p className="mb-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600">
          {offer.reqs}
        </p>
        <div className="flex items-center gap-3 md:justify-end">
          <span className="flex-1 text-xs font-black uppercase tracking-widest text-red-500 md:flex-none">{offer.date}</span>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#001d3d] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-md transition-colors hover:bg-[#ea580c]"
          >
            {PostulateIcon ? <PostulateIcon size={14} /> : null}
            Postular
          </button>
        </div>
      </div>
    </article>
  )
}

export default StudentsInternshipOfferCard
