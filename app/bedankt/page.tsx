import { generateMetadata } from '@/lib/seo'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react'

export const metadata = generateMetadata(
  'Bedankt',
  'Bedankt voor uw offerte aanvraag. Wij nemen zo snel mogelijk contact met u op.'
)

export default function BedanktPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6"
            >
              Bedankt voor uw aanvraag!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8"
            >
              Uw offerte aanvraag is succesvol verzonden. Wij nemen binnen 24 uur 
              contact met u op om uw wensen door te spreken en een passende offerte te maken.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 mb-8"
            >
              <h3 className="font-heading font-semibold text-charcoal mb-4">
                Wat gebeurt er nu?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue">1</span>
                  </div>
                  <span className="text-gray-700">Wij beoordelen uw aanvraag</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue">2</span>
                  </div>
                  <span className="text-gray-700">Wij nemen contact met u op</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue">3</span>
                  </div>
                  <span className="text-gray-700">Wij maken een passende offerte</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link href="/">
                    Terug naar home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/diensten">
                    Bekijk onze diensten
                  </Link>
                </Button>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Heeft u direct vragen? Neem contact met ons op:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a 
                    href="tel:+31612345678" 
                    className="flex items-center justify-center space-x-2 text-blue hover:text-blue/80 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+31 6 12345678</span>
                  </a>
                  <a 
                    href="mailto:info@autodetail-vermeij.nl" 
                    className="flex items-center justify-center space-x-2 text-blue hover:text-blue/80 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@autodetail-vermeij.nl</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
