'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ServiceCard'
import { Car, Droplets, Sparkles, Shield, Wrench, Eye } from 'lucide-react'
import { siteConfig } from '@/config/site'

const serviceCategories = [
  {
    id: 'exterieur',
    title: 'Exterieur Detailing',
    description: 'Grondige reiniging en bescherming van de buitenkant van uw auto',
    icon: <Car className="h-6 w-6 text-blue" />,
    services: siteConfig.services.exterior,
  },
  {
    id: 'interieur',
    title: 'Interieur Detailing',
    description: 'Complete reiniging en behandeling van het interieur',
    icon: <Droplets className="h-6 w-6 text-blue" />,
    services: siteConfig.services.interior,
  },
  {
    id: 'lakcorrectie',
    title: 'Lakcorrectie',
    description: 'Professionele correctie van lakbeschadigingen en swirl marks',
    icon: <Sparkles className="h-6 w-6 text-blue" />,
    services: siteConfig.services.paintCorrection,
  },
  {
    id: 'keramische-coating',
    title: 'Keramische Coating',
    description: 'Langdurige bescherming met premium keramische coating',
    icon: <Shield className="h-6 w-6 text-blue" />,
    services: siteConfig.services.ceramic,
  },
  {
    id: 'velgen',
    title: 'Velgen & Ruiten',
    description: 'Specialistische behandeling van velgen en ruiten',
    icon: <Wrench className="h-6 w-6 text-blue" />,
    services: [
      {
        name: 'Velgen reiniging',
        description: 'Grondige reiniging van velgen en banden',
        price: 'Vanaf €25',
      },
      {
        name: 'Velgen coating',
        description: 'Bescherming van velgen met keramische coating',
        price: 'Vanaf €50',
      },
      {
        name: 'Ruiten behandeling',
        description: 'Reiniging en bescherming van alle ruiten',
        price: 'Vanaf €20',
      },
    ],
  },
  {
    id: 'inspectie',
    title: 'Auto Inspectie',
    description: 'Professionele inspectie en advies voor uw auto',
    icon: <Eye className="h-6 w-6 text-blue" />,
    services: [
      {
        name: 'Basis inspectie',
        description: 'Visuele inspectie van lak en interieur',
        price: 'Gratis',
      },
      {
        name: 'Uitgebreide inspectie',
        description: 'Gedetailleerde inspectie met rapport',
        price: 'Vanaf €35',
      },
      {
        name: 'Advies consult',
        description: 'Persoonlijk advies over beste behandeling',
        price: 'Vanaf €25',
      },
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue/10 rounded-xl">
                  {category.icon}
                </div>
                <h2 id={category.id} className="text-3xl font-heading font-bold text-charcoal">
                  {category.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.name}
                    description={service.description}
                    price={service.price}
                    icon={category.icon}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
