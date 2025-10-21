'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServiceCard } from '@/components/ServiceCard'
import { Car, Sparkles, Shield, Droplets } from 'lucide-react'
import { siteConfig } from '@/config/site'

const featuredServices = [
  {
    title: 'Exterieur Detailing',
    description: 'Grondige reiniging en bescherming van uw auto',
    price: 'Vanaf €35',
    icon: <Car className="h-6 w-6 text-blue" />,
    features: ['Handmatige wasbeurt', 'Clay bar behandeling', 'Wax behandeling'],
  },
  {
    title: 'Lakcorrectie',
    description: 'Professionele correctie van lakbeschadigingen',
    price: 'Vanaf €150',
    icon: <Sparkles className="h-6 w-6 text-blue" />,
    features: ['1-3 stappen correctie', 'Premium producten', 'Garantie'],
  },
  {
    title: 'Keramische Coating',
    description: 'Langdurige bescherming met keramische coating',
    price: 'Vanaf €200',
    icon: <Shield className="h-6 w-6 text-blue" />,
    features: ['1-5 jaar garantie', 'UV bescherming', 'Hydrofobe eigenschappen'],
  },
  {
    title: 'Interieur Detailing',
    description: 'Complete interieur reiniging en behandeling',
    price: 'Vanaf €45',
    icon: <Droplets className="h-6 w-6 text-blue" />,
    features: ['Leer behandeling', 'Stofzuigen', 'Interieur bescherming'],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Van basis wasbeurt tot complete keramische coating - wij hebben de perfecte service voor uw auto
          </p>
          <Link
            href="/diensten"
            className="inline-flex items-center text-blue hover:text-blue/80 font-medium transition-colors"
          >
            Bekijk alle diensten
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
