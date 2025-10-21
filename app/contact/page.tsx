import { generateMetadata } from '@/lib/seo'
import { ContactHero } from '@/components/ContactHero'
import { ContactForm } from '@/components/ContactForm'
import { ContactInfo } from '@/components/ContactInfo'

export const metadata = generateMetadata(
  'Contact',
  'Neem contact op met Autodetail Vermeij voor een gratis offerte. Professionele autodetailing in Regio Gouda/Reeuwijk. Bel +31 6 12345678.'
)

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
