import Image from 'next/image'
import HeroSection from './components/HeaderSection'
import Navbar from './components/Navigation'
import AboutSection from './components/About'
import Projects from './components/Projects'
import SocialSection from './components/Socials'
import FooterSection from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container-fluid">
      <Navbar />
     <div class="container mt-24 mx-auto px-8 py-8">
       <HeroSection />
       <AboutSection />
       <Projects />
       <SocialSection />
     </div>
     <FooterSection />
    </main>
  )
}
