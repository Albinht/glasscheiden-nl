import BlogLayout from '@/components/BlogLayout'

export default function Feest17MeiPage() {
  return (
    <BlogLayout
      title="VIER HET FEEST MEE OP 17 MEI"
      date="16 MEI 2018"
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 p-12 rounded-lg text-white text-center">
          <h1 className="text-5xl font-bold mb-4">🎉 17 MEI 2018 🎉</h1>
          <p className="text-2xl">De glasbak wordt 40 jaar!</p>
        </div>

        <p className="text-xl font-semibold">
          Op 17 mei 2018 bestaat de glasbak precies 40 jaar. Een mijlpaal die we niet ongemerkt voorbij laten gaan! Vier het feest met ons mee en laat zien dat jij ook glasbakt.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Wat gebeurt er op 17 mei?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-glasbak-geel p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🏆 Gouden Glasbakken</h3>
            <p>In &apos;s-Hertogenbosch en Rotterdam worden speciale Gouden Glasbakken onthuld</p>
          </div>
          <div className="bg-glasbak-geel p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎵 Muziek Release</h3>
            <p>De Jeugd van Tegenwoordig lanceert hun nieuwe single &apos;Glasbak&apos;</p>
          </div>
          <div className="bg-glasbak-geel p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">👕 Winnaar Glasbaktrui</h3>
            <p>Bekendmaking van de winnaar van de exclusieve glasbaktrui</p>
          </div>
          <div className="bg-glasbak-geel p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📱 Social Media Feest</h3>
            <p>Deel jouw glasbak-moment met #ikglasbak</p>
          </div>
        </div>

        <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg my-8">
          <h2 className="text-2xl font-bold mb-4 text-center">DOE MEE!</h2>
          <p className="text-center text-lg">
            Maak een foto of video bij jouw lokale glasbak en deel deze op social media met
          </p>
          <p className="text-center text-3xl font-bold mt-4">#ikglasbak</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">40 jaar glasbak in cijfers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
            <p className="text-3xl font-bold">40</p>
            <p className="text-sm">Jaar oud</p>
          </div>
          <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
            <p className="text-3xl font-bold">25.000</p>
            <p className="text-sm">Glasbakken in NL</p>
          </div>
          <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
            <p className="text-3xl font-bold">73%</p>
            <p className="text-sm">Recycling rate</p>
          </div>
          <div className="bg-white border-2 border-glasbak-zwart p-4 text-center">
            <p className="text-3xl font-bold">♻️</p>
            <p className="text-sm">100% Recyclebaar</p>
          </div>
        </div>

        <div className="bg-glasbak-grijs p-6 rounded-lg my-8">
          <h3 className="font-bold text-lg mb-3">Waarom is de glasbak zo belangrijk?</h3>
          <ul className="space-y-2">
            <li>✓ Glas is oneindig recyclebaar zonder kwaliteitsverlies</li>
            <li>✓ Bespaart energie en grondstoffen</li>
            <li>✓ Vermindert CO2-uitstoot</li>
            <li>✓ Draagt bij aan circulaire economie</li>
          </ul>
        </div>

        <div className="text-center bg-glasbak-geel p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">LEKKER BEZIG!</h2>
          <p className="text-xl">
            Al 40 jaar glasbakken we samen voor een beter milieu.
          </p>
          <p className="text-lg mt-4">
            Op naar de volgende 40 jaar!
          </p>
          <p className="text-2xl mt-6">🎉 🍾 ♻️</p>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-glasbak-geel to-glasbak-donkergeel rounded-lg">
          <h3 className="font-bold text-xl mb-3 text-center">Volg het feest online!</h3>
          <div className="flex justify-center gap-6 text-sm">
            <span>📘 Facebook</span>
            <span>📷 Instagram</span>
            <span>🐦 Twitter</span>
          </div>
          <p className="text-center mt-4 font-bold">#ikglasbak #glasbak40jaar</p>
        </div>
      </div>
    </BlogLayout>
  )
}