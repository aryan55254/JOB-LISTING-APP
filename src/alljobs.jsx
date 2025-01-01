import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobsData from '../src/jobs.json';
function alljobs() {
    const jobs = JobsData.jobs;
    const 
  return (
    <>
    <Navbar />

    <Footer />
    </>
  )
}

export default alljobs