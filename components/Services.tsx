export default function Services() {
  const services = [
    {
      title: 'Kantoor Glaswanden',
      description: 'Transparante scheiding tussen werkplekken met behoud van licht en ruimtelijk gevoel. Ideaal voor moderne kantoren.',
      features: ['Geluidsisolatie tot 45dB', 'Enkelglas of dubbelglas', 'Diverse profielsystemen']
    },
    {
      title: 'Glazen Deuren',
      description: 'Stijlvolle glazen deuren die perfect aansluiten bij uw glaswanden. Keuze uit draaideuren, schuifdeuren of taatsdeuren.',
      features: ['Gehard veiligheidsglas', 'Privacy folie mogelijk', 'RVS of aluminium scharnieren']
    },
    {
      title: 'Akoestische Glaswanden',
      description: 'Speciale glaswanden met superieure geluidsisolatie voor vergaderzalen en concentratiewerkplekken.',
      features: ['Tot 52dB geluidsreductie', 'Dubbele beglazing', 'Akoestische afdichting']
    },
    {
      title: 'Brandwerende Glaswanden',
      description: 'Veiligheidsglas dat voldoet aan de hoogste brandwerendheidsnormen. Essentieel voor vluchtroutes en compartimentering.',
      features: ['30-120 minuten brandwerend', 'NEN 6069 gecertificeerd', 'Transparant of getint']
    }
  ]

  return (
    <section id="diensten" className="py-16 bg-white">
      <div className="container-gov">
        <h2 className="text-3xl font-bold mb-4 text-rijksoverheid-donkerblauw">Onze Diensten</h2>
        <p className="text-lg mb-12 text-rijksoverheid-donkergrijs max-w-3xl">
          Wij bieden een compleet assortiment glasscheiden voor elk type bedrijfsruimte.
          Van standaard kantoorwanden tot specialistische oplossingen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-3 text-rijksoverheid-blauw">
                {service.title}
              </h3>
              <p className="mb-4 text-rijksoverheid-donkergrijs">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-rijksoverheid-lichtgrijs rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-rijksoverheid-donkerblauw">Aanvullende Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-rijksoverheid-blauw mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Gratis inmeting op locatie</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-rijksoverheid-blauw mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>3D visualisatie vooraf</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-rijksoverheid-blauw mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Onderhoud en service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}