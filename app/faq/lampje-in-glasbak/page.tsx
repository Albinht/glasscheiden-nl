import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LampjeInGlasbakPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <Link href="/vragen" className="text-glasbak-zwart hover:underline">
              ← Terug naar veelgestelde vragen
            </Link>
            <h1 className="text-4xl font-heading text-glasbak-zwart mt-4 mb-4">
              MAG EEN LAMPJE IN DE GLASBAK?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-700 mb-2">ABSOLUUT NIET!</h2>
              <p className="text-lg">
                Lampen, gloeilampen, spaarlampen en LED-lampen horen NOOIT in de glasbak. Ze moeten naar de milieustraat of inleverpunten in winkels.
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM GEEN LAMPEN IN DE GLASBAK?</h2>
              <p className="mb-4">
                Hoewel lampen glas bevatten, is dit speciaal glas met een andere samenstelling dan verpakkingsglas. Lampenglas bevat metalen, chemicaliën en soms giftige stoffen zoals kwik. Deze stoffen maken het ongeschikt voor recycling samen met flessen en potten.
              </p>

              <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="font-bold text-orange-700 mb-2">⚠️ GEVAAR!</h3>
                <p>
                  Spaarlampen en TL-buizen bevatten een kleine hoeveelheid kwik. Dit is giftig voor mens en milieu. Daarom is het extra belangrijk deze veilig in te leveren!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAAR BRENG JE LAMPEN NAARTOE?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">GLOEILAMPEN & HALOGEENLAMPEN</h3>
                  <ul className="space-y-2">
                    <li>• Restafval (kleine hoeveelheden)</li>
                    <li>• Milieustraat</li>
                    <li>• Geen gevaarlijke stoffen</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">SPAARLAMPEN & LED</h3>
                  <ul className="space-y-2">
                    <li>• Milieustraat (gratis)</li>
                    <li>• Winkels die lampen verkopen</li>
                    <li>• Speciale inzamelbakken</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">TL-BUIZEN</h3>
                  <ul className="space-y-2">
                    <li>• Altijd naar milieustraat</li>
                    <li>• Bevat kwik!</li>
                    <li>• Voorzichtig vervoeren</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">KAPOTTE LAMPEN</h3>
                  <ul className="space-y-2">
                    <li>• In afgesloten zak/doos</li>
                    <li>• Naar milieustraat</li>
                    <li>• Niet stofzuigen bij kwiklampen!</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAT ALS EEN SPAARLAMP BREEKT?</h2>
              <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg mb-8">
                <ol className="space-y-2">
                  <li>1. Verlaat de ruimte 10 minuten</li>
                  <li>2. Zet ramen open voor ventilatie</li>
                  <li>3. Gebruik GEEN stofzuiger</li>
                  <li>4. Veeg scherven op met karton</li>
                  <li>5. Doe alles in een afgesloten pot</li>
                  <li>6. Breng naar de milieustraat</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold mb-4">VERSCHIL MET VERPAKKINGSGLAS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✓ VERPAKKINGSGLAS</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Flessen en potten</li>
                    <li>• Zuiver glas</li>
                    <li>• Smeltpunt ±1600°C</li>
                    <li>• Oneindig recyclebaar</li>
                  </ul>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✗ LAMPENGLAS</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Bevat metalen/chemicaliën</li>
                    <li>• Speciaal behandeld glas</li>
                    <li>• Ander smeltpunt</li>
                    <li>• Apart recyclingproces</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                95% van een spaarlamp kan gerecycled worden! Het glas wordt gebruikt voor nieuwe lampen, het metaal wordt hergebruikt en het kwik wordt veilig verwerkt. Maar dit kan alleen als je de lamp op de juiste plek inlevert.
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">BELANGRIJKSTE REGELS</h3>
              <ul className="space-y-2">
                <li>✗ NOOIT lampen in de glasbak</li>
                <li>✓ Gloeilampen → Restafval of milieustraat</li>
                <li>✓ Spaarlampen/LED → Milieustraat of winkel</li>
                <li>✓ TL-buizen → Altijd milieustraat</li>
                <li>✓ Kapotte lampen → Veilig verpakken</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}