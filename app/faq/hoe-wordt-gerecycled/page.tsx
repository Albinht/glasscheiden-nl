import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HoeWordtGerecycledPage() {
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
              HOE WORDT GLAS GERECYCLED?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-2">EEN FASCINEREND PROCES!</h2>
              <p className="text-lg">
                Van oude fles tot nieuwe pot: glasrecycling is een perfect voorbeeld van de circulaire economie. Elke fles die je inlevert wordt weer een nieuwe verpakking!
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">HET RECYCLINGPROCES IN 7 STAPPEN</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">INZAMELING</h3>
                    <p>Glascontainers worden geleegd door speciale vrachtwagens. Het glas wordt gescheiden op kleur (wit, groen, bruin) gehouden.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">TRANSPORT</h3>
                    <p>Het ingezamelde glas gaat naar een glasrecyclingbedrijf. In Nederland hebben we meerdere van deze faciliteiten.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">SORTERING</h3>
                    <p>Grote vervuilingen zoals plastic tassen worden handmatig verwijderd. Magneten halen metalen deksels weg.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">VERMALING</h3>
                    <p>Het glas wordt gebroken tot glasscherven van ongeveer 2-5 cm groot. Dit heet &apos;glasgruis&apos; of &apos;cullet&apos;.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">5</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">ZUIVERING</h3>
                    <p>Geavanceerde machines verwijderen laatste vervuilingen: papier wordt weggeblazen, keramiek wordt verwijderd met lasers, metaaldeeltjes met magneten.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">6</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">SMELTEN</h3>
                    <p>Het glasgruis gaat de oven in bij 1600°C. Er wordt een klein beetje zand, kalk en soda toegevoegd. Na 24 uur is het volledig gesmolten.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">7</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">NIEUWE PRODUCTEN</h3>
                    <p>Het vloeibare glas wordt in mallen gegoten of geblazen tot nieuwe flessen en potten. Klaar voor gebruik!</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAAROM IS KLEURSCHEIDING BELANGRIJK?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">WIT GLAS</h4>
                  <p className="text-sm">Kan alleen wit glas worden. Zelfs kleine vervuiling met kleur maakt het onbruikbaar.</p>
                </div>
                <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">GROEN GLAS</h4>
                  <p className="text-sm">Meest tolerant voor andere kleuren. Kan tot 15% andere kleuren bevatten.</p>
                </div>
                <div className="bg-amber-50 border-2 border-amber-600 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">BRUIN GLAS</h4>
                  <p className="text-sm">Kan kleine hoeveelheden andere kleuren aan, vooral groen.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">ENERGIE BESPARING</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">Voor elke 10% gerecycled glas in de oven:</p>
                <ul className="space-y-2">
                  <li>• 3% minder energie nodig</li>
                  <li>• 7% minder CO2-uitstoot</li>
                  <li>• Oven kan op lagere temperatuur</li>
                </ul>
                <p className="mt-3 text-sm">
                  Moderne glasovens gebruiken tot 90% gerecycled glas!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">INDRUKWEKKENDE CIJFERS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-glasbak-grijs p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-glasbak-geel mb-2">20-30 DAGEN</div>
                  <p>Van glasbak tot nieuwe fles in de winkel</p>
                </div>
                <div className="bg-glasbak-grijs p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-glasbak-geel mb-2">1 TON GLASGRUIS</div>
                  <p>Bespaart 1,2 ton grondstoffen</p>
                </div>
                <div className="bg-glasbak-grijs p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-glasbak-geel mb-2">670 KG CO2</div>
                  <p>Besparing per ton gerecycled glas</p>
                </div>
                <div className="bg-glasbak-grijs p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-glasbak-geel mb-2">25% ENERGIE</div>
                  <p>Besparing t.o.v. nieuw glas maken</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Nederland is koploper in glasrecycling! We recyclen meer dan 85% van al het verpakkingsglas. Het Nederlandse systeem met gescheiden inzameling op kleur is een voorbeeld voor veel andere landen. Een glazen fles die je vandaag inlevert, kan binnen een maand alweer als nieuwe fles in de winkel staan!
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">JOUW BIJDRAGE TELT!</h3>
              <p className="mb-4">
                Elke fles en pot die je inlevert wordt gegarandeerd gerecycled. Door glas te scheiden draag je direct bij aan:
              </p>
              <ul className="space-y-2">
                <li>✓ Minder grondstoffengebruik</li>
                <li>✓ Lagere CO2-uitstoot</li>
                <li>✓ Energiebesparing</li>
                <li>✓ Een schoner milieu</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}