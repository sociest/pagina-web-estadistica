import { useState } from 'react'
import PropTypes from 'prop-types'
import ContactFaqItem from '../../molecules/contact/ContactFaqItem'
import ContactSectionHeader from '../../molecules/contact/ContactSectionHeader'

function ContactFaqSection({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section className="relative z-30 -mt-36 mb-16 px-4 md:-mt-44 md:mb-20 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.75rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.16)] md:p-10">
        <ContactSectionHeader
          tag="Consultas rapidas"
          title="Respuestas inmediatas"
          sub="La tarjeta flota sobre el hero para que la atencion rapida quede visible desde el primer pantallazo."
        />

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <ContactFaqItem
              key={item.question}
              item={item}
              isOpen={activeFaq === index}
              onToggle={() => setActiveFaq((prev) => (prev === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

ContactFaqSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default ContactFaqSection
