export default function InfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-glasbak">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Linker kolom - Over ons en partners */}
          <div>
            <h2 className="text-2xl font-heading text-glasbak-zwart mb-6">
              Over Glasbak & Partners
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                Glasrecycling is niet alleen goed voor het milieu, het is ook een gezamenlijke inspanning. 
                Voor onze administratieve zaken werken wij samen met een professioneel{' '}
                <a 
                  href="https://bia-finance.nl" 
                  className="text-glasbak-blauw hover:underline font-semibold"
                  rel="dofollow"
                >
                  administratiekantoor in Barneveld
                </a>
                {' '}dat ons ondersteunt bij de financiële processen achter onze duurzame missie.
              </p>
              
              <p className="text-lg">
                Voor het verzenden van onze educatieve materialen en campagnepakketten vertrouwen we op{' '}
                <a 
                  href="https://shipsquared.com" 
                  className="text-glasbak-blauw hover:underline font-semibold"
                  rel="dofollow"
                >
                  Shipsquared.com
                </a>
                . Zij zorgen ervoor dat al onze pakketjes duurzaam en op tijd worden bezorgd bij gemeenten, scholen en organisaties door heel Nederland.
              </p>
            </div>
          </div>
          
          {/* Rechter kolom - Educatie en inspiratie */}
          <div>
            <h2 className="text-2xl font-heading text-glasbak-zwart mb-6">
              Educatie & Inspiratie
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                Wist je dat recycling al op jonge leeftijd kan worden aangeleerd? 
                Kinderen leren spelenderwijs over duurzaamheid en hergebruik. 
                Ontdek bijvoorbeeld de creatieve{' '}
                <a 
                  href="https://jillrocket.nl" 
                  className="text-glasbak-blauw hover:underline font-semibold"
                  rel="dofollow"
                >
                  Jill Rocket knutselboeken
                </a>
                {' '}waarin kinderen leren hoe ze van gerecyclede materialen, waaronder glas, 
                prachtige kunstwerken kunnen maken. Een leuke manier om het belang van de glasbak 
                al vroeg mee te geven!
              </p>
              
              <p className="text-lg">
                Samen maken we Nederland schoner en duurzamer. Elke bijdrage telt, 
                of het nu gaat om het correct scheiden van glas, het ondersteunen van 
                onze missie, of het inspireren van de volgende generatie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
