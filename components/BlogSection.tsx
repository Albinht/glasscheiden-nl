import Link from 'next/link'

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: 'AFTERMOVIE HEIMAAND GLASMAAND',
      date: '25 JUNI 2018',
      image: '/blog-1.jpg',
      link: '/blog/aftermovie-heimaand'
    },
    {
      id: 2,
      title: 'DE GOUDEN GLASBAK',
      date: '24 MEI 2018',
      image: '/blog-2.jpg',
      link: '/blog/gouden-glasbak'
    },
    {
      id: 3,
      title: "BN'ERS PRONKEN MET GLASBAKTRUI",
      date: '24 MEI 2018',
      image: '/blog-3.jpg',
      link: '/blog/bners-glasbaktrui'
    },
    {
      id: 4,
      title: "DE JEUGD VAN TEGENWOORDIG RELEAST 'GLASBAK'",
      date: '17 MEI 2018',
      image: '/blog-4.jpg',
      link: '/blog/jeugd-van-tegenwoordig'
    },
    {
      id: 5,
      title: 'WIN EEN EXCLUSIEVE GLASBAKTRUI!',
      date: '16 MEI 2018',
      image: '/blog-5.jpg',
      link: '/blog/win-glasbaktrui'
    },
    {
      id: 6,
      title: 'VIER HET FEEST MEE OP 17 MEI',
      date: '16 MEI 2018',
      image: '/blog-6.jpg',
      link: '/blog/feest-17-mei'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-glasbak">
        <div className="mb-12">
          <h2 className="text-3xl font-heading text-glasbak-zwart mb-4">
            VRAAG &apos;T AAN &apos;T BAKKIE
          </h2>
          <p className="text-lg">
            Voer hier je vraag in om te zoeken naar het antwoord. Kom je er niet uit? Je kunt ons ook op social media vinden voor vragen!
          </p>

          <div className="mt-6 flex gap-4">
            <input
              type="text"
              placeholder="Wat wil je weten?"
              className="search-bar flex-1"
            />
            <button className="btn-primary">
              ZOEKEN
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {blogs.map((blog) => (
            <Link href={blog.link} key={blog.id} className="group">
              <div className="bg-white overflow-hidden hover:shadow-xl transition-shadow border border-glasbak-lichtgrijs">
                <div className="aspect-w-16 aspect-h-9 bg-glasbak-grijs h-48 flex items-center justify-center relative">
                  {blog.id === 4 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 opacity-80"></div>
                  )}
                  {blog.id === 5 && (
                    <div className="absolute inset-0 bg-glasbak-geel flex items-center justify-center">
                      <span className="text-6xl">📧</span>
                    </div>
                  )}
                  {blog.id === 6 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-orange-400 opacity-80"></div>
                  )}
                  <div className="text-center p-4 z-10">
                    {blog.id < 4 && (
                      <svg className="w-16 h-16 mx-auto text-glasbak-donkergrijs opacity-20" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="currentColor"/>
                        <polygon points="40,30 40,70 70,50" fill="white"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base mb-2 uppercase group-hover:text-glasbak-geel transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-600 uppercase">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/nieuws" className="btn-secondary">
            MEER WEETJES
          </Link>
        </div>
      </div>
    </section>
  )
}