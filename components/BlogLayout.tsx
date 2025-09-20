import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface BlogLayoutProps {
  children: React.ReactNode
  title: string
  date: string
}

export default function BlogLayout({ children, title, date }: BlogLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-glasbak-geel py-8">
          <div className="container-glasbak">
            <Link href="/" className="text-glasbak-zwart hover:underline text-sm font-bold uppercase">
              ← Terug naar home
            </Link>
          </div>
        </div>

        <article className="container-glasbak py-12">
          <header className="mb-8">
            <h1 className="text-4xl font-heading text-glasbak-zwart mb-2">
              {title}
            </h1>
            <p className="text-sm uppercase text-gray-600">{date}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </article>

        <div className="bg-glasbak-grijs py-8 mt-12">
          <div className="container-glasbak text-center">
            <h3 className="text-xl font-bold mb-4">Deel dit artikel</h3>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
                Facebook
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-500">
                Twitter
              </button>
              <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}