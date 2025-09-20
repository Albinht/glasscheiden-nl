import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart">
              PRIVACY BELEID
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <p className="text-lg mb-8">
              Laatst bijgewerkt: 17 mei 2018
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. INTRODUCTIE</h2>
              <p className="mb-4">
                Nedvang, de organisatie achter Glas in &apos;t Bakkie, respecteert uw privacy en zorgt ervoor
                dat uw persoonlijke gegevens vertrouwelijk worden behandeld. Deze privacyverklaring is van
                toepassing op alle diensten van Nedvang en de Glas in &apos;t Bakkie campagne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. WELKE GEGEVENS VERZAMELEN WE</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Naam en contactgegevens (bij contactformulieren)</li>
                <li>E-mailadres (bij nieuwsbrief aanmelding)</li>
                <li>Surfgedrag op de website (via cookies)</li>
                <li>Social media interacties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. WAAROM VERZAMELEN WE GEGEVENS</h2>
              <p className="mb-4">Wij gebruiken uw gegevens voor:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Het beantwoorden van uw vragen</li>
                <li>Het versturen van nieuwsbrieven (met uw toestemming)</li>
                <li>Het verbeteren van onze website en diensten</li>
                <li>Het uitvoeren van de Glas in &apos;t Bakkie campagne</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. COOKIES</h2>
              <p className="mb-4">
                Onze website maakt gebruik van cookies om uw gebruikservaring te verbeteren.
                U kunt cookies uitschakelen in uw browserinstellingen, maar dit kan de functionaliteit
                van de website beperken.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. DELEN VAN GEGEVENS</h2>
              <p className="mb-4">
                Wij delen uw gegevens niet met derden, tenzij dit nodig is voor de uitvoering van
                onze diensten of wettelijk verplicht is. We verkopen nooit uw gegevens aan derden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. BEVEILIGING</h2>
              <p className="mb-4">
                Wij nemen passende technische en organisatorische maatregelen om uw gegevens te
                beschermen tegen verlies, misbruik en ongeautoriseerde toegang.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. UW RECHTEN</h2>
              <p className="mb-4">U heeft het recht om:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Uw gegevens in te zien</li>
                <li>Uw gegevens te corrigeren of te verwijderen</li>
                <li>Bezwaar te maken tegen het gebruik van uw gegevens</li>
                <li>Uw toestemming in te trekken</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. CONTACT</h2>
              <p className="mb-4">
                Voor vragen over dit privacybeleid kunt u contact opnemen met:
              </p>
              <div className="bg-glasbak-grijs p-6 rounded-lg">
                <p><strong>Nedvang</strong></p>
                <p>Postbus 190</p>
                <p>2260 AD Leidschendam</p>
                <p>E-mail: privacy@nedvang.nl</p>
                <p>Telefoon: 070 - 444 04 40</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. WIJZIGINGEN</h2>
              <p>
                Dit privacybeleid kan worden gewijzigd. De meest recente versie vindt u altijd op deze pagina.
                We raden u aan dit privacybeleid regelmatig te raadplegen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}