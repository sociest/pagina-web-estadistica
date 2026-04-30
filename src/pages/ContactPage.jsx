import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ContactFaqSection from '../components/organisms/contact/ContactFaqSection'
import ContactFormDirectorySection from '../components/organisms/contact/ContactFormDirectorySection'
import ContactGallerySection from '../components/organisms/contact/ContactGallerySection'
import ContactHeroSection from '../components/organisms/contact/ContactHeroSection'
import ContactLocationsSection from '../components/organisms/contact/ContactLocationsSection'
import {
  contactDirectoryEmails,
  contactDirectoryPhones,
  contactDirectoryUi,
  contactFaqs,
  contactFormConfig,
  contactGallery,
  contactHero,
  contactLocations,
  contactLocationsSection,
} from '../services/contactData'

function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <ContactHeroSection hero={contactHero} />
        <ContactFaqSection faqs={contactFaqs} />
        <ContactFormDirectorySection
          formConfig={contactFormConfig}
          phones={contactDirectoryPhones}
          emails={contactDirectoryEmails}
          directoryUi={contactDirectoryUi}
        />
        <ContactLocationsSection sectionData={contactLocationsSection} locations={contactLocations} />
        <ContactGallerySection gallery={contactGallery} />
      </div>
    </div>
  )
}

export default ContactPage
