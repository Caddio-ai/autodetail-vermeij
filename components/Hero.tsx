'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Car, Star, Shield, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background-light overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwQTg0RkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>
      
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-background-light/30" />
      
      <div className="relative z-10 container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/30"
            >
              <Star className="h-4 w-4" />
              <span>Premium Autodetailing</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight tracking-tight"
            >
              Uw auto verdient de{' '}
              <span className="text-gradient">beste zorg</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Professionele autodetailing in Regio Gouda/Reeuwijk. 
              Lakcorrectie, keramische coating en premium interieur/exterieur behandeling.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link href="/contact">
                  Gratis offerte aanvragen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="/portfolio">
                  Bekijk portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <Car className="h-32 w-32 text-primary/60" />
              </div>
              
              {/* Premium Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-100"
              >
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Premium Kwaliteit</div>
                  <div className="text-xs text-gray-600">5 jaar garantie</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-gray-100"
              >
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Snelle Service</div>
                  <div className="text-xs text-gray-600">2-8 uur</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
