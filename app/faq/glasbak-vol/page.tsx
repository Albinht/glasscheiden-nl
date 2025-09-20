import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GlasbakVolPage() {
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
              WAT ALS DE GLASBAK VOL IS?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">NIET NAAST DE BAK ZETTEN!</h2>
              <p className="text-lg">
                Zet NOOIT glas naast een volle glasbak. Dit is gevaarlijk, trekt ongedierte aan en je kunt een boete krijgen van €95 tot €140!
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAT DOE JE WEL?</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">1️⃣</span> ZOEK EEN ANDERE GLASBAK
                  </h3>
                  <p className="mb-2">De beste optie:</p>
                  <ul className="space-y-1">
                    <li>• Loop of fiets naar de volgende glasbak</li>
                    <li>• Meestal binnen 500 meter een alternatief</li>
                    <li>• Check de afval-app voor locaties</li>
                    <li>• Vaak is maar één kleur vol (probeer andere kleuren)</li>
                  </ul>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">2️⃣</span> MELD HET BIJ DE GEMEENTE
                  </h3>
                  <p className="mb-2">Direct melden helpt:</p>
                  <ul className="space-y-1">
                    <li>• Bel 14 + netnummer van je gemeente</li>
                    <li>• Gebruik de BuitenBeter app</li>
                    <li>• Meld via de gemeente website</li>
                    <li>• WhatsApp naar de gemeente (indien beschikbaar)</li>
                  </ul>
                  <p className="mt-2 text-sm font-semibold">
                    Volle containers worden vaak binnen 24 uur geleegd!
                  </p>
                </div>

                <div className="bg-glasbak-grijs p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">3️⃣</span> KOM LATER TERUG
                  </h3>
                  <p className="mb-2">Als het niet urgent is:</p>
                  <ul className="space-y-1">
                    <li>• Neem je glas weer mee naar huis</li>
                    <li>• Probeer het de volgende dag</li>
                    <li>• Containers worden 1-2x per week geleegd</li>
                    <li>• Na het weekend zijn ze vaak weer leeg</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAAROM NIET NAAST DE BAK?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-100 border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-700">⚠️ GEVAARLIJK</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Kinderen kunnen zich verwonden</li>
                    <li>• Glas breekt makkelijk</li>
                    <li>• Scherven op straat</li>
                    <li>• Gevaar voor huisdieren</li>
                  </ul>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-700">🚫 ILLEGAAL</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Boete €95-€140</li>
                    <li>• Geldt als dumping</li>
                    <li>• Je bent aansprakelijk voor schade</li>
                    <li>• Gemeente kan kosten verhalen</li>
                  </ul>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-700">🐀 OVERLAST</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Trekt ongedierte aan</li>
                    <li>• Wespen bij zoete resten</li>
                    <li>• Stankoverlast</li>
                    <li>• Vervuiling straatbeeld</li>
                  </ul>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-700">♻️ NIET GERECYCLED</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Wordt als afval opgeruimd</li>
                    <li>• Gaat naar verbrandingsoven</li>
                    <li>• Geen recycling mogelijk</li>
                    <li>• Verspilling van grondstoffen</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WANNEER ZIJN GLASBAKKEN VAAK VOL?</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">Piekmomentent:</p>
                <ul className="space-y-2">
                  <li>📅 <strong>Maandagochtend:</strong> Na het weekend</li>
                  <li>🎄 <strong>Feestdagen:</strong> Kerst, Oud & Nieuw, Pasen</li>
                  <li>☀️ <strong>Zomerse dagen:</strong> Veel glasverpakkingen van drankjes</li>
                  <li>🎉 <strong>Na evenementen:</strong> Koningsdag, carnaval, festivals</li>
                  <li>📦 <strong>Eind van de maand:</strong> Grote schoonmaak</li>
                </ul>
                <p className="mt-3 text-sm">
                  <strong>Tip:</strong> Ga op rustige momenten zoals doordeweekse ochtenden!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">HOE MELD JE EEN VOLLE GLASBAK?</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Via de telefoon</p>
                  <p>Bel 14 + netnummer (bijvoorbeeld 14020 voor Amsterdam). Geef het adres of nummer van de container door.</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Via een app</p>
                  <p>BuitenBeter, MijnGemeente, of de app van je gemeente. Maak een foto en markeer de locatie.</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Online</p>
                  <p>Via de website van je gemeente, meestal onder &apos;Melding openbare ruimte&apos;.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">STRUCTUREEL PROBLEEM?</h2>
              <div className="bg-orange-50 border-2 border-orange-500 p-6 rounded-lg mb-8">
                <p className="font-semibold mb-2">Is de glasbak vaak vol?</p>
                <ul className="space-y-2">
                  <li>• Meld dit bij de gemeente met data/tijden</li>
                  <li>• Vraag om extra ledigingen</li>
                  <li>• Stel voor om een extra container te plaatsen</li>
                  <li>• Organiseer met de buurt een petitie</li>
                  <li>• Contact met wijkraad of bewonersvereniging</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Moderne glasbakken hebben sensoren die melden wanneer ze voor 80% vol zijn. De gemeente kan dan gericht legen voordat de container helemaal vol is. Toch gebeurt het regelmatig dat containers vol zijn, vooral na weekenden en feestdagen. Gemeenten krijgen jaarlijks duizenden meldingen over volle glasbakken!
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">GOUDEN REGELS</h3>
              <ul className="space-y-2">
                <li>✗ NOOIT glas naast de container</li>
                <li>✓ Zoek een andere glasbak</li>
                <li>✓ Meld volle containers</li>
                <li>✓ Neem je glas weer mee</li>
                <li>✓ Kom op een rustiger moment terug</li>
              </ul>
              <p className="mt-4 font-semibold">
                Samen houden we de buurt schoon en veilig!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}