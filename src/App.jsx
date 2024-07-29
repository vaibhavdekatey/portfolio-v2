import { useState } from 'react'
import './App.css'
import Hello from '../components/Hello'
import Hero from '../components/Hero'
import Navbar from '../components/Nav'
import Exp from '../components/Exp'
import Project from '../components/Projects'
import GetinTouch from '../components/GetinTouch'
import Footer from '../components/Footer'

function App() {
  
  return (
    <>
    
      <Navbar  />
      <Hello />
      <Hero  />
      <Exp />
      <Project />
      <GetinTouch />
      <Footer />

    </>
  )
}

export default App
