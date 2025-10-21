'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Kwaliteit',
    description: 'Alleen de beste producten en technieken',
  },
  {
    icon: Target,
    title: 'Precisie',
    description: 'Aandacht voor elk detail',
  },
  {
    icon: Heart,
    title: 'Passie',
    description: 'Liefde voor perfecte autodetailing',
  },
  {
    icon: Users,
    title: 'Service',
    description: 'Persoonlijke aandacht voor elke klant',
  },
]

export function AboutHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
              Over <span className="text-gradient">Autodetail Vermeij</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Met meer dan 5 jaar ervaring in premium autodetailing zijn wij gespecialiseerd 
              in het geven van uw auto de behandeling die het verdient. Van basis wasbeurt 
              tot complete keramische coating - wij zorgen voor perfecte resultaten.
            </p>
            <p className="text-gray-600 mb-8">
              Ons team van ervaren professionals werkt met de nieuwste technieken en 
              premium producten om uw auto in perfecte staat te brengen en te houden.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue mb-2">500+</div>
                <div className="text-sm text-gray-600">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue mb-2">5+</div>
                <div className="text-sm text-gray-600">Jaar ervaring</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <Users className="h-32 w-32 text-blue/20" />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-heading font-bold text-charcoal text-center mb-12">
            Onze Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-blue" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
