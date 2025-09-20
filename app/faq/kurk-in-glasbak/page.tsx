import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function KurkInGlasbakPage() {
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
              MAG EEN KURK IN DE GLASBAK?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-700 mb-2">NEE!</h2>
              <p className="text-lg">
                Kurken horen NIET in de glasbak. Ze moeten bij het restafval of, als het natuurkurk is, bij het GFT-afval.
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM GEEN KURKEN IN DE GLASBAK?</h2>
              <p className="mb-4">
                Kurken zijn gemaakt van organisch materiaal (kurkeik) of kunststof. Beide materialen kunnen niet samen met glas gerecycled worden. Als kurken in de glasoven terechtkomen, verbranden ze of smelten ze, wat de kwaliteit van het gerecyclede glas vermindert.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">WAT DOE JE MET KURKEN?</h2>

              <div className="bg-glasbak-grijs p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-3">NATUURKURK</h3>
                <ul className="space-y-2">
                  <li>• Bij het GFT-afval (biologisch afbreekbaar)</li>
                  <li>• Verzamelen voor speciale kurk-inzamelacties</li>
                  <li>• Hergebruiken voor knutselprojecten</li>
                </ul>
              </div>

              <div className="bg-glasbak-grijs p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-3">KUNSTSTOF KURKEN</h3>
                <ul className="space-y-2">
                  <li>• Bij het restafval</li>
                  <li>• Sommige gemeenten: bij plastic afval</li>
                  <li>• Check de afvalwijzer van je gemeente</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">TIP!</h2>
              <div className="bg-glasbak-geel p-6 rounded-lg">
                <p className="font-semibold">
                  Verwijder altijd kurken, doppen en deksels voordat je flessen en potten in de glasbak gooit. Een schone glasbak zorgt voor beter gerecycled glas!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Natuurkurk is 100% biologisch afbreekbaar en kan zelfs gecomposteerd worden. Het duurt ongeveer 3-4 jaar voordat een kurk volledig is afgebroken in de natuur. Kunststof kurken daarentegen hebben honderden jaren nodig om af te breken.
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ONTHOUD!</h3>
              <ul className="space-y-2">
                <li>✓ Haal kurken uit flessen</li>
                <li>✓ Natuurkurk → GFT of verzamelen</li>
                <li>✓ Kunststof kurk → Restafval</li>
                <li>✗ Nooit kurken in de glasbak</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}