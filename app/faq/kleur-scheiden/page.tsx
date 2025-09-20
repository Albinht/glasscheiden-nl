import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function KleurScheidenPage() {
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
            HEEFT HET ZIN GLAS OP KLEUR TE SCHEIDEN?
          </h1>

          <div className="max-w-4xl">
            <p className="text-xl mb-8 font-semibold">
              Ja, glas op kleur scheiden heeft zeker zin! Het zorgt voor hoogwaardiger recycling en
              maakt het mogelijk om helder glas te blijven produceren.
            </p>

            <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">DE DRIE KLEUREN</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">⚪</span>
                  </div>
                  <h3 className="font-bold mb-2">WIT/HELDER GLAS</h3>
                  <p className="text-sm">Transparante flessen en potten zonder kleur</p>
                </div>

                <div className="bg-white p-6 rounded text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🟢</span>
                  </div>
                  <h3 className="font-bold mb-2">GROEN GLAS</h3>
                  <p className="text-sm">Groene wijnflessen en bierflesjes</p>
                </div>

                <div className="bg-white p-6 rounded text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🟤</span>
                  </div>
                  <h3 className="font-bold mb-2">BRUIN GLAS</h3>
                  <p className="text-sm">Bruine bierflessen en medicijnflesjes</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">WAAROM IS KLEURSCHEIDING BELANGRIJK?</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">Kwaliteit behouden</h3>
                <p>Wit glas kan alleen gemaakt worden van wit glasafval. Als er gekleurd glas tussen zit,
                   wordt het nieuwe glas troebel of verkleurd.</p>
              </div>

              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">Efficiënter recyclen</h3>
                <p>Gescheiden ingezameld glas hoeft niet meer gesorteerd te worden in de fabriek.
                   Dit bespaart tijd, energie en geld.</p>
              </div>

              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">Meer toepassingen</h3>
                <p>Zuiver wit glas is gewild voor nieuwe verpakkingen. Gemengd glas kan alleen voor
                   groen of bruin glas gebruikt worden.</p>
              </div>
            </div>

            <div className="bg-glasbak-geel p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">WAT ALS ER GEEN GESCHEIDEN BAKKEN ZIJN?</h3>
              <p className="mb-4">
                Niet overal in Nederland staan gescheiden glasbakken. Geen probleem!
                Als er alleen één glasbak staat, mag al het glas daar samen in.
              </p>
              <p>
                Het glas wordt dan in de recyclingfabriek alsnog op kleur gesorteerd met
                geavanceerde machines. Dit kost wel extra energie, maar is nog steeds
                veel beter dan geen recycling.
              </p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">💡 TIP</h3>
              <p>
                Twijfel je over de kleur? Blauw glas hoort bij groen, en alle andere kleuren
                (roze, geel, etc.) horen bij groen of bruin. Deze kleuren zijn zeldzaam en
                kunnen het beste bij de donkere kleuren.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">DE TOEKOMST VAN KLEURSCHEIDING</h3>
            <p className="mb-6">
              Steeds meer gemeenten plaatsen gescheiden glasbakken. De technologie voor
              automatische kleursortering wordt ook steeds beter. Het doel is om in de
              toekomst al het glas optimaal te kunnen recyclen, ongeacht de kleur.
            </p>

            <div className="text-center bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">DOE JE BEST!</h3>
              <p className="text-lg mb-4">
                Scheid op kleur als het kan, maar laat glas nooit thuis omdat je twijfelt.
                Liever in de verkeerde kleur dan helemaal niet in de glasbak!
              </p>
              <p className="text-xl font-bold">#ikglasbak</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}