import { useState } from 'react'
import { FolderOpen } from 'lucide-react'

function AutofinancedAdmissionSection({ section }) {
  const [activeTab, setActiveTab] = useState('bolivia')
  const activeRequirements = section.tabs.find((tab) => tab.id === activeTab) ?? section.tabs[0]
  const ActiveTabIcon = activeRequirements.icon
  const NoteIcon = section.note.icon

  return (
    <section className="mx-auto max-w-[1536px] px-4 md:px-12">
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
          <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-[0.4em] text-[#ea580c]">{section.tag}</span>
          <div className="h-[2px] w-8 rounded-full bg-[#ea580c]" />
        </div>
        <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#002a52] md:text-5xl">{section.title}</h2>
        <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed italic text-slate-500">{section.sub}</p>
      </div>

      <div className="rounded-[3rem] border border-slate-200 bg-white p-6 shadow-xl md:p-10">
        <div className="mb-8 rounded-[2.5rem] border border-orange-200 bg-orange-50 p-8">
          <NoteIcon className="mb-4 text-orange-700" size={32} />
          <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-orange-900">{section.note.title}</h4>
          <p className="text-base font-medium leading-relaxed italic text-orange-800/80">{section.note.text}</p>
        </div>

        <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 p-2 md:flex-row rounded-[2.5rem]">
          {section.tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`flex-1 rounded-[2rem] px-5 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isActive ? 'bg-[#001d3d] text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}>
                <TabIcon size={16} className={isActive ? 'text-[#ea580c]' : ''} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="mt-8 bg-blue-50 border-2 border-blue-100 p-6 rounded-2xl flex items-center gap-4 mb-8">
          <div className="size-12 bg-[#001d3d] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <FolderOpen size={20} />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-tighter text-[#001d3d] mb-1">Presentación obligatoria</h4>
            <p className="text-xs text-blue-900/80 font-medium italic">Toda la documentación debe entregarse físicamente en un <strong>folder color azul</strong>.</p>
          </div>
        </div>

        <div className="space-y-4">
          {activeRequirements.items.map((req, index) => (
            <div key={req} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#f8fafc] p-4 transition-colors hover:border-[#001d3d]">
              <div className="mt-0.5 w-6 font-mono text-[10px] font-black text-slate-300 transition-colors hover:text-[#ea580c]">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <p className="text-base sm:text-base md:text-lg font-bold uppercase tracking-tight text-slate-700 leading-relaxed">{req}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AutofinancedAdmissionSection
