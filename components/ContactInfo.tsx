'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Award } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
          Contact Informatie
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-1">Telefoon</h4>
              <a href="tel:+31612345678" className="text-blue hover:text-blue/80 transition-colors">
                +31 6 12345678
              </a>
              <p className="text-sm text-gray-600 mt-1">
                Bel ons voor directe hulp of een afspraak
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-1">E-mail</h4>
              <a href="mailto:info@autodetail-vermeij.nl" className="text-blue hover:text-blue/80 transition-colors">
                info@autodetail-vermeij.nl
              </a>
              <p className="text-sm text-gray-600 mt-1">
                Stuur ons een e-mail voor vragen of offertes
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-1">Locatie</h4>
              <p className="text-gray-700">Regio Gouda/Reeuwijk</p>
              <p className="text-sm text-gray-600 mt-1">
                Wij bieden ook mobiele service in de regio
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal mb-1">Openingstijden</h4>
              <div className="text-gray-700">
                <div>Maandag - Vrijdag: 09:00 - 18:00</div>
                <div>Zaterdag: 09:00 - 17:00</div>
                <div>Zondag: Gesloten</div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Afspraken buiten openingstijden mogelijk
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
          Waarom kiezen voor ons?
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal">Premium Kwaliteit</h4>
              <p className="text-sm text-gray-600">Alleen de beste producten en technieken</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal">Persoonlijke Service</h4>
              <p className="text-sm text-gray-600">Advies op maat voor uw auto</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal">Flexibele Planning</h4>
              <p className="text-sm text-gray-600">Afspraken die passen bij uw agenda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center">
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Google Maps</p>
            <p className="text-sm text-gray-500">Reeuwijk, Nederland</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Wij zijn gevestigd in Reeuwijk en bieden service in de hele regio Gouda
        </p>
      </div>
    </motion.div>
  )
}
