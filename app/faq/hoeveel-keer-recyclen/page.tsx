import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HoeveelKeerRecyclenPage() {
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
              HOEVEEL KEER KAN GLAS GERECYCLED WORDEN?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-2">ONEINDIG!</h2>
              <p className="text-lg">
                Glas is het enige verpakkingsmateriaal dat ONBEPERKT gerecycled kan worden zonder kwaliteitsverlies. Een fles kan letterlijk duizenden keren een nieuwe fles worden!
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM IS GLAS ZO BIJZONDER?</h2>
              <p className="mb-4">
                In tegenstelling tot plastic of papier, verliest glas geen kwaliteit bij recycling. De moleculaire structuur van glas blijft intact, ongeacht hoe vaak het gesmolten en opnieuw gevormd wordt. Dit maakt glas uniek onder verpakkingsmaterialen.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">VERGELIJK MET ANDERE MATERIALEN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-100 border-2 border-green-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-700">♻️ GLAS</h4>
                  <div className="text-2xl font-bold text-green-700">∞</div>
                  <p className="text-sm mt-2">Oneindig recyclebaar zonder kwaliteitsverlies</p>
                </div>
                <div className="bg-blue-100 border-2 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-700">📄 PAPIER</h4>
                  <div className="text-2xl font-bold text-blue-700">5-7x</div>
                  <p className="text-sm mt-2">Vezels worden korter bij elke recycling</p>
                </div>
                <div className="bg-yellow-100 border-2 border-yellow-600 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-yellow-700">🥤 PLASTIC</h4>
                  <div className="text-2xl font-bold text-yellow-700">2-3x</div>
                  <p className="text-sm mt-2">Kwaliteit neemt snel af</p>
                </div>
                <div className="bg-gray-100 border-2 border-gray-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-700">🥫 METAAL</h4>
                  <div className="text-2xl font-bold text-gray-700">∞</div>
                  <p className="text-sm mt-2">Ook oneindig recyclebaar</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">HET EEUWIGE LEVEN VAN EEN GLAZEN FLES</h2>
              <div className="bg-glasbak-grijs p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍷</span>
                    <div>
                      <p className="font-semibold">1950: Wijnfles geproduceerd</p>
                      <p className="text-sm">Eerste leven als wijnfles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥛</span>
                    <div>
                      <p className="font-semibold">1955: Melkfles</p>
                      <p className="text-sm">Gerecycled tot melkfles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍯</span>
                    <div>
                      <p className="font-semibold">1980: Jampot</p>
                      <p className="text-sm">25 jaar later weer gerecycled</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍺</span>
                    <div>
                      <p className="font-semibold">2000: Bierfles</p>
                      <p className="text-sm">Millennium editie bierfles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥫</span>
                    <div>
                      <p className="font-semibold">2025: Groentepot</p>
                      <p className="text-sm">Nog steeds perfect glas!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">♻️</span>
                    <div>
                      <p className="font-semibold">En zo door...</p>
                      <p className="text-sm">Voor altijd recyclebaar!</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">GEEN KWALITEITSVERLIES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-glasbak-zwart p-6 rounded-lg">
                  <h3 className="font-bold mb-3">NIEUW GLAS</h3>
                  <ul className="space-y-2">
                    <li>• 100% zuiverheid</li>
                    <li>• Perfecte helderheid</li>
                    <li>• Volle sterkte</li>
                    <li>• Voedselveilig</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-glasbak-zwart p-6 rounded-lg">
                  <h3 className="font-bold mb-3">1000x GERECYCLED GLAS</h3>
                  <ul className="space-y-2">
                    <li>• 100% zuiverheid ✓</li>
                    <li>• Perfecte helderheid ✓</li>
                    <li>• Volle sterkte ✓</li>
                    <li>• Voedselveilig ✓</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">PRAKTIJKVOORBEELDEN</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-glasbak-geel p-4 rounded-lg">
                  <p className="font-semibold">Heineken bierflesjes</p>
                  <p>Bevatten gemiddeld 60-90% gerecycled glas. Sommige flessen zijn al 20+ keer gerecycled!</p>
                </div>
                <div className="bg-glasbak-geel p-4 rounded-lg">
                  <p className="font-semibold">Nederlandse jampotten</p>
                  <p>Bestaan voor 80% uit gerecycled glas. De pot op je ontbijttafel was vorig jaar misschien een wijnfles!</p>
                </div>
                <div className="bg-glasbak-geel p-4 rounded-lg">
                  <p className="font-semibold">Groene wijnflessen</p>
                  <p>Kunnen tot 95% gerecycled glas bevatten dankzij de tolerantie van groen glas voor kleurvervuiling.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">MYTHES ONTKRACHT</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700">MYTHE: &quot;Gerecycled glas is van mindere kwaliteit&quot;</p>
                  <p>FEIT: Absoluut niet waar! Gerecycled glas is chemisch identiek aan nieuw glas.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700">MYTHE: &quot;Na 10 keer recyclen is glas op&quot;</p>
                  <p>FEIT: Glas kan letterlijk duizenden keren gerecycled worden zonder enig probleem.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-red-700">MYTHE: &quot;Oud glas wordt zwakker&quot;</p>
                  <p>FEIT: De moleculaire structuur blijft exact hetzelfde, dus de sterkte ook.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Er bestaat glas uit de Romeinse tijd dat nog steeds perfect intact is. Als dit glas nu gerecycled zou worden, zou het exact dezelfde kwaliteit hebben als nieuw geproduceerd glas. Sommige glazen voorwerpen in musea zijn meer dan 3500 jaar oud en zouden theoretisch nog steeds gerecycled kunnen worden tot perfecte nieuwe producten!
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">DE KRACHT VAN ONEINDIG</h3>
              <p className="mb-4">
                Elke glazen verpakking die je koopt en recyclet, draagt bij aan een perfecte kringloop:
              </p>
              <ul className="space-y-2">
                <li>✓ Geen afval, alleen grondstof</li>
                <li>✓ Geen kwaliteitsverlies</li>
                <li>✓ Eeuwig herbruikbaar</li>
                <li>✓ 100% circulair</li>
              </ul>
              <p className="mt-4 font-semibold">
                Glas recyclen = investeren in de eeuwigheid!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}