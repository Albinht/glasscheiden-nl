import BlogLayout from '@/components/BlogLayout'

export default function JeugdVanTegenwoordigPage() {
  return (
    <BlogLayout
      title="DE JEUGD VAN TEGENWOORDIG RELEAST 'GLASBAK'"
      date="17 MEI 2018"
    >
      <div className="space-y-6">
        <p className="text-xl font-semibold">
          Heb jij &apos;Glasbak&apos; van De Jeugd van Tegenwoordig al gehoord? Deze aanstekelijke plaat is vandaag gelanceerd en laat dat nou precies op de veertigste verjaardag van de glasbak zijn! Een prachtige muzikale omlijsting van ons verjaardagsfeest. Bekijk de video hieronder!
        </p>

        <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-12 rounded-lg my-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">🎵 GLASBAK 🎵</h2>
            <p className="text-white text-xl mb-2">De Jeugd van Tegenwoordig</p>
            <p className="text-white">Released: 17 mei 2018</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Glasbak mee!</h2>

        <p className="text-lg">
          De jongens van De Jeugd glasbakken ook! Glasbak je mee? Deel de video en schreeuw het van de daken:
        </p>

        <div className="bg-glasbak-geel p-8 rounded-lg my-8 text-center">
          <p className="text-3xl font-bold">#ikglasbak</p>
          <p className="mt-4 text-lg">
            Samen maken we er een onvergetelijke verjaardag van!
          </p>
        </div>

        <p>
          Ga naar het YouTube-kanaal van TopNotch om de video van &apos;Glasbak&apos; te bekijken en te beluisteren of bekijk de video hieronder:
        </p>

        <div className="bg-black p-8 rounded-lg my-8">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center h-96">
            <div className="text-center">
              <svg className="w-32 h-32 mx-auto text-red-600 mb-4" viewBox="0 0 100 100">
                <rect x="10" y="25" width="80" height="50" rx="10" fill="currentColor"/>
                <polygon points="40,40 40,60 60,50" fill="white"/>
              </svg>
              <p className="text-white text-lg">YouTube Video</p>
              <p className="text-gray-400 mt-2">De Jeugd van Tegenwoordig - Glasbak (Official Video)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">🎤</span>
            <h3 className="font-bold">De Jeugd</h3>
            <p className="text-sm mt-2">Nederlandse hip-hop groep</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 to-orange-200 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">🎉</span>
            <h3 className="font-bold">40 Jaar</h3>
            <p className="text-sm mt-2">Speciaal verjaardagsnummer</p>
          </div>
          <div className="bg-gradient-to-br from-green-200 to-blue-200 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">♻️</span>
            <h3 className="font-bold">Glasbakken</h3>
            <p className="text-sm mt-2">Voor een beter milieu</p>
          </div>
        </div>

        <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">LYRICS PREVIEW</h3>
          <div className="text-center font-mono">
            <p>&quot;Glasbak, glasbak&quot;</p>
            <p>&quot;Gooi het in de glasbak&quot;</p>
            <p>&quot;Groen, wit, bruin&quot;</p>
            <p>&quot;Sorteer je glas, dat is niet stom maar slim&quot;</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold mb-4">Stream het nummer op:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">
              Spotify
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900">
              Apple Music
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700">
              YouTube Music
            </button>
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}