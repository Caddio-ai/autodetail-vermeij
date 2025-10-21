import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue" />
              <span className="text-xl font-heading font-semibold">
                Autodetail Vermeij
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium autodetailing in Regio Gouda/Reeuwijk. Professionele service 
              voor de perfecte finish van uw auto.
            </p>
            <div className="flex space-x-4">
              {/* Social media links can be added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Snelle links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten" className="text-gray-300 hover:text-blue transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-gray-300 hover:text-blue transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten#exterieur" className="text-gray-300 hover:text-blue transition-colors">
                  Exterieur Detailing
                </Link>
              </li>
              <li>
                <Link href="/diensten#interieur" className="text-gray-300 hover:text-blue transition-colors">
                  Interieur Detailing
                </Link>
              </li>
              <li>
                <Link href="/diensten#lakcorrectie" className="text-gray-300 hover:text-blue transition-colors">
                  Lakcorrectie
                </Link>
              </li>
              <li>
                <Link href="/diensten#keramische-coating" className="text-gray-300 hover:text-blue transition-colors">
                  Keramische Coating
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue" />
                <a href="tel:+31612345678" className="text-gray-300 hover:text-blue transition-colors">
                  +31 6 12345678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue" />
                <a href="mailto:info@autodetail-vermeij.nl" className="text-gray-300 hover:text-blue transition-colors">
                  info@autodetail-vermeij.nl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue mt-0.5" />
                <span className="text-gray-300">
                  Reeuwijk<br />
                  Regio Gouda
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-blue mt-0.5" />
                <div className="text-gray-300">
                  <div>Ma - Vr: 09:00 - 18:00</div>
                  <div>Za: 09:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Autodetail Vermeij. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="text-gray-400 hover:text-blue transition-colors">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
