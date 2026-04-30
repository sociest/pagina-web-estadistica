function ContactDirectoryPhoneItem({ item }) {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
      <div>
        <h4 className="mb-1 text-xs font-black uppercase tracking-tight text-blue-200">{item.unit}</h4>
        <p className="text-xs font-bold uppercase tracking-widest text-white/50">{item.role}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-black tracking-tight text-white">{item.number}</p>
        {item.altNumber ? <p className="text-[9px] font-black text-blue-200">ALT. {item.altNumber}</p> : null}
        <p className="text-xs font-black uppercase tracking-widest text-[#ea580c]">
          {item.ext !== 'Celular' && item.ext !== 'N/A' ? `INT. ${item.ext}` : item.ext}
        </p>
      </div>
    </div>
  )
}

export default ContactDirectoryPhoneItem
