import BlogLayout from '@/components/BlogLayout'

export default function BNersGlasbaktruiPage() {
  return (
    <BlogLayout
      title="BN'ERS PRONKEN MET GLASBAKTRUI"
      date="24 MEI 2018"
    >
      <div className="space-y-6">
        <p className="text-xl font-semibold">
          Heb jij de Glasbaktrui al voorbij zien komen? Rens Kroes, Anna Drijver en vele andere BN&apos;ers zijn de afgelopen dagen op Instagram gespot in deze stijlvolle trui. De exclusieve Glasbaktrui is ontworpen door Lernert & Sander ter ere van de 40e verjaardag van de glasbak.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">#ikglasbak op Instagram</h2>

        <p>
          De Glasbaktrui is gedrukt in een gelimiteerde oplage en opgestuurd naar Nederlandse vloggers en influencers met de vraag: &apos;Glasbak je mee?&apos;. Door een foto van de Glasbaktrui te delen laten deze influencers en vloggers zien dat ze de jarige glasbak een warm hart toedragen. De respons was groot! De Glasbaktrui dook op in posts en stories een flink aantal bekende Instagrammers.
        </p>

        <div className="bg-glasbak-geel p-6 rounded-lg my-8">
          <p className="text-center font-bold text-xl">
            Hou #ikglasbak in de gaten voor de meest recente updates!
          </p>
        </div>

        <p className="font-semibold mb-4">
          Hieronder een greep uit de foto&apos;s (klik op foto om te vergroten):
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {[
            '@annadrijve',
            '@kimvankootenista',
            '@mayralouise',
            '@lizekorpie',
            '@mandywoelkens',
            '@theklareuten',
            '@joostkroon',
            '@meryemfirst',
            '@fockeline'
          ].map((name) => (
            <div key={name} className="bg-glasbak-grijs p-4 rounded-lg">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded mb-2 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="40" r="15" fill="currentColor"/>
                  <path d="M50 55 Q50 70 50 70 Q30 70 30 55 Q30 55 50 55 Q70 55 70 70 Q70 70 50 70" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-sm font-semibold text-center">{name}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Iconisch beeldmerk</h2>

        <p>
          Ontwerpersduo Lernert & Sander, o.a. bekend van hun samenwerkingen met Jean Paul Gaultier en De Jeugd van Tegenwoordig, tekenden voor het ontwerp van de Glasbaktrui. De trui is onderdeel van de campagne rondom het 40-jarige bestaan van de glasbak in Nederland.
        </p>

        <blockquote className="bg-glasbak-lichtgrijs p-6 rounded-lg my-6 border-l-4 border-glasbak-zwart">
          <p className="italic">
            &quot;Wij vinden de glasbak een icoon in onze straten, die mag dus best wel eens in de spotlights staan&quot;
          </p>
          <p className="mt-2 text-sm">- Lernert & Sander</p>
        </blockquote>

        <p>
          Ook het glasbaklogo is Nederlands erfgoed, volgens Lernert & Sander. Normaal staat dit het glasbaklogo op flessen en potjes om aan te geven dat het glas in de glasbak mag worden gegooid. Juist door dit logo in een andere context te plaatsen wordt de iconische uitstraling van dit krachtige beeldmerk benadrukt.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Winactie Glasbaktrui</h2>

        <p>
          Zodra de eerste foto&apos;s van de Glasbaktrui online verschenen werd het campagneteam overspoeld met vragen waar de trui te verkrijgen was. Omdat de Glasbaktrui in een gelimiteerde oplage van 100 stuks is gemaakt is deze helaas nergens te koop. Gelukkig konden we er nog wel eentje weggeven via een winactie op Instagram en Facebook.
        </p>

        <div className="bg-glasbak-geel p-6 rounded-lg mt-8">
          <p className="font-bold text-center text-xl mb-2">🎉 WINNAAR 🎉</p>
          <p className="text-center">
            Met de onderstaande post is <strong>@fraise1982</strong> de gelukkige winnaar van een exclusieve Glasbaktrui geworden!
          </p>
        </div>

        <div className="bg-white border-2 border-glasbak-zwart p-8 mt-8 text-center">
          <div className="w-32 h-32 bg-glasbak-geel rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👕</span>
          </div>
          <h3 className="font-bold text-xl mb-2">Limited Edition</h3>
          <p className="text-sm">Slechts 100 stuks gemaakt</p>
          <p className="text-sm mt-2">Ontwerp: Lernert & Sander</p>
        </div>
      </div>
    </BlogLayout>
  )
}