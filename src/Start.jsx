import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card1 from './components/Card1';
import Jobscard from './components/Jobscard';
import Footer from './components/Footer';
function Start() {
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

export default Start