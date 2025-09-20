import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NieuwsPage() {
  const nieuwsItems = [
    {
      id: 1,
      title: 'AFTERMOVIE MEIMAAND GLASMAAND',
      date: '25 JUNI 2018',
      excerpt: 'In Meimaand Glasmaand was de glasbak niet te missen! Bekijk nu de Aftermovie van dit spetterende feest.',
      link: '/blog/aftermovie-heimaand',
      featured: true
    },
    {
      id: 2,
      title: 'DE GOUDEN GLASBAK',
      date: '24 MEI 2018',
      excerpt: 'Om de glasbak te eren voor 40 jaar trouwe dienst, werd hij voorzien van een gouden jasje.',
      link: '/blog/gouden-glasbak'
    },
    {
      id: 3,
      title: "BN'ERS PRONKEN MET GLASBAKTRUI",
      date: '24 MEI 2018',
      excerpt: 'Rens Kroes, Anna Drijver en vele andere BN&apos;ers zijn gespot in de exclusieve Glasbaktrui.',
      link: '/blog/bners-glasbaktrui'
    },
    {
      id: 4,
      title: "DE JEUGD VAN TEGENWOORDIG RELEAST 'GLASBAK'",
      date: '17 MEI 2018',
      excerpt: 'Deze aanstekelijke plaat is gelanceerd op de veertigste verjaardag van de glasbak!',
      link: '/blog/jeugd-van-tegenwoordig'
    },
    {
      id: 5,
      title: 'WIN EEN EXCLUSIEVE GLASBAKTRUI!',
      date: '16 MEI 2018',
      excerpt: 'Deze stijlvolle trui is niet te koop, maar we mogen er wel ééntje weggeven!',
      link: '/blog/win-glasbaktrui'
    },
    {
      id: 6,
      title: 'VIER HET FEEST MEE OP 17 MEI',
      date: '16 MEI 2018',
      excerpt: 'Op 17 mei 2018 bestaat de glasbak precies 40 jaar. Een mijlpaal die we niet ongemerkt voorbij laten gaan!',
      link: '/blog/feest-17-mei'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart mb-4">
              NIEUWS & WEETJES
            </h1>
            <p className="text-xl">
              Het laatste nieuws over de glasbak en glasrecycling
            </p>
          </div>
        </div>

        <div className="container-glasbak py-12">
          {/* Featured Article */}
          {nieuwsItems.filter(item => item.featured).map(item => (
            <div key={item.id} className="mb-12 bg-glasbak-grijs p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="bg-glasbak-zwart text-glasbak-geel px-3 py-1 text-sm font-bold">UITGELICHT</span>
                <span className="ml-4 text-sm text-gray-600">{item.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg mb-6">{item.excerpt}</p>
              <Link href={item.link} className="btn-primary">
                LEES MEER
              </Link>
            </div>
          ))}

          {/* Archive Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 uppercase">Alle Nieuws</h2>
            <div className="flex gap-4 mb-6">
              <button className="px-4 py-2 bg-glasbak-zwart text-glasbak-geel font-bold">2018</button>
              <button className="px-4 py-2 border-2 border-glasbak-zwart hover:bg-glasbak-geel">2017</button>
              <button className="px-4 py-2 border-2 border-glasbak-zwart hover:bg-glasbak-geel">2016</button>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nieuwsItems.filter(item => !item.featured).map(item => (
              <article key={item.id} className="bg-white border-2 border-glasbak-lichtgrijs hover:border-glasbak-zwart transition-colors">
                <div className="aspect-w-16 aspect-h-9 bg-glasbak-grijs h-48 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">
                      {item.id === 2 && '🏆'}
                      {item.id === 3 && '👕'}
                      {item.id === 4 && '🎵'}
                      {item.id === 5 && '🎁'}
                      {item.id === 6 && '🎉'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm mb-4">{item.excerpt}</p>
                  <Link href={item.link} className="text-glasbak-zwart font-bold hover:text-glasbak-geel">
                    LEES MEER →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">BLIJF OP DE HOOGTE</h2>
            <p className="text-center mb-6">
              Ontvang het laatste nieuws over glasrecycling direct in je inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 px-4 py-3 bg-white text-black"
              />
              <button className="bg-glasbak-geel text-glasbak-zwart px-6 py-3 font-bold hover:bg-white">
                AANMELDEN
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Volg ons op social media</h3>
            <p className="mb-4">Voor dagelijkse updates en tips</p>
            <div className="flex justify-center gap-4">
              <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">f</span>
              <span className="bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">t</span>
              <span className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">ig</span>
            </div>
            <p className="mt-4 text-lg font-bold">#ikglasbak</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}