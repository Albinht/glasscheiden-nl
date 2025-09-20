export default function SocialSection() {
  return (
    <section className="py-16 bg-glasbak-grijs">
      <div className="container-glasbak">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Facebook */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Facebook</h3>
            <div className="bg-glasbak-lichtgrijs p-4 mb-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl mr-3">
                  f
                </div>
                <div>
                  <p className="font-semibold">Glas in &apos;t Bakkie</p>
                  <button className="text-blue-600 text-sm">Like Page</button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                10K likes
              </p>
            </div>
            <p className="text-sm">
              Volg ons op Facebook voor het laatste nieuws over glasrecycling!
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Instagram</h3>
            <div className="bg-glasbak-lichtgrijs p-4 mb-4">
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400"></div>
                ))}
              </div>
            </div>
            <button className="text-purple-600 font-semibold text-sm">
              Follow on Instagram
            </button>
          </div>

          {/* Twitter */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Twitter</h3>
            <div className="bg-glasbak-lichtgrijs p-4 mb-4">
              <p className="text-sm mb-2">
                Tweets over #ikglasbak
              </p>
              <div className="border-t pt-2">
                <p className="text-xs text-gray-600 mb-1">@glasintbakkie</p>
                <p className="text-sm">
                  Op 17 mei bestaat de glasbak 40 jaar! 🎉 Vier het met ons mee! #ikglasbak
                </p>
              </div>
            </div>
            <button className="text-blue-400 font-semibold text-sm">
              Follow @glasintbakkie
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}