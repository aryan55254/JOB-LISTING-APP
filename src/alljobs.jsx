import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobsData from './jobs.json';
function Alljobs() {
    const jobs = JobsData.jobs;
    const [state , setstate] = useState(null)
    const changestate = (job) => {setstate(job)}
    const closestate = () => {setstate(null)}
  return (
    <>
    <Navbar />
     <section className='bg-blue-200 h-auto w-full py-6'>
      <center> <h1 className='text-2xl font-bold text-blue-600'> ALL JOBS</h1> </center>
     
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
          >
            <h2 className="bg-gray-700 text-white text-sm font-semibold inline-block px-2 py-1 rounded-md">
              {job.type}
            </h2>
            <h1 className="text-2xl font-bold mt-3 mb-2">{job.title}</h1>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-indigo-500 font-semibold">{job.salary}</h3>
              <h3 className='text-slate-600 font-semibold'>{job.company.name}</h3>
              <h3 className="text-red-500 font-semibold">{job.location}</h3>
            </div>
            <button
              onClick={changestate}
              className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              APPLY
            </button>
          </div>
        ))}
      </div>
   
     </section>
    <Footer />

    </>
  )
}

export default Alljobs