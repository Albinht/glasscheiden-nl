import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VragenPage() {
  const vragenCategorieen = [
    {
      titel: 'Wat mag wel en niet in de glasbak?',
      vragen: [
        { vraag: 'Wat mag er in de glasbak?', link: '/faq/wat-mag-in-glasbak' },
        { vraag: 'Mag een kurk in de glasbak?', link: '/faq/kurk-in-glasbak' },
        { vraag: 'Mag een deksel in de glasbak?', link: '/faq/deksel-in-glasbak' },
        { vraag: 'Mag een lampje in de glasbak?', link: '/faq/lampje-in-glasbak' },
      ]
    },
    {
      titel: 'Over glasrecycling',
      vragen: [
        { vraag: 'Waarom scheiden we glas?', link: '/faq/waarom-scheiden' },
        { vraag: 'Heeft het zin glas op kleur te scheiden?', link: '/faq/kleur-scheiden' },
        { vraag: 'Hoe wordt glas gerecycled?', link: '/faq/hoe-wordt-gerecycled' },
        { vraag: 'Hoeveel keer kan glas gerecycled worden?', link: '/faq/hoeveel-keer-recyclen' },
      ]
    },
    {
      titel: 'Praktische vragen',
      vragen: [
        { vraag: 'Waar vind ik de dichtstbijzijnde glasbak?', link: '/faq/glasbak-vinden' },
        { vraag: 'Wat als de glasbak vol is?', link: '/faq/glasbak-vol' },
        { vraag: 'Tussen welke tijden mag ik glasbakken?', link: '/faq/glasbak-tijden' },
        { vraag: 'Moet ik mijn glas spoelen?', link: '/faq/glas-spoelen' },
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart mb-4">
              VEELGESTELDE VRAGEN
            </h1>
            <p className="text-xl">
              Alles wat je wilt weten over glasbakken en glasrecycling
            </p>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="mb-8">
            <div className="bg-glasbak-grijs p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-3">Snel antwoord nodig?</h2>
              <input
                type="text"
                placeholder="Zoek je vraag..."
                className="w-full px-4 py-3 border-2 border-glasbak-zwart focus:outline-none focus:border-glasbak-geel"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link href="/faq/wat-mag-in-glasbak" className="bg-white border-2 border-glasbak-zwart p-6 hover:bg-glasbak-geel transition-colors">
              <div className="text-4xl mb-3">🍾</div>
              <h3 className="font-bold text-lg">WAT MAG ER IN?</h3>
              <p className="text-sm mt-2">Leer wat wel en niet in de glasbak mag</p>
            </Link>
            <Link href="/faq/waarom-scheiden" className="bg-white border-2 border-glasbak-zwart p-6 hover:bg-glasbak-geel transition-colors">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-bold text-lg">WAAROM SCHEIDEN?</h3>
              <p className="text-sm mt-2">Ontdek waarom glasrecycling belangrijk is</p>
            </Link>
            <Link href="/faq/kleur-scheiden" className="bg-white border-2 border-glasbak-zwart p-6 hover:bg-glasbak-geel transition-colors">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg">KLEUREN SCHEIDEN?</h3>
              <p className="text-sm mt-2">Heeft scheiden op kleur zin?</p>
            </Link>
          </div>

          {vragenCategorieen.map((categorie, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 uppercase bg-glasbak-geel p-4">
                {categorie.titel}
              </h2>
              <div className="space-y-4">
                {categorie.vragen.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-4 bg-white border-l-4 border-glasbak-zwart hover:border-glasbak-geel hover:bg-glasbak-grijs transition-all"
                  >
                    <p className="font-semibold text-lg">{item.vraag}</p>
                    <span className="text-glasbak-geel">Lees meer →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">STAAT JOUW VRAAG ER NIET BIJ?</h2>
            <p className="mb-6">
              Neem contact met ons op, we helpen je graag verder!
            </p>
            <Link href="/contact" className="bg-glasbak-geel text-glasbak-zwart px-8 py-3 inline-block font-bold hover:bg-white transition-colors">
              STEL JE VRAAG
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}