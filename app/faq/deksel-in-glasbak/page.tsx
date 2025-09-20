import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DekselInGlasbakPage() {
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
              MAG EEN DEKSEL IN DE GLASBAK?
            </h1>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-700 mb-2">NEE!</h2>
              <p className="text-lg">
                Metalen deksels en doppen horen NIET in de glasbak. Ze moeten bij het PMD-afval (Plastic, Metaal en Drinkpakken).
              </p>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">WAAROM GEEN DEKSELS IN DE GLASBAK?</h2>
              <p className="mb-4">
                Deksels zijn meestal gemaakt van metaal (zoals aluminium of blik) of plastic. Deze materialen hebben een ander smeltpunt dan glas en verstoren het recyclingproces. Metalen deksels kunnen de glasovens beschadigen en de kwaliteit van het nieuwe glas verminderen.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">SOORTEN DEKSELS EN HUN BESTEMMING</h2>

              <div className="bg-glasbak-grijs p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-3">METALEN DEKSELS</h3>
                <ul className="space-y-2">
                  <li>• Twist-off deksels van jampotten → PMD-afval</li>
                  <li>• Bierflessendoppen → PMD-afval</li>
                  <li>• Conservenblikdeksels → PMD-afval</li>
                  <li>• Weckpotdeksels → PMD-afval</li>
                </ul>
              </div>

              <div className="bg-glasbak-grijs p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-3">PLASTIC DOPPEN</h3>
                <ul className="space-y-2">
                  <li>• Schroefdoppen van flessen → PMD-afval</li>
                  <li>• Deksels van pindakaaspotten → PMD-afval</li>
                  <li>• Plastic wijndoppen → PMD-afval</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">HOE DOE JE HET GOED?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-glasbak-geel p-4 text-center">
                  <div className="text-3xl mb-2">1️⃣</div>
                  <p className="font-semibold">Verwijder het deksel</p>
                </div>
                <div className="bg-glasbak-geel p-4 text-center">
                  <div className="text-3xl mb-2">2️⃣</div>
                  <p className="font-semibold">Glas in de glasbak</p>
                </div>
                <div className="bg-glasbak-geel p-4 text-center">
                  <div className="text-3xl mb-2">3️⃣</div>
                  <p className="font-semibold">Deksel bij PMD</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">VEELGESTELDE SITUATIES</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Het deksel zit vast op de pot</p>
                  <p>Probeer het deksel los te draaien met een theedoek voor meer grip. Lukt het niet? Gooi het dan met deksel en al bij het restafval.</p>
                </div>
                <div className="border-l-4 border-glasbak-zwart pl-4">
                  <p className="font-semibold">Weckpotten met rubberen ring</p>
                  <p>Glas in de glasbak, metalen beugels en deksel bij PMD, rubber ring bij restafval.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">WIST JE DAT?</h2>
              <p className="mb-4">
                Één metalen deksel in een partij gerecycled glas kan een hele batch verpesten. Daarom worden glasbakken vaak gecontroleerd met magneten om metalen voorwerpen te verwijderen voordat het glas de oven ingaat.
              </p>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SAMENGEVAT</h3>
              <ul className="space-y-2">
                <li>✓ Altijd deksels verwijderen</li>
                <li>✓ Metalen deksels → PMD</li>
                <li>✓ Plastic doppen → PMD</li>
                <li>✗ Nooit deksels in de glasbak</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}