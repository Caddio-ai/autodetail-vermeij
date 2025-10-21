'use client'

import { motion } from 'framer-motion'
import { Camera, Star, Award } from 'lucide-react'

export function PortfolioHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-6">
            <Camera className="h-8 w-8 text-blue" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            Ons <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Bekijk de resultaten van onze werk. Van lakcorrectie tot keramische coating - 
            elke auto krijgt de aandacht die het verdient.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold text-blue mb-2">500+</div>
              <div className="text-sm text-gray-600">Auto&apos;s behandeld</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold text-blue mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Klantbeoordeling</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold text-blue mb-2">5+</div>
              <div className="text-sm text-gray-600">Jaar ervaring</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
