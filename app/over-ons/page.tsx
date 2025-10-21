import { generateMetadata } from '@/lib/seo'
import { AboutHero } from '@/components/AboutHero'
import { TeamSection } from '@/components/TeamSection'
import { ProcessSection } from '@/components/ProcessSection'

export const metadata = generateMetadata(
  'Over Ons',
  'Leer meer over Autodetail Vermeij. Ons ervaren team en professionele werkwijze voor premium autodetailing in Regio Gouda/Reeuwijk.'
)

export default function OverOnsPage() {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <ProcessSection />
    </>
  )
}
