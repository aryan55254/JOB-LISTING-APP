import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card1 from './components/Card1.jsx';
import Jobscard from './components/Jobscard.jsx';
import Footer from './components/Footer.jsx';
import { Route,Routes} from 'react-router-dom';
import Alljobs from './Alljobs.jsx';
import Jobform from './JobForm.jsx';
const App = () => {
  return (
    <>
    <Navbar />
    <Hero TITLE ="FIND YOUR DREAM JOB WITH JUST A CLICK" SUBTITLE ='FIND JOBS THAT MATCH YOUR SKILLSET AND NEEDS' />
    <Card1 />
    <Jobscard />
    <Footer />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/alljobs' element={<Alljobs />}/>
      <Route path='/addjobs' element={<Jobform />} />
    </Routes>
    </>
  )
}

export default App