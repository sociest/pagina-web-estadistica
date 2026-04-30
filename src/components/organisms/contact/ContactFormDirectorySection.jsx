import { useState } from 'react'
import PropTypes from 'prop-types'
import ContactDirectoryEmailItem from '../../molecules/contact/ContactDirectoryEmailItem'
import ContactDirectoryPhoneItem from '../../molecules/contact/ContactDirectoryPhoneItem'

function ContactFormDirectorySection({ formConfig, phones, emails, directoryUi }) {
  const [isStudent, setIsStudent] = useState(false)
  const [notice, setNotice] = useState('')

  const FormIcon = formConfig.icon
  const PhonesIcon = directoryUi.phonesIcon
  const EmailsIcon = directoryUi.emailsIcon

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice(formConfig.successMessage)
    event.currentTarget.reset()
    setIsStudent(false)
  }

  return (
    <section id="formulario" className="mx-auto mt-12 max-w-[1536px] px-4 md:mt-16 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-8 shadow-xl md:p-12">
        <div className="absolute -right-6 top-0 opacity-[0.04]">
          <FormIcon className="text-[#001d3d]" size={210} />
        </div>

        <div className="relative z-10 mb-8">
          <h3 className="mb-2 text-4xl font-black uppercase tracking-tighter text-[#001d3d]">
            {formConfig.title[0]} <span className="font-serif lowercase italic tracking-normal text-[#ea580c]">{formConfig.title[1]}</span>
          </h3>
          <p className="text-base font-medium italic text-slate-500">{formConfig.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block pl-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">{formConfig.fields.fullName}</span>
              <input
                required
                type="text"
                placeholder={formConfig.placeholders.fullName}
                className="w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block pl-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">{formConfig.fields.email}</span>
              <input
                required
                type="email"
                placeholder={formConfig.placeholders.email}
                className="w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block pl-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">{formConfig.fields.category}</span>
            <select
              required
              defaultValue=""
              className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all focus:border-[#ea580c] focus:outline-none"
            >
              <option value="">{formConfig.placeholders.category}</option>
              {formConfig.categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={isStudent}
                onChange={() => setIsStudent((prev) => !prev)}
                className="size-5 rounded border-slate-300 text-[#001d3d] focus:ring-[#001d3d]"
              />
              <span className="text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d]">{formConfig.studentToggleLabel}</span>
            </label>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isStudent ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <label className="block">
                  <span className="mb-2 block pl-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-[#001d3d]/60">
                    {formConfig.fields.studentCode}
                  </span>
                  <input
                    type="number"
                    placeholder={formConfig.placeholders.studentCode}
                    className="w-full rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm focus:border-[#001d3d] focus:outline-none"
                  />
                </label>
              </div>
            </div>
          </div>

          <label className="block">
            <span className="mb-2 block pl-2 text-base sm:text-base md:text-lg font-black uppercase tracking-widest text-slate-400">{formConfig.fields.message}</span>
            <textarea
              required
              rows="4"
              placeholder={formConfig.placeholders.message}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition-all focus:border-[#ea580c] focus:outline-none focus:ring-2 focus:ring-orange-100"
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#001d3d] py-5 text-sm sm:text-base md:text-lg font-black uppercase tracking-widest text-white shadow-xl transition-all hover:bg-[#ea580c]"
          >
            {formConfig.submitLabel}
            <FormIcon size={16} />
          </button>

          {notice ? <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-bold text-emerald-700">{notice}</p> : null}
        </form>
        </div>

        <article id="directorio" className="relative overflow-hidden rounded-[3rem] border-b-8 border-[#ea580c] bg-[#001d3d] p-8 text-white shadow-2xl md:p-10">
          <PhonesIcon className="absolute -bottom-6 -right-6 opacity-10" size={150} />
          <h3 className="relative z-10 mb-8 flex items-center gap-3 text-2xl font-black uppercase tracking-tighter">
            <PhonesIcon className="text-[#ea580c]" /> {directoryUi.phonesTitle}
          </h3>
          <div className="relative z-10 space-y-4">
            {phones.map((phone) => (
              <ContactDirectoryPhoneItem key={`${phone.unit}-${phone.number}`} item={phone} />
            ))}
          </div>
        </article>
      </div>

      <article className="mt-8 rounded-[3rem] border border-slate-200 bg-white p-8 shadow-sm md:mt-10 md:p-10">
        <h3 className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 text-xl font-black uppercase tracking-tighter text-[#001d3d]">
          <EmailsIcon className="text-slate-400" /> {directoryUi.emailsTitle}
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {emails.map((email) => (
            <ContactDirectoryEmailItem key={email.email} item={email} />
          ))}
        </div>
      </article>
    </section>
  )
}

ContactFormDirectorySection.propTypes = {
  formConfig: PropTypes.shape({
    title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    subtitle: PropTypes.string.isRequired,
    submitLabel: PropTypes.string.isRequired,
    successMessage: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    studentToggleLabel: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      studentCode: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    placeholders: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      studentCode: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      unit: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      ext: PropTypes.string.isRequired,
      altNumber: PropTypes.string,
    }).isRequired,
  ).isRequired,
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      unit: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  directoryUi: PropTypes.shape({
    phonesTitle: PropTypes.string.isRequired,
    emailsTitle: PropTypes.string.isRequired,
    phonesIcon: PropTypes.elementType.isRequired,
    emailsIcon: PropTypes.elementType.isRequired,
  }).isRequired,
}

export default ContactFormDirectorySection
