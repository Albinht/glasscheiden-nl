import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GlasSpoelenPage() {
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
              MOET IK MIJN GLAS SPOELEN?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-2">KORT ANTWOORD: NEE!</h2>
              <p className="text-lg">
                Glas hoeft NIET schoon te zijn voor de glasbak. Leeg is genoeg! Het wordt toch op 1600°C verhit waarbij alle resten verbranden.
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM HOEFT HET NIET?</h2>
              <p className="mb-4">
                Bij het recyclingproces wordt glas verhit tot 1600°C. Bij deze temperatuur verbranden alle organische resten zoals jam, saus of etiketten volledig. Het spoelen van glas kost onnodig water en energie, terwijl het geen toegevoegde waarde heeft voor de recycling.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAT IS WEL BELANGRIJK?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-glasbak-geel p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">🍯</div>
                  <h3 className="font-bold mb-2">LEEG MAKEN</h3>
                  <p className="text-sm">
                    Lepel of giet het product eruit. Restjes mogen blijven zitten.
                  </p>
                </div>
                <div className="bg-glasbak-geel p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold mb-2">DEKSELS ERAF</h3>
                  <p className="text-sm">
                    Verwijder metalen en plastic deksels. Deze horen bij PMD.
                  </p>
                </div>
                <div className="bg-glasbak-geel p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-bold mb-2">JUISTE KLEUR</h3>
                  <p className="text-sm">
                    Gooi het glas in de juiste kleurcontainer.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">VOORBEELDEN: WAT MAG?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg">
                  <p className="font-semibold text-green-700 mb-2">✓ MAG GEWOON IN DE GLASBAK</p>
                  <ul className="text-sm space-y-1">
                    <li>• Jampot met jamresten</li>
                    <li>• Sauspot met sausresten</li>
                    <li>• Wijnfles met bodempje wijn</li>
                    <li>• Pot pindakaas met aangekoekte resten</li>
                    <li>• Bierfles met schuimresten</li>
                    <li>• Potje babyvoeding niet helemaal leeg</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-2 border-orange-500 p-4 rounded-lg">
                  <p className="font-semibold text-orange-700 mb-2">⚠️ EERST EVEN LEGEN</p>
                  <ul className="text-sm space-y-1">
                    <li>• Pot augurken vol met vocht → Giet leeg</li>
                    <li>• Halve pot mayonaise → Lepel leeg</li>
                    <li>• Fles olie halfvol → Giet over in andere fles</li>
                    <li>• Pot honing bijna vol → Gebruik eerst op</li>
                    <li>• Weckpot met inhoud → Haal inhoud eruit</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAAROM TOCH LEEG MAKEN?</h2>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Stankoverlast voorkomen</p>
                  <p>Volle potten trekken ongedierte aan en gaan stinken, vooral in de zomer. Dit geeft overlast bij de glasbak.</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Verspilling tegengaan</p>
                  <p>Gooi geen eetbare producten weg! Gebruik ze op of bewaar ze in een andere verpakking.</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Werkbaarheid voor ophalers</p>
                  <p>Zware vloeistoffen maken de containers onnodig zwaar voor de vuilnisophalers.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">ETIKETTEN EN LIJMRESTEN</h2>
              <div className="bg-glasbak-grijs p-6 rounded-lg mb-8">
                <p className="font-semibold mb-3">Ook deze hoef je NIET te verwijderen:</p>
                <ul className="space-y-2">
                  <li>📄 <strong>Papieren etiketten:</strong> Verbranden in de oven</li>
                  <li>🏷️ <strong>Plastic stickers:</strong> Worden eruit gefilterd</li>
                  <li>🧪 <strong>Lijmresten:</strong> Verbranden bij hoge temperatuur</li>
                  <li>🖊️ <strong>Prijsstickers:</strong> Geen probleem voor recycling</li>
                  <li>🎨 <strong>Verfresten op potten:</strong> Wordt weggebrand</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WANNEER WEL SPOELEN?</h2>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
                <p className="font-semibold mb-3">Alleen in deze gevallen is spoelen aan te raden:</p>
                <ul className="space-y-2">
                  <li>• Je bewaart glas thuis langer dan een week (tegen stank)</li>
                  <li>• Je wilt de pot/fles hergebruiken voor eigen gebruik</li>
                  <li>• Er zitten gevaarlijke stoffen in (terpentine, verf)</li>
                  <li>• Je hebt last van fruitvliegjes in huis</li>
                </ul>
                <p className="mt-3 text-sm">
                  <strong>Let op:</strong> Potten met chemicaliën horen NIET in de glasbak maar bij klein chemisch afval!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">MILIEU-IMPACT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-100 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-700 mb-2">6 LITER</div>
                  <p className="font-semibold">Water per spoelbeurt</p>
                  <p className="text-sm mt-2">Onnodig waterverbruik als iedereen spoelt</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">0 LITER</div>
                  <p className="font-semibold">Water nodig voor recycling</p>
                  <p className="text-sm mt-2">Resten verbranden vanzelf in de oven</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">TIPS VOOR THUIS</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
                <ul className="space-y-2">
                  <li>✓ Verzamel glas in een bak of tas</li>
                  <li>✓ Breng regelmatig weg (voorkomt stank)</li>
                  <li>✓ Lepel potten goed leeg voor wegbrengen</li>
                  <li>✓ Gebruik producten eerst helemaal op</li>
                  <li>✓ Hergebruik mooie potten voor eigen gebruik</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Als alle Nederlanders hun glas zouden spoelen voordat ze het wegbrengen, zou dat jaarlijks 100 miljoen liter water kosten! Dat is genoeg water om 40 Olympische zwembaden te vullen. Dit water wordt volledig verspild, want het recyclingproces heeft het niet nodig. Sterker nog: in sommige landen wordt glas juist NIET gespoeld om water te besparen en is dit zelfs de officiële richtlijn!
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SAMENVATTING</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">✓ WEL DOEN</p>
                  <ul className="text-sm space-y-1">
                    <li>• Potten en flessen leegmaken</li>
                    <li>• Deksels verwijderen</li>
                    <li>• Op kleur sorteren</li>
                    <li>• Gewoon met restjes wegbrengen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">✗ NIET NODIG</p>
                  <ul className="text-sm space-y-1">
                    <li>• Glas spoelen of wassen</li>
                    <li>• Etiketten verwijderen</li>
                    <li>• Lijmresten wegkrabben</li>
                    <li>• Perfect schoonmaken</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 font-semibold">
                Bespaar water - spoelen is niet nodig! 💧
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}