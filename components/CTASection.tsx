'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Klaar om uw auto de behandeling te geven die het verdient?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Neem contact met ons op voor een gratis offerte. Wij helpen u graag 
              bij het kiezen van de perfecte behandeling voor uw auto.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue" />
                <a href="tel:+31612345678" className="text-gray-300 hover:text-white transition-colors">
                  +31 6 12345678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue" />
                <a href="mailto:info@autodetail-vermeij.nl" className="text-gray-300 hover:text-white transition-colors">
                  info@autodetail-vermeij.nl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue" />
                <span className="text-gray-300">Regio Gouda/Reeuwijk</span>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-charcoal"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Gratis Offerte
            </h3>
            <p className="text-gray-600 mb-6">
              Vul het formulier in en ontvang binnen 24 uur een op maat gemaakte offerte.
            </p>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full btn-primary">
                <Link href="/contact">
                  Offerte aanvragen
                </Link>
              </Button>
              
              <div className="text-center">
                <span className="text-sm text-gray-500">Of bel direct:</span>
                <a 
                  href="tel:+31612345678" 
                  className="block text-lg font-semibold text-blue hover:text-blue/80 transition-colors"
                >
                  +31 6 12345678
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="text-center">
                  <div className="font-semibold text-charcoal">✓</div>
                  <div>Gratis offerte</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-charcoal">✓</div>
                  <div>Geen verplichtingen</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-charcoal">✓</div>
                  <div>Snelle reactie</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
