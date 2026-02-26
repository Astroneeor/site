import { useSmoothScroll } from './hooks/useSmoothScroll'
import StarBackground from './components/StarBackground'
import VineBackground from './components/VineBackground'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Showcase from './sections/Showcase'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative min-h-screen bg-forest-950">
      <StarBackground />
      <VineBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
