'use client'

import { motion } from 'framer-motion'
import { Car, Sparkles, Shield, Droplets } from 'lucide-react'

const serviceIcons = [
  { icon: Car, label: 'Exterieur' },
  { icon: Droplets, label: 'Interieur' },
  { icon: Sparkles, label: 'Lakcorrectie' },
  { icon: Shield, label: 'Keramische Coating' },
]

export function ServicesHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            Onze <span className="text-gradient">Diensten</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Van basis wasbeurt tot complete keramische coating - wij bieden 
            professionele autodetailing voor elke behoefte en budget.
          </p>
          
          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceIcons.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-3">
                  <service.icon className="h-8 w-8 text-blue" />
                </div>
                <div className="text-sm font-medium text-gray-700">{service.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
