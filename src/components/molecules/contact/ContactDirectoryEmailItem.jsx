function ContactDirectoryEmailItem({ item }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
      <h4 className="text-xs font-black uppercase tracking-tight text-slate-800">{item.unit}</h4>
      <a href={`mailto:${item.email}`} className="my-1 block text-[11px] font-bold text-[#ea580c] hover:underline">
        {item.email}
      </a>
      <p className="text-[9px] font-medium italic text-slate-500">{item.desc}</p>
    </div>
  )
}

export default ContactDirectoryEmailItem
