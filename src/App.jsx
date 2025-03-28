import './App.css'
import React from 'react'
import Header from "./Components/Header"
import About from "./Components/About"
import HeroSection from "./Components/HeroSection"
import Value from './Components/Value'
import NewServices from './Components/NewServices.jsx'
import Technologies from './Components/Technologies.jsx'
import AutoplayCarousel from './Components/AutoplayCarousel.jsx'
import SecondCaraseoul from './Components/SecondCaraseoul.jsx'
import Boosting from './Components/Boosting.jsx'
import Testimonial from './Components/Testimonial.jsx'
import RunningBanner from "./Components/RunningBanner.jsx"
import Industry from "./Components/Industry.jsx"
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <main className='w-full max-w-[1700px] mx-auto font-[Raleway] tracking-wide scroll-smooth'>
        <Header />
        <div className='max-w-[1500px] mx-auto '>
          <HeroSection />
          <About />
          <Value />
          <NewServices />
          <Technologies />
          <AutoplayCarousel />
          <SecondCaraseoul />
          <Boosting />
          <Testimonial />
          <RunningBanner />
          <Industry />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
