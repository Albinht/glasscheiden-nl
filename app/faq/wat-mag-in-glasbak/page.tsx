import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WatMagInGlasbakPage() {
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
            WAT MAG ER IN DE GLASBAK?
          </h1>

          <div className="max-w-4xl">
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-800">WEL IN DE GLASBAK ✓</h2>
              <ul className="space-y-2">
                <li>✓ <strong>Glazen flessen:</strong> wijn-, bier-, frisdrankflessen</li>
                <li>✓ <strong>Glazen potten:</strong> jam-, groente-, sausenpotten</li>
                <li>✓ <strong>Glazen potjes:</strong> babyvoeding, augurken, olijven</li>
                <li>✓ <strong>Parfumflesjes</strong> (zonder dop)</li>
                <li>✓ <strong>Glazen verpakkingen</strong> van medicijnen</li>
              </ul>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-800">NIET IN DE GLASBAK ✗</h2>
              <ul className="space-y-2">
                <li>✗ <strong>Drinkglazen</strong> en serviesgoed</li>
                <li>✗ <strong>Hittebestendig glas:</strong> ovenschalen, theeglazen</li>
                <li>✗ <strong>Kristal</strong></li>
                <li>✗ <strong>Spiegels</strong> en vensterglas</li>
                <li>✗ <strong>Lampen</strong> en TL-buizen</li>
                <li>✗ <strong>Televisie- en computerschermen</strong></li>
                <li>✗ <strong>Autoruiten</strong></li>
                <li>✗ <strong>Porselein</strong> en aardewerk</li>
              </ul>
            </div>

            <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">WAAROM IS DIT BELANGRIJK?</h3>
              <p className="mb-4">
                Alleen verpakkingsglas kan eindeloos gerecycled worden zonder kwaliteitsverlies.
                Ander glassoorten hebben een andere samenstelling en smelttemperatuur.
                Als deze in de glasbak terechtkomen, verstoren ze het recyclingproces.
              </p>
              <p>
                Één drinkglas tussen het verpakkingsglas kan een hele batch nieuwe flessen verpesten!
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">TIPS VOOR HET GLASBAKKEN</h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Verwijder deksels en doppen (deze mogen bij het PMD-afval)</li>
              <li>Spoelen is niet nodig, leeg is voldoende</li>
              <li>Etiketten mogen blijven zitten</li>
              <li>Scheid op kleur als er aparte bakken zijn</li>
              <li>Glasbak tussen 08:00 en 20:00 uur (vanwege geluid)</li>
            </ul>

            <div className="bg-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">TWIJFEL JE NOG?</h3>
              <p className="mb-4">
                Bij twijfel: kijk naar het glasbak-logo op de verpakking!
                Dit symbool geeft aan dat het product in de glasbak mag.
              </p>
              <div className="text-center">
                <div className="inline-block bg-white p-4 rounded">
                  <svg className="w-16 h-16 text-glasbak-zwart" viewBox="0 0 100 100">
                    <rect x="20" y="30" width="60" height="50" fill="currentColor" opacity="0.3"/>
                    <rect x="30" y="20" width="40" height="60" fill="currentColor" opacity="0.6"/>
                    <circle cx="50" cy="50" r="15" fill="currentColor"/>
                  </svg>
                  <p className="text-sm mt-2">Glasbak logo</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}