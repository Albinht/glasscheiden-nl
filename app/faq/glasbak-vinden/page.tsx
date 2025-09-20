import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GlasbakVindenPage() {
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
              WAAR VIND IK DE DICHTSTBIJZIJNDE GLASBAK?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">MAKKELIJK TE VINDEN!</h2>
              <p className="text-lg">
                In Nederland is altijd een glasbak in de buurt. Gemiddeld staat er één glasbak per 100 huishoudens, meestal binnen 250 meter van je woning.
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">5 MANIEREN OM EEN GLASBAK TE VINDEN</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">1. AFVALWIJZER APP 📱</h3>
                  <p className="mb-2">De officiële app van je gemeente:</p>
                  <ul className="space-y-1">
                    <li>• Download de AfvalWijzer, Cure Afval of MijnAfvalwijzer app</li>
                    <li>• Vul je postcode in</li>
                    <li>• Klik op &apos;Afval wegbrengen&apos; of &apos;Containers&apos;</li>
                    <li>• Zie alle glasbakken op een kaart</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">2. GEMEENTE WEBSITE 💻</h3>
                  <p className="mb-2">Op de website van je gemeente:</p>
                  <ul className="space-y-1">
                    <li>• Ga naar de website van je gemeente</li>
                    <li>• Zoek op &apos;glasbak&apos; of &apos;glascontainer&apos;</li>
                    <li>• Vaak is er een interactieve kaart</li>
                    <li>• Of een lijst met adressen</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">3. BEKENDE LOCATIES 📍</h3>
                  <p className="mb-2">Glasbakken staan meestal bij:</p>
                  <ul className="space-y-1">
                    <li>• Winkelcentra en supermarkten</li>
                    <li>• Parkeerplaatsen</li>
                    <li>• Sportverenigingen</li>
                    <li>• Scholen</li>
                    <li>• Wijkcentra</li>
                    <li>• Grote kruispunten in woonwijken</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">4. GOOGLE MAPS 🗺️</h3>
                  <p className="mb-2">Zoeken via Google Maps:</p>
                  <ul className="space-y-1">
                    <li>• Open Google Maps</li>
                    <li>• Zoek op &apos;glasbak&apos; of &apos;glascontainer&apos;</li>
                    <li>• Vaak zijn ze aangeduid door bewoners</li>
                    <li>• Let op: niet altijd compleet</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">5. VRAAG HET IN DE BUURT 👥</h3>
                  <p className="mb-2">Buren weten het altijd:</p>
                  <ul className="space-y-1">
                    <li>• Vraag je buren</li>
                    <li>• Check buurtapps (Nextdoor, WhatsApp)</li>
                    <li>• Vraag bij de supermarkt</li>
                    <li>• Wijkagent of wijkteam weet het ook</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">HERKENNEN VAN EEN GLASBAK</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white border-2 border-glasbak-zwart p-4 rounded-lg text-center">
                  <div className="text-4xl mb-2">🟢</div>
                  <p className="font-semibold">GROEN</p>
                  <p className="text-sm">Voor groen glas</p>
                </div>
                <div className="bg-white border-2 border-glasbak-zwart p-4 rounded-lg text-center">
                  <div className="text-4xl mb-2">⚪</div>
                  <p className="font-semibold">WIT/GRIJS</p>
                  <p className="text-sm">Voor wit glas</p>
                </div>
                <div className="bg-white border-2 border-glasbak-zwart p-4 rounded-lg text-center">
                  <div className="text-4xl mb-2">🟤</div>
                  <p className="font-semibold">BRUIN</p>
                  <p className="text-sm">Voor bruin glas</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">SOORTEN GLASINZAMELING</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-glasbak-geel pl-4">
                  <p className="font-semibold">ONDERGRONDSE CONTAINERS</p>
                  <p>Meest voorkomend. Grote capaciteit, weinig overlast. Herkenbaar aan de gekleurde deksels die uit de grond steken.</p>
                </div>
                <div className="border-l-4 border-glasbak-geel pl-4">
                  <p className="font-semibold">BOVENGRONDSE CONTAINERS</p>
                  <p>Grote metalen bakken, vaak groen. Vooral in oudere wijken of waar ondergrondse containers niet kunnen.</p>
                </div>
                <div className="border-l-4 border-glasbak-geel pl-4">
                  <p className="font-semibold">GLASBOLLEN/IGLO&apos;S</p>
                  <p>Ronde containers. Worden steeds minder gebruikt maar kom je nog tegen in sommige gemeenten.</p>
                </div>
                <div className="border-l-4 border-glasbak-geel pl-4">
                  <p className="font-semibold">HUIS-AAN-HUIS OPHALEN</p>
                  <p>In sommige gemeenten wordt glas opgehaald met speciale kratten. Check de afvalkalender!</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">TIPS VOOR HET VINDEN</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
                <ul className="space-y-2">
                  <li>✓ Loop een rondje door de wijk - meestal zie je er dan wel één</li>
                  <li>✓ Bij twijfel: zoek bij het dichtstbijzijnde winkelcentrum</li>
                  <li>✓ Let op borden met &apos;Glascontainer&apos; of het glaslogo</li>
                  <li>✓ Volg andere mensen met lege flessen</li>
                  <li>✓ Glasbakken staan vaak bij elkaar (wit, groen, bruin)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">GEEN GLASBAK IN DE BUURT?</h2>
              <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-8">
                <p className="font-semibold mb-2">Meld het bij je gemeente!</p>
                <p>Gemeenten zijn verplicht voldoende inzamelpunten te hebben. Als de dichtstbijzijnde glasbak meer dan 250 meter van je woning is, kun je een verzoek indienen voor een extra glasbak.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Nederland heeft ongeveer 30.000 glasbakken! Dat is één glasbak per 580 inwoners. In steden staan ze dichter bij elkaar (vaak per 200 meter), in dorpen wat verder uit elkaar. De gemeente bepaalt waar glasbakken komen op basis van loopafstand, bevolkingsdichtheid en de hoeveelheid ingezameld glas.
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">HULP NODIG?</h3>
              <p className="mb-4">
                Kun je echt geen glasbak vinden? Neem contact op met:
              </p>
              <ul className="space-y-2">
                <li>• Je gemeente (14 + netnummer)</li>
                <li>• De afvalverwerker in je regio</li>
                <li>• Download de afval-app van je gemeente</li>
                <li>• Kijk op www.afvalscheidingswijzer.nl</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}