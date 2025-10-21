import { generateMetadata } from '@/lib/seo'
import { PortfolioHero } from '@/components/PortfolioHero'
import { PortfolioGrid } from '@/components/PortfolioGrid'

export const metadata = generateMetadata(
  'Portfolio',
  'Bekijk onze portfolio met voor en na foto\'s van autodetailing projecten. Lakcorrectie, keramische coating en meer. Autodetail Vermeij portfolio.'
)

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  )
}
