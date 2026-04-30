function StudentsCallsAlertSection({ alertIcon: AlertIcon, supportIcon: SupportIcon }) {
  return (
    <section className="px-6 pb-24 md:px-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
        <div className="relative">
          <div className="absolute -right-3 -top-6 opacity-[0.07]" aria-hidden="true">
            {AlertIcon ? <AlertIcon size={92} className="text-[#001d3d]" /> : null}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-[1.3rem] bg-[#ea580c] text-white shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                {AlertIcon ? <AlertIcon size={24} /> : null}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-black uppercase leading-none tracking-tighter text-[#001d3d]">Alertas de convocatoria</h3>
                <p className="text-base font-medium italic text-slate-500">
                  Activa notificaciones para enterarte cuando se publique una nueva auxiliatura.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center justify-center gap-2 rounded-2xl border-2 border-[#001d3d] bg-white px-7 py-3.5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d] shadow-sm transition-colors hover:bg-[#001d3d] hover:text-white"
            >
              {SupportIcon ? <SupportIcon size={16} /> : null}
              Activar alertas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsCallsAlertSection
