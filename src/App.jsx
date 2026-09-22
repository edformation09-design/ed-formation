import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Formations from './sections/Formations'
import Format from './sections/Format'
import Method from './sections/Method'
import About from './sections/About'
import Why from './sections/Why'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import FinalCta from './sections/FinalCta'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  const handleOrientationClick = () => scrollToId('contact')
  const handleFormatClick = () => scrollToId('contact')

  return (
    <div className="min-h-screen bg-white">
      <Header onOrientationClick={handleOrientationClick} />
      <main>
        <Hero onOrientationClick={handleOrientationClick} />
        <Formations />
        <Format onChooseFormat={handleFormatClick} />
        <Method />
        <About />
        <Why />
        <FAQ />
        <Contact />
        <FinalCta onOrientationClick={handleOrientationClick} />
      </main>
      <Footer />
    </div>
  )
}

export default App