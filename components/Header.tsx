import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-glasbak-geel">
      <div className="container-glasbak py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-4">
              <svg className="w-16 h-16" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="black"/>
                <path d="M30 30 L50 20 L70 30 L70 70 L50 80 L30 70 Z" fill="#FFC000"/>
                <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="black"/>
                <path d="M35 65 L65 65" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-heading text-glasbak-zwart mb-0">
                GLAS IN &apos;T BAKKIE
              </h1>
              <div className="flex gap-4 text-xs uppercase font-bold">
                <span className="text-glasbak-zwart">VOOR CONSUMENTEN</span>
                <span className="text-glasbak-donkergrijs">|</span>
                <span className="text-glasbak-donkergrijs">VOOR GEMEENTEN EN PARTNERS</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-glasbak-zwart font-bold hover:underline">HOME</Link></li>
              <li><Link href="/over" className="text-glasbak-zwart font-bold hover:underline">OVER</Link></li>
              <li><Link href="/vragen" className="text-glasbak-zwart font-bold hover:underline">VRAGEN</Link></li>
              <li><Link href="/nieuws" className="text-glasbak-zwart font-bold hover:underline">NIEUWS</Link></li>
              <li><Link href="/contact" className="text-glasbak-zwart font-bold hover:underline">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}