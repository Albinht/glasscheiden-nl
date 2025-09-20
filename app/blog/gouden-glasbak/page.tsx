import BlogLayout from '@/components/BlogLayout'

export default function GoudenGlasbakPage() {
  return (
    <BlogLayout
      title="DE GOUDEN GLASBAK"
      date="24 MEI 2018"
    >
      <div className="space-y-6">
        <p className="text-xl font-semibold">
          Om de glasbak te eren voor 40 jaar trouwe dienst, werd hij voorzien van een gouden jasje. Op 17 mei werd er een Gouden Glasbak geplaatst in het centrum van &apos;s-Hertogenbosch en eentje naast de Markthal in Rotterdam.
        </p>

        <div className="bg-glasbak-geel p-8 rounded-lg my-8">
          <h2 className="text-2xl font-bold mb-4">Een blinkend gouden jasje</h2>
          <p>
            In zijn 40-jarige bestaan, heeft de glasbak ervoor gezorgd dat gescheiden glasinzameling voor de meeste mensen de normaalste zaak van de wereld is geworden. Dat is nogal een prestatie! Om dat te eren, werd de glasbak voor zijn verjaardag voorzien van een blinkend gouden jasje. Daarvoor werd het allereerste ontwerp glasbak gebruikt: de hoekige, oorspronkelijk gele glasbak die nog op sommige plaatsen in Nederland te vinden is.
          </p>
        </div>

        <div className="my-12">
          <div className="bg-glasbak-grijs p-8 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 bg-glasbak-geel flex items-center justify-center h-64">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-glasbak-zwart" viewBox="0 0 100 100">
                  <rect x="20" y="20" width="60" height="60" fill="currentColor" opacity="0.2"/>
                  <rect x="25" y="25" width="50" height="50" fill="gold"/>
                </svg>
                <p className="mt-4 text-sm italic">Plaatsing van de Gouden Glasbak in &apos;s-Hertogenbosch</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Voor de Arena in &apos;s-Hertogenbosch</h2>

        <p>
          De eerste gemeentelijke glasbak van Nederland stond in &apos;s-Hertogenbosch, dus het is dan ook niet meer dan logisch dat de eerste Gouden Glasbak ook daar een plekje krijgt. Op donderdagochtend 17 mei 2018 werd de Gouden Glasbak met de nodige aandacht op het plein voor winkelcentrum Arena geplaatst. Hij werd daar in ontvangst genomen door wethouder Jan Hoskam, die de glasbak ceremonieel in gebruik nam door er het eerste lege potje in te gooien.
        </p>

        <div className="bg-glasbak-lichtgrijs p-6 rounded-lg">
          <p className="italic">
            De Gouden Glasbak blijft nog tot het einde van mei op deze locatie staan, daarna krijgt hij een ander mooi plekje in &apos;s-Hertogenbosch.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Naast de Markthal in Rotterdam</h2>

        <p>
          Ook in Rotterdam werd op 17 mei een Gouden Glasbak onthuld. Lekker centraal, pal naast de Markthal. Niet helemaal toevallig &apos;de achtertuin&apos; van Nedvang, de organisatie verantwoordelijk voor de uitvoering van de Glas in &apos;t Bakkie-campagne. De Gouden Glasbak werd feestelijk onthaald door de directeur van Nedvang, Marchel van de Grift, en de directeur Stadsbeheer Rotterdam, David Berg.
        </p>

        <div className="bg-glasbak-geel p-6 rounded-lg mt-8">
          <p className="font-semibold">
            De Gouden Glasbak naast de Markthal is inmiddels al weer weg. Tot een nieuwe locatie is gevonden, bevindt hij zich op een geheime opslaglocatie…
          </p>
          <p className="mt-4">
            Ideeën over waar de Gouden Glasbak heen moet? Neem contact op met Nedvang via <a href="mailto:info@nedvang.nl" className="underline">info@nedvang.nl</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white border-2 border-glasbak-zwart p-6">
            <h3 className="font-bold text-lg mb-2">&apos;s-Hertogenbosch</h3>
            <p className="text-sm">Eerste gemeentelijke glasbak van Nederland</p>
            <p className="text-sm mt-2">📍 Winkelcentrum Arena</p>
          </div>
          <div className="bg-white border-2 border-glasbak-zwart p-6">
            <h3 className="font-bold text-lg mb-2">Rotterdam</h3>
            <p className="text-sm">Naast de iconische Markthal</p>
            <p className="text-sm mt-2">📍 Centrum Rotterdam</p>
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}