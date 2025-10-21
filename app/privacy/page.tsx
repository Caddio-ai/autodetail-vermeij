import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata(
  'Privacyverklaring',
  'Privacyverklaring van Autodetail Vermeij. Lees hoe wij omgaan met uw persoonsgegevens.'
)

export default function PrivacyPage() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-charcoal mb-8">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL')}
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              1. Inleiding
            </h2>
            <p className="text-gray-700 mb-6">
              Autodetail Vermeij respecteert uw privacy en is verantwoordelijk voor de verwerking 
              van persoonsgegevens zoals beschreven in deze privacyverklaring.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              2. Welke gegevens verzamelen wij?
            </h2>
            <p className="text-gray-700 mb-4">
              Wij verzamelen de volgende persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
              <li>Informatie over uw auto (merk, model, kenteken)</li>
              <li>Communicatiegegevens (berichten via contactformulier)</li>
              <li>Website gebruiksinformatie (cookies, IP-adres)</li>
            </ul>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              3. Waarom verzamelen wij deze gegevens?
            </h2>
            <p className="text-gray-700 mb-4">
              Wij gebruiken uw persoonsgegevens voor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Het verstrekken van onze diensten</li>
              <li>Het beantwoorden van uw vragen</li>
              <li>Het maken van offertes</li>
              <li>Het verbeteren van onze website en diensten</li>
            </ul>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              4. Hoe lang bewaren wij uw gegevens?
            </h2>
            <p className="text-gray-700 mb-6">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden 
              waarvoor zij zijn verzameld of zoals wettelijk verplicht.
            </p>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              5. Uw rechten
            </h2>
            <p className="text-gray-700 mb-4">
              U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Recht op inzage</li>
              <li>Recht op rectificatie</li>
              <li>Recht op verwijdering</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op gegevensoverdraagbaarheid</li>
            </ul>
            
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              6. Contact
            </h2>
            <p className="text-gray-700 mb-6">
              Voor vragen over deze privacyverklaring kunt u contact met ons opnemen:
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
