const ResearchAreaPill = ({ area }) => (
  <div className="group flex cursor-default items-center gap-2 rounded-full border-2 border-[#001d3d] bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-colors hover:bg-[#001d3d] hover:text-white">
    <div className="size-2 rounded-full bg-[#ea580c] transition-colors group-hover:bg-white" />
    {area}
  </div>
)

export default ResearchAreaPill
