export default function LinkPartners() {
  const partners = [
    {
      category: 'Schilderen op nummer',
      links: [
        {
          text: 'nummers schilderen',
          url: 'https://schilderenopnummerwinkel.nl',
          description: 'Schilderen op nummer winkel'
        },
        {
          text: 'Paintingexpert',
          url: 'https://paintingexpert.nl',
          description: 'Painting Expert'
        }
      ]
    },
    {
      category: 'Diamond Painting',
      links: [
        {
          text: 'Diamondpaintings Kopen',
          url: 'https://diamondpaintingwinkel.com',
          description: 'Diamond painting winkel'
        }
      ]
    },
    {
      category: 'Modelbouw',
      links: [
        {
          text: 'Modelbouw collectie',
          url: 'https://swynk.com/nl/collections/modelbouw',
          description: 'Swynk modelbouw'
        }
      ]
    },
    {
      category: 'Nieuws in Barneveld',
      links: [
        {
          text: 'Barnevelds Dagblad',
          url: 'https://barneveldsdagblad.nl',
          description: 'Lokaal nieuws Barneveld'
        }
      ]
    },
    {
      category: 'Zakelijke Diensten',
      links: [
        {
          text: 'Administratie kantoor barneveld',
          url: 'https://bia-finance.nl',
          description: 'BIA Finance'
        },
        {
          text: '3pl texas',
          url: 'https://shipsquared.com',
          description: 'ShipSquared'
        }
      ]
    },
    {
      category: 'Knutselen',
      links: [
        {
          text: 'Jill rocket knutselboek',
          url: 'https://jillrocket.nl',
          description: 'Jill Rocket'
        }
      ]
    },
    {
      category: 'Schoenen',
      links: [
        {
          text: 'barefootschoenen dames',
          url: 'https://barefootschoenen.nl/collections/dames',
          description: 'Barefoot schoenen dames'
        }
      ]
    }
  ]

  return (
    <section className="bg-glasbak-grijs py-12">
      <div className="container-glasbak">
        <h2 className="text-2xl font-bold mb-8 text-center uppercase">Linkpartners</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded">
              <h3 className="font-bold text-glasbak-zwart mb-3 pb-2 border-b-2 border-glasbak-geel">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-glasbak-zwart hover:text-glasbak-geel transition-colors text-sm flex items-start"
                    >
                      <span className="text-glasbak-geel mr-2">●</span>
                      <span className="hover:underline">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}