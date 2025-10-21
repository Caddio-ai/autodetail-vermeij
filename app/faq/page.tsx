import { generateMetadata, generateFAQSchema } from '@/lib/seo'
import { FAQHero } from '@/components/FAQHero'
import { FAQList } from '@/components/FAQList'
import { siteConfig } from '@/config/site'

export const metadata = generateMetadata(
  'Veelgestelde Vragen',
  'Antwoorden op veelgestelde vragen over autodetailing, lakcorrectie, keramische coating en onze diensten. Autodetail Vermeij FAQ.'
)

export default function FAQPage() {
  const faqSchema = generateFAQSchema(siteConfig.faq)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQHero />
      <FAQList />
    </>
  )
}
