import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VoorConsumentenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart">
              VOOR CONSUMENTEN
            </h1>
            <p className="text-xl mt-4">
              Alles wat je moet weten om een glasbak-held te worden!
            </p>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <p className="text-xl mb-8 font-semibold">
              Glasbakken is makkelijk! Met deze tips en informatie help jij mee aan een schonere,
              duurzamere wereld. Elke fles en pot telt!
            </p>

            <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 uppercase">Glasbakken in 5 Stappen</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold">Verzamel je lege flessen en potten</h3>
                    <p className="text-sm">Thuis in een bak of tas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold">Verwijder deksels en doppen</h3>
                    <p className="text-sm">Deze horen bij het PMD-afval</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold">Vind de dichtstbijzijnde glasbak</h3>
                    <p className="text-sm">Check de glasbakkenkaart of kijk in je wijk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold">Gooi het glas in de juiste kleur</h3>
                    <p className="text-sm">Wit, groen of bruin - of alles samen als er maar één bak is</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-glasbak-geel text-glasbak-zwart w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold">Klaar! Jij bent een held!</h3>
                    <p className="text-sm">Je glas wordt 100% gerecycled tot nieuwe flessen</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Handige Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-glasbak-zwart p-6">
                <h3 className="font-bold text-lg mb-2">⏰ Glasbaktijden</h3>
                <p className="text-sm">
                  Glasbak tussen 08:00 en 20:00 uur. Zo voorkom je geluidsoverlast voor omwonenden.
                </p>
              </div>

              <div className="bg-white border-2 border-glasbak-zwart p-6">
                <h3 className="font-bold text-lg mb-2">🧹 Spoelen?</h3>
                <p className="text-sm">
                  Niet nodig! Leeg is genoeg. Etiketten mogen ook blijven zitten.
                </p>
              </div>

              <div className="bg-white border-2 border-glasbak-zwart p-6">
                <h3 className="font-bold text-lg mb-2">📍 Glasbak Vol?</h3>
                <p className="text-sm">
                  Zet je glas nooit naast de bak! Zoek een andere glasbak of meld het bij je gemeente.
                </p>
              </div>

              <div className="bg-white border-2 border-glasbak-zwart p-6">
                <h3 className="font-bold text-lg mb-2">🎨 Twijfel over kleur?</h3>
                <p className="text-sm">
                  Blauw bij groen, andere kleuren ook bij groen of bruin. Bij twijfel: gewoon doen!
                </p>
              </div>
            </div>

            <div className="bg-glasbak-geel p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 uppercase">Jouw Impact</h2>
              <p className="mb-4">
                Wist je dat de gemiddelde Nederlander 45 kg glas per jaar weggooit?
                Als iedereen dat in de glasbak doet, besparen we:
              </p>
              <ul className="space-y-2">
                <li>🌍 <strong>300.000 ton CO2</strong> per jaar</li>
                <li>⚡ <strong>25% energie</strong> bij de productie van nieuw glas</li>
                <li>🏔️ <strong>Duizenden tonnen</strong> zand, kalksteen en soda</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Veelgestelde Situaties</h2>

            <div className="space-y-4 mb-8">
              <details className="bg-white border-2 border-glasbak-lichtgrijs p-4">
                <summary className="font-bold cursor-pointer">Mijn parfumflesje is leeg, mag dat in de glasbak?</summary>
                <p className="mt-2">Ja! Parfumflesjes mogen in de glasbak. Verwijder wel het pompje of de dop.</p>
              </details>

              <details className="bg-white border-2 border-glasbak-lichtgrijs p-4">
                <summary className="font-bold cursor-pointer">Ik heb een gebroken drinkglas, waar moet dat heen?</summary>
                <p className="mt-2">Drinkglazen horen NIET in de glasbak! Deze gaan bij het restafval vanwege de andere samenstelling.</p>
              </details>

              <details className="bg-white border-2 border-glasbak-lichtgrijs p-4">
                <summary className="font-bold cursor-pointer">De kurk zit vast in de fles, wat nu?</summary>
                <p className="mt-2">Probeer de kurk te verwijderen. Lukt het niet? Dan mag de fles met kurk bij het restafval.</p>
              </details>

              <details className="bg-white border-2 border-glasbak-lichtgrijs p-4">
                <summary className="font-bold cursor-pointer">Mag een kapotte spiegel in de glasbak?</summary>
                <p className="mt-2">Nee, spiegels horen niet in de glasbak. Deze gaan naar het grofvuil of de milieustraat.</p>
              </details>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg mb-8 text-center">
              <h2 className="text-2xl font-bold mb-4">WORD GLASBAK AMBASSADEUR!</h2>
              <p className="mb-6">
                Help mee om Nederland nog beter te laten glasbakken.
                Deel je glasbak-momentten op social media!
              </p>
              <p className="text-3xl font-bold mb-6">#ikglasbak</p>
              <div className="flex justify-center gap-4">
                <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">f</span>
                <span className="bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">t</span>
                <span className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">ig</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Leuke Weetjes</h2>
            <div className="bg-glasbak-grijs p-8 rounded-lg">
              <ul className="space-y-3">
                <li>🎂 De glasbak bestaat sinds 1978 - al meer dan 40 jaar!</li>
                <li>🏆 Nederland is kampioen glasrecycling in Europa</li>
                <li>🔄 Van glasbak tot nieuwe fles in slechts 30 dagen</li>
                <li>🎵 De Jeugd van Tegenwoordig maakte een nummer over de glasbak</li>
                <li>👕 Er bestaat een limited edition glasbaktrui!</li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-bold mb-4">Meer weten?</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/vragen" className="btn-secondary">
                  VEELGESTELDE VRAGEN
                </Link>
                <Link href="/contact" className="btn-primary">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}