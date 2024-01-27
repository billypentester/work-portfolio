import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import themeChanger from './utils/themeChanger'

import GoTop from './components/GoTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Expertise from './components/Expertise'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Loader from './utils/Loader'
import Skeleton from './utils/Skeleton'

function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const themeParam = urlParams.get('theme');

  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      mirror: false
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    themeParam ? setTheme(themeParam) : setTheme('light');
    themeChanger(theme);
  }, [theme]);

  return (
    <React.Fragment>
      {
        loading ? 
          <Loader /> 
        : 
          <React.Fragment>
            <section className="container-fluid lg:container px-0 xl:px-16 mx-auto">
              <Navbar />
              <Hero />
              <Services />
              <Work />
              <Experience />
              <Publications />
              <Expertise />
              <Education />
              <Contact />
              <GoTop />
            </section>
            <Footer />
          </React.Fragment>
      }
    </React.Fragment>
  )
}

export default App
