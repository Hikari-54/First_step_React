import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import HeroSection from './components/heroSection/heroSection.jsx'
import NewCollection from './components/newCollection/newCollection.jsx'
import Aesthetic from './components/aesthetic/aesthetic.jsx'
import HowItWorks from './components/howItWorks/howItWorks'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NewCollection />
        <Aesthetic />
        <HowItWorks />
      </main>
    </>
  )
}

export default App
