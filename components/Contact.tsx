'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    bericht: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Bedankt voor uw aanvraag! Wij nemen binnen 24 uur contact met u op.')
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-gov">
        <h2 className="text-3xl font-bold mb-4 text-rijksoverheid-donkerblauw">Contact & Offerte Aanvraag</h2>
        <p className="text-lg mb-12 text-rijksoverheid-donkergrijs max-w-3xl">
          Vraag vrijblijvend een offerte aan of neem contact op voor meer informatie.
          Onze experts staan klaar om u te adviseren.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  required
                  value={formData.naam}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rijksoverheid-blauw"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rijksoverheid-blauw"
                />
              </div>

              <div>
                <label htmlFor="telefoon" className="block text-sm font-medium mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rijksoverheid-blauw"
                />
              </div>

              <div>
                <label htmlFor="bedrijf" className="block text-sm font-medium mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="bedrijf"
                  name="bedrijf"
                  value={formData.bedrijf}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rijksoverheid-blauw"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-medium mb-2">
                  Uw vraag of opmerking
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  value={formData.bericht}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rijksoverheid-blauw"
                  placeholder="Beschrijf uw project, aantal m², gewenste uitvoering, etc."
                />
              </div>

              <button type="submit" className="btn-primary">
                Verstuur aanvraag
              </button>
            </form>
          </div>

          <div>
            <div className="bg-rijksoverheid-lichtgrijs p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-rijksoverheid-donkerblauw">Direct Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-blauw mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Telefoon</p>
                    <p className="text-rijksoverheid-donkergrijs">088 - 123 45 67</p>
                    <p className="text-sm text-rijksoverheid-donkergrijs">Ma-Vr: 08:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-blauw mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-rijksoverheid-donkergrijs">info@glasscheiden.nl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-blauw mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Bezoekadres</p>
                    <p className="text-rijksoverheid-donkergrijs">
                      Glasweg 1<br />
                      1234 AB Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-rijksoverheid-blauw p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-rijksoverheid-donkerblauw">Waarom Glasscheiden.nl?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">25+ jaar ervaring in de branche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Eigen productie en montage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">NEN-EN-ISO 9001 gecertificeerd</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Werkzaam door heel Nederland</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rijksoverheid-groen mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Scherpe prijzen door directe inkoop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}