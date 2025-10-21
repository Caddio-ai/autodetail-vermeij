'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Jan de Vries',
    location: 'Gouda',
    rating: 5,
    text: 'Fantastische service! Mijn BMW ziet er weer uit als nieuw. Zeer professioneel en aandacht voor detail.',
    car: 'BMW 3 Serie',
  },
  {
    id: 2,
    name: 'Marieke van der Berg',
    location: 'Reeuwijk',
    rating: 5,
    text: 'De keramische coating is geweldig. Na 6 maanden ziet mijn auto er nog steeds perfect uit. Aanrader!',
    car: 'Audi A4',
  },
  {
    id: 3,
    name: 'Peter Jansen',
    location: 'Waddinxveen',
    rating: 5,
    text: 'Zeer tevreden over de lakcorrectie. De krassen zijn volledig weg en de glans is perfect.',
    car: 'Mercedes C-Klasse',
  },
  {
    id: 4,
    name: 'Lisa Bakker',
    location: 'Bodegraven',
    rating: 5,
    text: 'Professionele service van begin tot eind. Duidelijke communicatie en uitstekend resultaat.',
    car: 'Volkswagen Golf',
  },
  {
    id: 5,
    name: 'Rob van Dijk',
    location: 'Alphen aan den Rijn',
    rating: 5,
    text: 'Mijn interieur ziet er weer als nieuw uit. Zeer grondig werk en vriendelijke service.',
    car: 'BMW X5',
  },
  {
    id: 6,
    name: 'Sandra Mulder',
    location: 'Gouda',
    rating: 5,
    text: 'Snelle service zonder concessies aan kwaliteit. Mijn auto glanst weer als nooit tevoren.',
    car: 'Audi Q5',
  },
]

export function ReviewsSection() {
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
            Wat zeggen onze klanten?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lees de ervaringen van tevreden klanten uit de regio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue/20 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-charcoal">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
                <div className="text-sm text-blue font-medium">{review.car}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-charcoal">4.9/5</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">Gebaseerd op 50+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
