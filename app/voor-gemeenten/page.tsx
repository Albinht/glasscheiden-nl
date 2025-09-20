import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VoorGemeentenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-donkergrijs text-white py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading">
              VOOR GEMEENTEN EN PARTNERS
            </h1>
            <p className="text-xl mt-4">
              Samen werken aan optimale glasrecycling in uw gemeente
            </p>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="max-w-4xl">
            <p className="text-xl mb-8 font-semibold">
              Nedvang ondersteunt gemeenten bij het optimaliseren van glasinzameling en het verhogen
              van de recyclingpercentages. Ontdek hoe wij u kunnen helpen.
            </p>

            <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 uppercase">Onze Diensten voor Gemeenten</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg mb-2">📊 Data & Analyse</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Inzamelcijfers per wijk</li>
                    <li>• Benchmarking met andere gemeenten</li>
                    <li>• Trendanalyses en prognoses</li>
                  </ul>
                </div>

                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg mb-2">🎯 Campagnemateriaal</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Gratis promotiemateriaal</li>
                    <li>• Lokale campagnes op maat</li>
                    <li>• Educatiepakketten voor scholen</li>
                  </ul>
                </div>

                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg mb-2">💡 Advies</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Optimalisatie glasbaklocaties</li>
                    <li>• Verbetering inzamelroutes</li>
                    <li>• Kostenbesparing strategieën</li>
                  </ul>
                </div>

                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg mb-2">💰 Vergoedingen</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Glasvergoeding per ton</li>
                    <li>• Extra bijdrage bij hoge kwaliteit</li>
                    <li>• Transparante afrekening</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">De Glasbakkenkaart</h2>
            <p className="mb-4">
              Help uw inwoners de dichtstbijzijnde glasbak te vinden met onze digitale glasbakkenkaart.
              Deze kan eenvoudig geïntegreerd worden op uw gemeentewebsite.
            </p>
            <div className="bg-glasbak-geel p-6 rounded-lg mb-8">
              <p className="font-bold mb-2">Voordelen van de glasbakkenkaart:</p>
              <ul className="space-y-1">
                <li>✓ Actuele locaties van alle glasbakken</li>
                <li>✓ Meldingsfunctie voor volle bakken</li>
                <li>✓ Routebeschrijving voor inwoners</li>
                <li>✓ Integratie met gemeentelijke apps</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Succesvolle Samenwerkingen</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">&apos;s-Hertogenbosch - Eerste Gouden Glasbak</h3>
                <p className="text-sm">Als geboorteplaats van de glasbak kreeg &apos;s-Hertogenbosch de eerste
                   Gouden Glasbak voor het 40-jarig jubileum. Een prachtig symbool van duurzame samenwerking.</p>
              </div>

              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">Rotterdam - Hoogste Inzamelcijfers</h3>
                <p className="text-sm">Door slimme plaatsing en actieve communicatie steeg het glasrecycling
                   percentage in Rotterdam naar recordhoogte.</p>
              </div>

              <div className="border-l-4 border-glasbak-geel pl-4">
                <h3 className="font-bold mb-2">Amsterdam - Innovatieve Ondergrondse Bakken</h3>
                <p className="text-sm">Pilot met ondergrondse glasbakken in het centrum zorgt voor meer
                   capaciteit en minder overlast.</p>
              </div>
            </div>

            <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">AANMELDEN VOOR GEMEENTENIEUWS</h2>
              <p className="mb-6">
                Ontvang maandelijks updates over best practices, nieuwe regelgeving en innovaties
                in glasrecycling.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="gemeente@voorbeeld.nl"
                  className="flex-1 px-4 py-3 bg-white text-black"
                />
                <button className="bg-glasbak-geel text-glasbak-zwart px-6 py-3 font-bold hover:bg-white">
                  AANMELDEN
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 uppercase">Downloads voor Gemeenten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <a href="#" className="bg-white border-2 border-glasbak-zwart p-4 hover:bg-glasbak-geel">
                <h3 className="font-bold">📄 Handleiding Glasinzameling</h3>
                <p className="text-sm">Complete gids voor optimale inzameling</p>
              </a>
              <a href="#" className="bg-white border-2 border-glasbak-zwart p-4 hover:bg-glasbak-geel">
                <h3 className="font-bold">📈 Benchmark Rapport 2018</h3>
                <p className="text-sm">Vergelijk uw prestaties</p>
              </a>
              <a href="#" className="bg-white border-2 border-glasbak-zwart p-4 hover:bg-glasbak-geel">
                <h3 className="font-bold">🎨 Campagnemateriaal</h3>
                <p className="text-sm">Posters, flyers en social media</p>
              </a>
              <a href="#" className="bg-white border-2 border-glasbak-zwart p-4 hover:bg-glasbak-geel">
                <h3 className="font-bold">📚 Educatiepakket</h3>
                <p className="text-sm">Lesmateriaal voor scholen</p>
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Direct Contact voor Gemeenten</h3>
              <p className="mb-6">
                Heeft u specifieke vragen of wilt u een afspraak maken?
                Neem contact op met ons gemeenteteam.
              </p>
              <div className="inline-block bg-glasbak-grijs p-6 rounded-lg">
                <p className="font-bold">gemeenten@nedvang.nl</p>
                <p>070 - 444 04 44</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}