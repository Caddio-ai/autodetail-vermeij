'use client'

import { motion } from 'framer-motion'
import { HelpCircle, MessageCircle, Phone } from 'lucide-react'

export function FAQHero() {
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
            <HelpCircle className="h-8 w-8 text-blue" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
            Veelgestelde <span className="text-gradient">Vragen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Hier vindt u antwoorden op de meest gestelde vragen over onze 
            autodetailing diensten. Staat uw vraag er niet bij? Neem gerust contact op.
          </p>
          
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <MessageCircle className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Contactformulier</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stel uw vraag via ons contactformulier
              </p>
              <a 
                href="/contact" 
                className="text-blue hover:text-blue/80 font-medium transition-colors"
              >
                Contact opnemen →
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <Phone className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Direct bellen</h3>
              <p className="text-sm text-gray-600 mb-4">
                Voor directe hulp of vragen
              </p>
              <a 
                href="tel:+31612345678" 
                className="text-blue hover:text-blue/80 font-medium transition-colors"
              >
                +31 6 12345678 →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
