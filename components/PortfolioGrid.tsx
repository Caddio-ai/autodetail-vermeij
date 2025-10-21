'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'BMW 3 Serie - Lakcorrectie',
    description: 'Professionele lakcorrectie met 2-stappen proces. Alle swirl marks en lichte krassen zijn volledig weggewerkt.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Lakcorrectie 2-stap', 'Clay bar behandeling', 'Premium wax'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Audi A4 - Keramische Coating',
    description: '5-jarige keramische coating met premium finish. De auto heeft nu een perfecte glans en langdurige bescherming.',
    before: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Keramische coating 5 jaar', 'Lakcorrectie', 'Velgen coating'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Mercedes C-Klasse - Complete Detailing',
    description: 'Volledige interieur en exterieur behandeling. Van grondige reiniging tot premium bescherming.',
    before: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Complete detailing', 'Interieur behandeling', 'Exterieur bescherming'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Volkswagen Golf - Basis Pakket',
    description: 'Basis detailing pakket met handmatige wasbeurt, clay bar behandeling en wax.',
    before: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Handmatige wasbeurt', 'Clay bar', 'Wax behandeling'],
    year: '2024',
  },
  {
    id: 5,
    title: 'BMW X5 - Interieur Detailing',
    description: 'Grondige interieur reiniging met leer behandeling en bescherming.',
    before: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Interieur reiniging', 'Leer behandeling', 'Stofzuigen'],
    year: '2024',
  },
  {
    id: 6,
    title: 'Audi Q5 - Velgen & Ruiten',
    description: 'Specialistische behandeling van velgen en ruiten met premium producten.',
    before: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&sat=150&contrast=120',
    services: ['Velgen reiniging', 'Velgen coating', 'Ruiten behandeling'],
    year: '2024',
  },
]

export function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(prev => (prev + 1) % 2)
    }
  }

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(prev => (prev - 1 + 2) % 2)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <span className="text-sm font-medium text-charcoal">Bekijk details</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.services.slice(0, 2).map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-blue/10 text-blue text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {item.services.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{item.services.length - 2} meer
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={currentImageIndex === 0 ? selectedItem.before : selectedItem.after}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                    {currentImageIndex === 0 ? 'Voor' : 'Na'}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevImage}
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextImage}
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                  {selectedItem.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedItem.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Uitgevoerde diensten:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue/10 text-blue text-sm rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Jaar: {selectedItem.year}</span>
                    <Button onClick={closeModal} className="btn-primary">
                      Sluiten
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
