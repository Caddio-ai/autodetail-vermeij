'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactHero() {
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
            Neem <span className="text-gradient">Contact</span> Op
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Klaar om uw auto de behandeling te geven die het verdient? 
            Neem contact met ons op voor een gratis offerte.
          </p>
          
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <Phone className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Bel ons</h3>
              <a href="tel:+31612345678" className="text-blue hover:text-blue/80 transition-colors">
                +31 6 12345678
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <Mail className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">E-mail</h3>
              <a href="mailto:info@autodetail-vermeij.nl" className="text-blue hover:text-blue/80 transition-colors text-sm">
                info@autodetail-vermeij.nl
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <MapPin className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Locatie</h3>
              <p className="text-gray-600 text-sm">Regio Gouda/Reeuwijk</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue/10 rounded-xl mb-4">
                <Clock className="h-6 w-6 text-blue" />
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-2">Openingstijden</h3>
              <div className="text-gray-600 text-sm">
                <div>Ma-Vr: 09:00-18:00</div>
                <div>Za: 09:00-17:00</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
