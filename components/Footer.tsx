import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark text-light border-t border-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-highlight" />
              <span className="text-xl font-heading font-semibold text-light">
                Autodetail Vermeij
              </span>
            </div>
            <p className="text-accent text-sm leading-relaxed">
              Premium autodetailing in Regio Gouda/Reeuwijk. Professionele service 
              voor de perfecte finish van uw auto.
            </p>
            <div className="flex space-x-4">
              {/* Social media links can be added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-light">Snelle links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten" className="text-accent hover:text-highlight transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-accent hover:text-highlight transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-accent hover:text-highlight transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-accent hover:text-highlight transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-light">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten#exterieur" className="text-accent hover:text-highlight transition-colors">
                  Exterieur Detailing
                </Link>
              </li>
              <li>
                <Link href="/diensten#interieur" className="text-accent hover:text-highlight transition-colors">
                  Interieur Detailing
                </Link>
              </li>
              <li>
                <Link href="/diensten#lakcorrectie" className="text-accent hover:text-highlight transition-colors">
                  Lakcorrectie
                </Link>
              </li>
              <li>
                <Link href="/diensten#keramische-coating" className="text-accent hover:text-highlight transition-colors">
                  Keramische Coating
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-light">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-highlight" />
                <a href="tel:+31612345678" className="text-accent hover:text-highlight transition-colors">
                  +31 6 12345678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-highlight" />
                <a href="mailto:info@autodetail-vermeij.nl" className="text-accent hover:text-highlight transition-colors">
                  info@autodetail-vermeij.nl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-highlight mt-0.5" />
                <span className="text-accent">
                  Reeuwijk<br />
                  Regio Gouda
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-highlight mt-0.5" />
                <div className="text-accent">
                  <div>Ma - Vr: 09:00 - 18:00</div>
                  <div>Za: 09:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent">
              © {new Date().getFullYear()} Autodetail Vermeij. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-accent hover:text-highlight transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="text-accent hover:text-highlight transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
