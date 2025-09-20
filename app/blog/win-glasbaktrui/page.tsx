import BlogLayout from '@/components/BlogLayout'

export default function WinGlasbaktruiPage() {
  return (
    <BlogLayout
      title="WIN EEN EXCLUSIEVE GLASBAKTRUI!"
      date="16 MEI 2018"
    >
      <div className="space-y-6">
        <p className="text-xl font-semibold">
          Wie wil er nou niet zo&apos;n mooie glasbaktrui? Deze stijlvolle trui is niet te koop, want hij is speciaal voor de verjaardag van de glasbak in een gelimiteerde oplage van 100 stuks uitgebracht. Gelukkig kunnen we er wel ééntje weggeven!
        </p>

        <div className="bg-glasbak-geel p-12 rounded-lg my-8">
          <div className="text-center">
            <div className="w-48 h-48 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-8xl">👕</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">EXCLUSIEVE GLASBAKTRUI</h2>
            <p className="text-lg">Limited Edition - Slechts 100 stuks</p>
            <p className="text-sm mt-4 italic">Foto: Pim Top</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Iconisch logo</h2>

        <p>
          Niet alleen de glasbak is een icoon in ons straatbeeld, ook het glasbaklogo is Nederlands erfgoed, aldus ontwerpers Studio Lernert & Sander. Daarom hebben zij een glasbaktrui ontworpen met daarop het bekende logo. De truien zijn in beperkte oplage gedrukt en rondgestuurd aan Nederlandse vloggers en influencers met de vraag: &apos;Glasbak je mee?&apos;.
        </p>

        <div className="bg-white border-4 border-glasbak-zwart p-8 rounded-lg my-8">
          <h2 className="text-2xl font-bold mb-4 text-center">📸 DEEL JOUW GLASBAK-FOTO EN WIN! 📸</h2>

          <p className="text-lg mb-4">
            Wij mogen één van de 100 exclusieve glasbaktruien van @lernertensander verloten. Laat zien dat JIJ die glasbaktrui verdient!
          </p>

          <div className="bg-glasbak-grijs p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Hoe doe je mee?</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Maak een foto van jezelf bij de glasbak</li>
              <li>Upload deze op Facebook of Instagram met <strong>#ikglasbak</strong></li>
              <li>Tag <strong>@glasscheiden</strong></li>
            </ol>
          </div>

          <p className="mt-6 text-center font-semibold">
            We maken de winnaar op de verjaardag van de glasbak bekend, donderdag 17 mei!
          </p>
        </div>

        <div className="bg-glasbak-lichtgrijs p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">Volg ons voor de laatste updates:</h3>
          <div className="space-y-2">
            <p>📘 Facebook: <a href="https://facebook.com/glasscheiden/" className="underline">facebook.com/glasscheiden/</a></p>
            <p>📷 Instagram: <a href="https://instagram.com/glasscheiden/" className="underline">instagram.com/glasscheiden/</a></p>
          </div>
        </div>

        <div className="bg-glasbak-geel p-6 rounded-lg mt-8 text-center">
          <p className="text-lg font-semibold mb-2">Inspiratie nodig?</p>
          <p>Zoek op <strong>#ikglasbak</strong> op Facebook en Instagram!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-glasbak-geel to-glasbak-donkergeel rounded-lg flex items-center justify-center">
              <span className="text-4xl opacity-50">📸</span>
            </div>
          ))}
        </div>

        <div className="bg-glasbak-zwart text-glasbak-geel p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">WINACTIE INFO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">100</p>
              <p className="text-sm">Exclusieve truien</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1</p>
              <p className="text-sm">Gelukkige winnaar</p>
            </div>
            <div>
              <p className="text-3xl font-bold">17/5</p>
              <p className="text-sm">Bekendmaking</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-2xl font-bold">Succes! 🍀</p>
        </div>
      </div>
    </BlogLayout>
  )
}