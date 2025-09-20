import BlogLayout from '@/components/BlogLayout'

export default function AftermoviePage() {
  return (
    <BlogLayout
      title="AFTERMOVIE MEIMAAND GLASMAAND"
      date="25 JUNI 2018"
    >
      <div className="space-y-6">
        <p className="text-xl font-semibold">
          In Meimaand Glasmaand was de glasbak niet te missen! Bekijk nu de Aftermovie van dit spetterende feest.
        </p>

        <div className="bg-glasbak-grijs p-8 rounded-lg my-8">
          <div className="aspect-w-16 aspect-h-9 bg-black flex items-center justify-center h-96">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto text-white opacity-80 mb-4" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
                <polygon points="40,30 40,70 70,50" fill="currentColor"/>
              </svg>
              <p className="text-white">Video: Aftermovie Meimaand Glasmaand</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Verjaardagsfeest in vogelvlucht</h2>

        <p>
          Op 17 mei 2018 bestond de glasbak precies 40 jaar. Om dat te vieren, pakt Glas in &apos;t Bakkie dit jaar uit met een speciale jubileumeditie. Van snelwegmasten met glasbakgebak tot Gouden Glasbakken en van influencers in Limited Edition Glasbaktruien tot een nummer van De Jeugd van Tegenwoordig: in &apos;meimaand glasmaand&apos; was de glasbak niet te missen!
        </p>

        <p className="font-semibold text-xl">
          Lekker bezig. Heb jij al geglasbakt?
        </p>

        <div className="bg-glasbak-geel p-6 rounded-lg mt-8">
          <p className="text-center font-bold text-xl">
            #ikglasbak
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-glasbak-grijs p-4 rounded">
            <h3 className="font-bold mb-2">Snelwegmasten</h3>
            <p className="text-sm">Met speciale verjaardagsboodschappen langs de weg</p>
          </div>
          <div className="bg-glasbak-grijs p-4 rounded">
            <h3 className="font-bold mb-2">Gouden Glasbakken</h3>
            <p className="text-sm">Speciaal voor het jubileum in goud uitgevoerd</p>
          </div>
          <div className="bg-glasbak-grijs p-4 rounded">
            <h3 className="font-bold mb-2">Glasbaktruien</h3>
            <p className="text-sm">Limited Edition truien voor influencers</p>
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}