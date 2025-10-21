'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const beforeAfterImages = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&sat=150&contrast=120',
    title: 'BMW 3 Serie - Lakcorrectie',
    description: 'Professionele lakcorrectie met 2-stappen proces',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop&sat=150&contrast=120',
    title: 'Audi A4 - Keramische Coating',
    description: '5-jarige keramische coating met premium finish',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop&sat=150&contrast=120',
    title: 'Mercedes C-Klasse - Complete Detailing',
    description: 'Volledige interieur en exterieur behandeling',
  },
]

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
    setSliderPosition(50)
  }

  const currentImage = beforeAfterImages[currentIndex]

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Voor & Na Resultaten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zie het verschil dat professionele autodetailing maakt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Before/After Slider */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="relative w-full h-full">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <Image
                    src={currentImage.before}
                    alt={`${currentImage.title} - Voor`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* After Image with Slider */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={currentImage.after}
                    alt={`${currentImage.title} - Na`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-blue shadow-lg cursor-ew-resize z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const handleMouseMove = (e: MouseEvent) => {
                      const rect = e.currentTarget?.getBoundingClientRect()
                      if (rect) {
                        const x = e.clientX - rect.left
                        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
                        setSliderPosition(percentage)
                      }
                    }
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove)
                      document.removeEventListener('mouseup', handleMouseUp)
                    }
                    
                    document.addEventListener('mousemove', handleMouseMove)
                    document.addEventListener('mouseup', handleMouseUp)
                  }}
                />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Voor
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Na
                </div>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {currentImage.description}
              </p>
              
              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Vorige</span>
                </Button>
                
                <div className="flex space-x-2">
                  {beforeAfterImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="flex items-center space-x-2"
                >
                  <span>Volgende</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
