import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container-fluid">
     <div class="container mx-auto px-8 py-8">
       <HeroSection />
     </div>
    </main>
  )
}
