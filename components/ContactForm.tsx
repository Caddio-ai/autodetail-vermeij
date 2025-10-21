'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    message: '',
    honeypot: '', // Anti-spam field
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/bedankt')
      } else {
        throw new Error('Er is een fout opgetreden')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Er is een fout opgetreden. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-heading font-bold text-charcoal">
            Gratis Offerte Aanvragen
          </CardTitle>
          <CardDescription>
            Vul het formulier in en ontvang binnen 24 uur een op maat gemaakte offerte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Naam *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Uw volledige naam"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="uw@email.nl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefoonnummer</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+31 6 12345678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carMake">Automerk</Label>
                <Input
                  id="carMake"
                  name="carMake"
                  type="text"
                  value={formData.carMake}
                  onChange={handleChange}
                  placeholder="BMW, Audi, Mercedes, etc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carModel">Automodel</Label>
              <Input
                id="carModel"
                name="carModel"
                type="text"
                value={formData.carModel}
                onChange={handleChange}
                placeholder="3 Serie, A4, C-Klasse, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Bericht *</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Vertel ons over uw wensen: welke behandeling heeft uw auto nodig? Heeft u specifieke vragen of opmerkingen?"
                rows={5}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verzenden...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Offerte aanvragen
                </>
              )}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Door dit formulier in te vullen gaat u akkoord met onze{' '}
              <a href="/privacy" className="text-blue hover:underline">
                privacyverklaring
              </a>
              .
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
