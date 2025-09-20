import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WaaromScheidenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-8">
          <div className="container-glasbak">
            <Link href="/vragen" className="text-glasbak-zwart hover:underline text-sm font-bold">
              ← Terug naar vragen
            </Link>
          </div>
        </div>

        <article className="container-glasbak py-12">
          <h1 className="text-4xl font-heading text-glasbak-zwart mb-8">
            WAAROM SCHEIDEN WE GLAS?
          </h1>

          <div className="max-w-4xl">
            <p className="text-xl mb-8 font-semibold">
              Glas scheiden is een van de meest effectieve manieren om bij te dragen aan een duurzame wereld.
              Het is 100% en oneindig recyclebaar zonder kwaliteitsverlies!
            </p>

            <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">DE VOORDELEN VAN GLASRECYCLING</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">🌍 Milieu</h3>
                  <ul className="space-y-1 ml-6">
                    <li>• 300.000 ton minder CO2-uitstoot per jaar</li>
                    <li>• Bespaart waardevolle grondstoffen (zand, kalksteen, soda)</li>
                    <li>• Vermindert afval op stortplaatsen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">⚡ Energie</h3>
                  <ul className="space-y-1 ml-6">
                    <li>• 25% minder energie nodig voor productie</li>
                    <li>• Lagere smelttemperatuur voor gerecycled glas</li>
                    <li>• Minder brandstof verbruik in glasovens</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">♻️ Circulaire Economie</h3>
                  <ul className="space-y-1 ml-6">
                    <li>• Oneindig recyclebaar zonder kwaliteitsverlies</li>
                    <li>• Van fles naar fles in slechts 30 dagen</li>
                    <li>• Perfecte kringloop: glasbak → recycling → nieuwe fles → glasbak</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-glasbak-geel p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">HET RECYCLINGPROCES</h2>
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Inzameling:</strong> Glas wordt opgehaald uit glasbakken</li>
                <li><strong>Transport:</strong> Naar de glasrecyclingfabriek</li>
                <li><strong>Sortering:</strong> Op kleur en zuiverheid</li>
                <li><strong>Vermaling:</strong> Tot glasscherven (cullet)</li>
                <li><strong>Smelten:</strong> Op 1500°C in de glasoven</li>
                <li><strong>Vormen:</strong> Nieuwe flessen en potten</li>
                <li><strong>Vullen:</strong> Bij de bottelarij</li>
                <li><strong>Verkoop:</strong> Naar de winkel en consument</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold mb-4">INDRUKWEKKENDE CIJFERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
                <p className="text-2xl font-bold">73%</p>
                <p className="text-sm">van al het glas wordt gerecycled</p>
              </div>
              <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
                <p className="text-2xl font-bold">25.000</p>
                <p className="text-sm">glasbakken in Nederland</p>
              </div>
              <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
                <p className="text-2xl font-bold">30</p>
                <p className="text-sm">dagen van glasbak tot nieuwe fles</p>
              </div>
              <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
                <p className="text-2xl font-bold">∞</p>
                <p className="text-sm">keer recyclebaar</p>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">💡 Wist je dat?</h3>
              <p>
                Elke ton gerecycled glas bespaart 1,2 ton aan grondstoffen!
                Dat betekent dat we door glasrecycling jaarlijks honderdduizenden tonnen zand,
                kalksteen en soda besparen. Deze grondstoffen blijven zo beschikbaar voor toekomstige generaties.
              </p>
            </div>

            <div className="text-center bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">JIJ MAAKT HET VERSCHIL!</h3>
              <p className="text-lg mb-4">
                Elke fles en pot die jij in de glasbak gooit, draagt bij aan een beter milieu.
              </p>
              <p className="text-xl font-bold">#ikglasbak</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}