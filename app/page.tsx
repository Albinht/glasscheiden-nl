import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import FAQ from '@/components/FAQ'
import BlogSection from '@/components/BlogSection'
import SocialSection from '@/components/SocialSection'
import LinkPartners from '@/components/LinkPartners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <FAQ />
        <BlogSection />
        <SocialSection />
        <LinkPartners />
      </main>
      <Footer />
    </>
  )
}
