import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card1 from './components/Card1.jsx';
import Jobscard from './components/Jobscard.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <>
    <Navbar />
    <Hero TITLE ="FIND YOUR DREAM JOB WITH JUST A CLICK" SUBTITLE ='FIND JOBS THAT MATCH YOUR SKILLSET AND NEEDS' />
    <Card1 />
    <Jobscard />
    <Footer />
    </>
  )
}

export default App