import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCard from './sections/FeatureCard.jsx'
import Experiance from './sections/Experiance.jsx'

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Showcase/>
    <LogoSection/>
    <FeatureCard/>
    <Experiance/>
    </>
  )
}

export default App