'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Car, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: 1,
    title: 'Contact & Advies',
    description: 'Neem contact met ons op voor een gratis adviesgesprek. Wij bespreken uw wensen en maken een passend plan.',
    icon: MessageCircle,
  },
  {
    step: 2,
    title: 'Afspraak Plannen',
    description: 'We plannen een afspraak die past bij uw agenda. Flexibele tijden en locaties mogelijk.',
    icon: Calendar,
  },
  {
    step: 3,
    title: 'Professionele Behandeling',
    description: 'Ons team voert de behandeling uit met premium producten en de nieuwste technieken.',
    icon: Car,
  },
  {
    step: 4,
    title: 'Kwaliteitscontrole & Oplevering',
    description: 'Elke behandeling wordt gecontroleerd voordat uw auto wordt opgeleverd. Tevredenheid gegarandeerd.',
    icon: CheckCircle,
  },
]

export function ProcessSection() {
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
            Ons Werkproces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van eerste contact tot perfecte oplevering - zo zorgen wij voor het beste resultaat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-blue/20 z-0" />
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-6 mx-auto">
                  <step.icon className="h-8 w-8 text-blue" />
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue text-white rounded-full text-sm font-bold mb-4">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Klaar om te beginnen?
            </h3>
            <p className="text-gray-600 mb-6">
              Neem contact met ons op voor een gratis adviesgesprek en ontdek 
              wat wij voor uw auto kunnen betekenen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white rounded-xl font-medium hover:bg-blue/90 transition-colors duration-200"
              >
                Gratis advies aanvragen
              </a>
              <a 
                href="tel:+31612345678" 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue text-blue rounded-xl font-medium hover:bg-blue/10 transition-colors duration-200"
              >
                Direct bellen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
