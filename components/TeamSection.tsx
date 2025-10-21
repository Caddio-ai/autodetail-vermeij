'use client'

import { motion } from 'framer-motion'
import { Users, Award, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dex Vermeij',
    role: 'Eigenaar & Hoofd Detailing Specialist',
    experience: '8+ jaar ervaring',
    specialties: ['Lakcorrectie', 'Keramische Coating', 'Premium Detailing'],
    description: 'Dex is de oprichter van Autodetail Vermeij en heeft jarenlange ervaring in premium autodetailing.',
  },
  {
    name: 'Lisa van der Berg',
    role: 'Interieur Specialist',
    experience: '5+ jaar ervaring',
    specialties: ['Interieur Detailing', 'Leer Behandeling', 'Stofzuigen'],
    description: 'Lisa is gespecialiseerd in interieur detailing en zorgt ervoor dat uw auto van binnen perfect is.',
  },
  {
    name: 'Mark Jansen',
    role: 'Exterieur Specialist',
    experience: '6+ jaar ervaring',
    specialties: ['Exterieur Detailing', 'Velgen Behandeling', 'Wax & Coating'],
    description: 'Mark is expert in exterieur detailing en zorgt voor de perfecte glans van uw auto.',
  },
]

export function TeamSection() {
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
            Ons Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontmoet de ervaren professionals die uw auto de beste behandeling geven
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Users className="h-24 w-24 text-blue/20" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                  {member.name}
                </h3>
                <p className="text-blue font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                
                <p className="text-gray-700 mb-4">{member.description}</p>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Specialiteiten:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-2 py-1 bg-blue/10 text-blue text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
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
          className="mt-12 text-center bg-gray-50 rounded-2xl p-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue/10 rounded-2xl mb-6">
            <Award className="h-8 w-8 text-blue" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
            Gecertificeerde Professionals
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ons team bestaat uit gecertificeerde professionals met jarenlange ervaring 
            in premium autodetailing. Wij blijven altijd op de hoogte van de nieuwste 
            technieken en producten.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
