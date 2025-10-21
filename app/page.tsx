import { Hero } from '@/components/Hero'
import { USPSection } from '@/components/USPSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { BeforeAfterGallery } from '@/components/BeforeAfterGallery'
import { ReviewsSection } from '@/components/ReviewsSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPSection />
      <ServicesGrid />
      <BeforeAfterGallery />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
