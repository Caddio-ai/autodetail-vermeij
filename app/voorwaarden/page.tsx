import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata(
  'Algemene Voorwaarden',
  'Algemene voorwaarden van Autodetail Vermeij. Lees onze voorwaarden voor het gebruik van onze diensten.'
)

export default function VoorwaardenPage() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-charcoal mb-8">
            Algemene Voorwaarden
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL')}
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              1. Definities
            </h2>
            <p className="text-gray-700 mb-6">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Autodetail Vermeij:</strong> de dienstverlener</li>
              <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die diensten afneemt</li>
              <li><strong>Diensten:</strong> alle autodetailing diensten die door Autodetail Vermeij worden verleend</li>
            </ul>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              2. Toepasselijkheid
            </h2>
            <p className="text-gray-700 mb-6">
              Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen 
              Autodetail Vermeij en de klant, tenzij uitdrukkelijk anders overeengekomen.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              3. Offertes en Prijzen
            </h2>
            <p className="text-gray-700 mb-4">
              Offertes zijn vrijblijvend en geldig voor 30 dagen, tenzij anders vermeld. 
              Prijzen zijn inclusief BTW, tenzij anders vermeld.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              4. Betaling
            </h2>
            <p className="text-gray-700 mb-6">
              Betaling dient plaats te vinden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              5. Garantie
            </h2>
            <p className="text-gray-700 mb-6">
              Autodetail Vermeij biedt garantie op uitgevoerde werkzaamheden volgens de 
              specificaties in de offerte. Garantie is beperkt tot de uitgevoerde werkzaamheden.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              6. Aansprakelijkheid
            </h2>
            <p className="text-gray-700 mb-6">
              De aansprakelijkheid van Autodetail Vermeij is beperkt tot de waarde van de 
              uitgevoerde werkzaamheden, tenzij sprake is van opzet of grove schuld.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              7. Klachten
            </h2>
            <p className="text-gray-700 mb-6">
              Klachten dienen binnen 7 dagen na oplevering schriftelijk te worden ingediend 
              bij Autodetail Vermeij.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              8. Toepasselijk Recht
            </h2>
            <p className="text-gray-700 mb-6">
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden 
              voorgelegd aan de bevoegde rechter in Nederland.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              9. Contact
            </h2>
            <p className="text-gray-700 mb-6">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>Autodetail Vermeij</strong><br />
                E-mail: info@autodetail-vermeij.nl<br />
                Telefoon: +31 6 12345678
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
