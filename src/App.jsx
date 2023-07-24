import SEO from './utils/SEO'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <SEO />
      <div className="container px-16 mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
