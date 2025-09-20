import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function OverPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart">
              OVER GLAS IN &apos;T BAKKIE
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <p className="text-xl mb-8 font-semibold">
              Al 40 jaar zorgen we samen voor een schonere wereld door glas te recyclen.
              Glas in &apos;t Bakkie is de campagne van Nedvang die glasrecycling promoot in heel Nederland.
            </p>

            <h2 className="text-2xl font-bold mb-4 uppercase">Onze Missie</h2>
            <p className="mb-6">
              Wij geloven dat glasrecycling de normaalste zaak van de wereld moet zijn. Elke fles en pot die in de glasbak belandt,
              wordt zonder kwaliteitsverlies gerecycled tot nieuw glas. Dat is niet alleen goed voor het milieu, maar ook voor de toekomst
              van onze kinderen.
            </p>

            <div className="bg-glasbak-grijs p-8 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4 uppercase">40 Jaar Glasbak in Cijfers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-glasbak-geel">1978</p>
                  <p className="text-sm">Eerste glasbak</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-glasbak-geel">25.000+</p>
                  <p className="text-sm">Glasbakken in NL</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-glasbak-geel">73%</p>
                  <p className="text-sm">Recyclingpercentage</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-glasbak-geel">♾️</p>
                  <p className="text-sm">Keer recyclebaar</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">De Historie</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold">1978 - De Eerste Glasbak</h3>
                <p>In &apos;s-Hertogenbosch wordt de eerste gemeentelijke glasbak geplaatst. Een revolutie in afvalscheiding!</p>
              </div>
              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold">Jaren &apos;80 - Landelijke Uitrol</h3>
                <p>De glasbak wordt een vertrouwd beeld in het Nederlandse straatbeeld.</p>
              </div>
              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold">2018 - 40 Jaar Jong!</h3>
                <p>We vieren het 40-jarig bestaan met Gouden Glasbakken, BN&apos;ers in glasbaktruien en een nummer van De Jeugd van Tegenwoordig.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Nedvang</h2>
            <p className="mb-6">
              Nedvang is de organisatie achter Glas in &apos;t Bakkie. Als uitvoeringsorganisatie voor de producentenverantwoordelijkheid
              voor verpakkingen zorgen wij ervoor dat verpakkingsafval wordt ingezameld en gerecycled. We werken samen met gemeenten,
              afvalinzamelaars en recyclingbedrijven om de circulaire economie te realiseren.
            </p>

            <div className="bg-glasbak-geel p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">WAAROM GLASBAKKEN?</h3>
              <ul className="space-y-2">
                <li>✓ Glas is oneindig recyclebaar zonder kwaliteitsverlies</li>
                <li>✓ Bespaart 25% energie bij productie nieuw glas</li>
                <li>✓ Vermindert CO2-uitstoot met 300.000 ton per jaar</li>
                <li>✓ Bespaart waardevolle grondstoffen</li>
                <li>✓ Draagt bij aan de circulaire economie</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Partners</h2>
            <p className="mb-6">
              We werken nauw samen met gemeenten, glasproducenten, afvalverwerkers en de verpakkingsindustrie.
              Samen maken we Nederland elke dag een beetje duurzamer.
            </p>

            <div className="text-center mt-12">
              <p className="text-2xl font-bold mb-4">DOE MEE!</p>
              <p className="text-lg mb-6">Glasbak jij al? Deel het met #ikglasbak</p>
              <Link href="/contact" className="btn-primary">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}