import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-glasbak-geel">
      <div className="container-glasbak py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link href="https://facebook.com" className="bg-glasbak-zwart text-glasbak-geel w-10 h-10 flex items-center justify-center hover:bg-glasbak-donkergrijs">
              <span className="font-bold">f</span>
            </Link>
            <Link href="https://twitter.com" className="bg-glasbak-zwart text-glasbak-geel w-10 h-10 flex items-center justify-center hover:bg-glasbak-donkergrijs">
              <span className="font-bold">t</span>
            </Link>
            <Link href="https://linkedin.com" className="bg-glasbak-zwart text-glasbak-geel w-10 h-10 flex items-center justify-center hover:bg-glasbak-donkergrijs">
              <span className="font-bold">in</span>
            </Link>
            <Link href="https://instagram.com" className="bg-glasbak-zwart text-glasbak-geel w-10 h-10 flex items-center justify-center hover:bg-glasbak-donkergrijs">
              <span className="font-bold">ig</span>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-glasbak-zwart">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
            <span>© 2018 Nedvang</span>
            <span>|</span>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span>|</span>
            <Link href="/over" className="hover:underline">Over Glas in &apos;t Bakkie</Link>
            <span>|</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}