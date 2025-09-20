import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GlasbakTijdenPage() {
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
              TUSSEN WELKE TIJDEN MAG IK GLASBAKKEN?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">OFFICIËLE TIJDEN</h2>
              <p className="text-lg">
                In de meeste gemeenten mag je glas wegbrengen tussen <strong>07:00 en 22:00 uur</strong>. Dit voorkomt geluidsoverlast voor omwonenden.
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM DEZE TIJDEN?</h2>
              <p className="mb-4">
                Glas in een container gooien maakt veel lawaai. Het geluid van brekend glas kan tot 80-90 decibel zijn - vergelijkbaar met een grasmaaier! Daarom zijn er regels om overlast te voorkomen, vooral &apos;s avonds en &apos;s nachts.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">TIJDEN PER DAG</h2>
              <div className="bg-glasbak-grijs p-6 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">DOORDEWEEKS 🗓️</h3>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold">Maandag t/m Vrijdag</p>
                      <p className="text-2xl font-bold text-green-600">07:00 - 22:00</p>
                      <p className="text-sm mt-2">Standaard tijden in heel Nederland</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">WEEKEND 📅</h3>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold">Zaterdag</p>
                      <p className="text-2xl font-bold text-green-600">07:00 - 22:00</p>
                      <p className="font-semibold mt-2">Zondag & Feestdagen</p>
                      <p className="text-2xl font-bold text-orange-600">08:00 - 22:00*</p>
                      <p className="text-sm mt-1">*Sommige gemeenten: 09:00 start</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">UITZONDERINGEN PER GEMEENTE</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Amsterdam & grote steden</p>
                  <p>Vaak 08:00 - 21:00 uur in woonwijken, 07:00 - 22:00 bij winkelcentra</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Kleinere gemeenten</p>
                  <p>Soms ruimere tijden: 06:00 - 23:00 uur, vooral in buitengebieden</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Toeristische gebieden</p>
                  <p>In de zomer soms aangepaste tijden vanwege drukte</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Industrieterreinen</p>
                  <p>Vaak 24/7 toegankelijk omdat er geen woningen zijn</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAT ALS JE BUITEN DE TIJDEN GLAS MOET WEGBRENGEN?</h2>
              <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-8">
                <p className="font-semibold mb-3">Noodgevallen gebeuren, maar:</p>
                <ul className="space-y-2">
                  <li>• Bewaar het glas tot de volgende ochtend</li>
                  <li>• Zoek een 24/7 locatie (tankstations, industrieterrein)</li>
                  <li>• NOOIT &apos;s nachts - boete tot €140!</li>
                  <li>• Bij kapot glas: veilig opbergen in doos</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">BOETES EN HANDHAVING</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-100 border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-700">💶 BOETES</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Eerste overtreding: €95</li>
                    <li>• Herhaalde overtreding: €140</li>
                    <li>• Bij veel overlast: tot €450</li>
                    <li>• Plus eventuele schadevergoeding</li>
                  </ul>
                </div>
                <div className="bg-blue-100 border-2 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-700">👮 HANDHAVING</h4>
                  <ul className="text-sm space-y-1">
                    <li>• BOA&apos;s controleren actief</li>
                    <li>• Meldingen van buurtbewoners</li>
                    <li>• Camera&apos;s bij sommige containers</li>
                    <li>• Geluidsmetingen bij klachten</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">BESTE TIJDEN OM TE GLASBAKKEN</h2>
              <div className="bg-green-100 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">🌟 Ideale momenten (minste overlast):</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Ochtend</p>
                    <ul className="text-sm space-y-1">
                      <li>• 09:00 - 11:00 (na de spits)</li>
                      <li>• Mensen zijn naar werk/school</li>
                      <li>• Containers net geleegd</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Middag</p>
                    <ul className="text-sm space-y-1">
                      <li>• 14:00 - 17:00</li>
                      <li>• Rustige periode</li>
                      <li>• Voor het avondeten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">GELUIDSOVERLAST BEPERKEN</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">Tips voor minder lawaai:</p>
                <ul className="space-y-2">
                  <li>✓ Gooi flessen één voor één, niet in tassen</li>
                  <li>✓ Laat ze niet van hoogte vallen</li>
                  <li>✓ Vermijd glasbakken direct bij woningen</li>
                  <li>✓ Wees extra stil op zon- en feestdagen</li>
                  <li>✓ Neem kleine hoeveelheden mee</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">CHECK JE GEMEENTE</h2>
              <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">Waar vind je de exacte tijden?</p>
                <ul className="space-y-2">
                  <li>📱 Afval-app van je gemeente</li>
                  <li>💻 Website gemeente (zoek op &apos;glasbak tijden&apos;)</li>
                  <li>📋 Afvalkalender (vaak achterop)</li>
                  <li>🏛️ Algemene Plaatselijke Verordening (APV)</li>
                  <li>☎️ Bel 14 + netnummer</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                De tijdsregels voor glasbakken zijn opgenomen in de APV (Algemene Plaatselijke Verordening) van je gemeente. Overtredingen vallen onder de Wet openbare manifestaties. Moderne ondergrondse containers zijn beter geïsoleerd en maken minder lawaai - sommige gemeenten experimenteren daarom met ruimere tijden bij deze nieuwe containers!
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SAMENGEVAT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">✓ TOEGESTAAN</p>
                  <ul className="text-sm space-y-1">
                    <li>• Ma-Za: 07:00 - 22:00</li>
                    <li>• Zo: 08:00/09:00 - 22:00</li>
                    <li>• Overdag glasbakken</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">✗ VERBODEN</p>
                  <ul className="text-sm space-y-1">
                    <li>• &apos;s Nachts (22:00 - 07:00)</li>
                    <li>• Vroege zondagochtend</li>
                    <li>• Boete: €95 - €140</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Respecteer je buren - glasbak op gepaste tijden! 🌙
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}