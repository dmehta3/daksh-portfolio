import Image from 'next/image'
import HeroSection from './components/headerSection'
import Navbar from './components/navigation'
import AboutSection from './components/about'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container-fluid">
      <Navbar />
     <div class="container mt-24 mx-auto px-8 py-8">
       <HeroSection />
       <AboutSection />
     </div>
    </main>
  )
}
