'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function PackagesSection() {
  const packages = [
    siteConfig.packages.basic,
    siteConfig.packages.pro,
    siteConfig.packages.ultimate,
  ]

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
            Complete Pakketten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kies het perfecte pakket voor uw auto. Alle pakketten zijn inclusief 
            premium producten en professionele service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${index === 1 ? 'md:-mt-4' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue text-white px-4 py-1">
                    <Star className="h-4 w-4 mr-1" />
                    Meest populair
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                index === 1 ? 'border-blue shadow-lg' : 'hover:-translate-y-1'
              }`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading font-bold text-charcoal">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-blue mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      index === 1 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                    size="lg"
                  >
                    <Link href="/contact">
                      Pakket aanvragen
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
          <p className="text-gray-600 mb-4">
            Alle pakketten zijn inclusief premium producten en professionele service
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Premium producten</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Professionele service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Garantie</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Flexibele planning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
