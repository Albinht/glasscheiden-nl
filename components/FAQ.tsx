import Link from 'next/link'

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'Heeft het zin glas op kleur te scheiden?',
      date: '8 MEI 2018',
      image: '/faq-1.jpg',
      link: '/faq/kleur-scheiden'
    },
    {
      id: 2,
      question: 'Wat mag er in de glasbak?',
      date: '30 APRIL 2018',
      image: '/faq-2.jpg',
      link: '/faq/wat-mag-in-glasbak'
    },
    {
      id: 3,
      question: 'Waarom scheiden we glas?',
      date: '25 APRIL 2018',
      image: '/faq-3.jpg',
      link: '/faq/waarom-scheiden'
    }
  ]

  return (
    <section className="bg-glasbak-geel py-16">
      <div className="container-glasbak">
        <h2 className="text-3xl font-heading text-glasbak-zwart text-center mb-12">
          VEELGESTELDE VRAGEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {faqs.map((faq) => (
            <Link href={faq.link} key={faq.id} className="group">
              <div className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-glasbak-grijs h-48 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-16 h-16 mx-auto mb-2 text-glasbak-geel" viewBox="0 0 100 100">
                      <rect x="10" y="20" width="30" height="50" fill="currentColor" opacity="0.8"/>
                      <rect x="35" y="30" width="30" height="50" fill="currentColor" opacity="0.6"/>
                      <rect x="60" y="15" width="30" height="55" fill="currentColor" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 uppercase group-hover:text-glasbak-geel transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-gray-600 uppercase">{faq.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/vragen" className="btn-secondary">
            MEER VRAGEN
          </Link>
        </div>
      </div>
    </section>
  )
}