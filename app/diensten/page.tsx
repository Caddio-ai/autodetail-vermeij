import { generateMetadata } from '@/lib/seo'
import { ServicesHero } from '@/components/ServicesHero'
import { ServicesList } from '@/components/ServicesList'
import { PackagesSection } from '@/components/PackagesSection'
import { CTASection } from '@/components/CTASection'

export const metadata = generateMetadata(
  'Diensten',
  'Professionele autodetailing diensten: exterieur, interieur, lakcorrectie, keramische coating en meer. Premium kwaliteit in Regio Gouda/Reeuwijk.'
)

export default function DienstenPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <PackagesSection />
      <CTASection />
    </>
  )
}
