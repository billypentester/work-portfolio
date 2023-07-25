import { useState, useEffect } from 'react'
import SEO from './utils/SEO'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Loader from './utils/Loader'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {
        loading ? ( <Loader /> ) : 
        (
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
    </>
  )
}

export default App
