'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    onderwerp: 'algemeen',
    bericht: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-12">
          <div className="container-glasbak">
            <h1 className="text-4xl font-heading text-glasbak-zwart mb-4">
              CONTACT
            </h1>
            <p className="text-xl">
              Heb je een vraag? Wil je meer weten? Neem contact op!
            </p>
          </div>
        </div>

        <div className="container-glasbak py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">STUUR ONS EEN BERICHT</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="naam" className="block text-sm font-bold mb-2 uppercase">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-glasbak-zwart focus:outline-none focus:border-glasbak-geel"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-glasbak-zwart focus:outline-none focus:border-glasbak-geel"
                  />
                </div>

                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-bold mb-2 uppercase">
                    Onderwerp
                  </label>
                  <select
                    id="onderwerp"
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-glasbak-zwart focus:outline-none focus:border-glasbak-geel"
                  >
                    <option value="algemeen">Algemene vraag</option>
                    <option value="gemeente">Voor gemeenten</option>
                    <option value="media">Media/pers</option>
                    <option value="campagne">Over de campagne</option>
                    <option value="klacht">Klacht of melding</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bericht" className="block text-sm font-bold mb-2 uppercase">
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={6}
                    required
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-glasbak-zwart focus:outline-none focus:border-glasbak-geel"
                    placeholder="Typ hier je vraag of opmerking..."
                  />
                </div>

                <button type="submit" className="btn-primary">
                  VERSTUUR BERICHT
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">CONTACT INFORMATIE</h2>

              <div className="bg-glasbak-grijs p-8 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Nedvang</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Bezoekadres:</p>
                    <p>Overgoo 13</p>
                    <p>2266 JZ Leidschendam</p>
                  </div>
                  <div>
                    <p className="font-semibold">Postadres:</p>
                    <p>Postbus 190</p>
                    <p>2260 AD Leidschendam</p>
                  </div>
                </div>
              </div>

              <div className="bg-glasbak-geel p-8 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">BEREIKBAARHEID</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Telefoon:</p>
                    <p className="text-2xl">070 - 444 04 40</p>
                    <p className="text-sm">Ma-Vr: 9:00 - 17:00</p>
                  </div>
                  <div>
                    <p className="font-semibold">E-mail:</p>
                    <p>info@nedvang.nl</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-glasbak-zwart p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">VOOR SPECIFIEKE VRAGEN</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Gemeenten:</span>
                    <br />gemeenten@nedvang.nl
                  </li>
                  <li>
                    <span className="font-semibold">Pers & Media:</span>
                    <br />pers@nedvang.nl
                  </li>
                  <li>
                    <span className="font-semibold">Campagne:</span>
                    <br />glasintbakkie@nedvang.nl
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <h3 className="font-bold text-lg mb-4">VOLG ONS</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold hover:bg-blue-700">f</a>
                  <a href="#" className="bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold hover:bg-blue-500">t</a>
                  <a href="#" className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold hover:bg-purple-700">ig</a>
                </div>
                <p className="mt-4 font-bold">#ikglasbak</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}