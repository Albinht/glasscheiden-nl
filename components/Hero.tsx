import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-rijksoverheid-lichtgrijs py-16 md:py-24">
      <div className="container-gov">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / Glasscheiden
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-rijksoverheid-donkerblauw">
            Professionele Glasscheiden voor uw Bedrijf
          </h1>

          <p className="text-xl mb-8 text-rijksoverheid-donkergrijs leading-relaxed">
            Creëer een moderne, transparante werkomgeving met onze hoogwaardige glasscheiden.
            Optimale lichtinval, geluidsisolatie en een professionele uitstraling voor uw kantoor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary">
              Vraag offerte aan
            </Link>
            <Link href="#diensten" className="btn-secondary">
              Bekijk mogelijkheden
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded border-l-4 border-rijksoverheid-blauw">
              <h3 className="font-semibold text-rijksoverheid-donkerblauw mb-1">Maatwerk</h3>
              <p className="text-sm">Op maat gemaakte oplossingen voor elke ruimte</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-rijksoverheid-blauw">
              <h3 className="font-semibold text-rijksoverheid-donkerblauw mb-1">Certificering</h3>
              <p className="text-sm">Voldoet aan alle veiligheidsnormen en NEN-certificeringen</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-rijksoverheid-blauw">
              <h3 className="font-semibold text-rijksoverheid-donkerblauw mb-1">Garantie</h3>
              <p className="text-sm">10 jaar garantie op materiaal en montage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}