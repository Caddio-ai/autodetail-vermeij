'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Star, Award } from 'lucide-react'

const usps = [
  {
    icon: Shield,
    title: 'Premium Kwaliteit',
    description: 'Alleen de beste producten en technieken voor uw auto',
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Efficiënte behandeling zonder concessies aan kwaliteit',
  },
  {
    icon: Star,
    title: 'Ervaren Team',
    description: 'Jarenlange ervaring in premium autodetailing',
  },
  {
    icon: Award,
    title: 'Garantie',
    description: 'Uitgebreide garantie op al onze behandelingen',
  },
]

export function USPSection() {
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
            Waarom kiezen voor Autodetail Vermeij?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wij bieden premium autodetailing met aandacht voor detail en duurzaamheid
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-6 group-hover:bg-blue/20 transition-colors duration-300">
                <usp.icon className="h-8 w-8 text-blue" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                {usp.title}
              </h3>
              <p className="text-gray-600">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
