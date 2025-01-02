import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobsData from './jobs.json';
import { BrowserRouter, NavLink } from 'react-router-dom';
function Alljobs() {
    const jobs = JobsData.jobs;
    const [jobstate , setjobstate] = useState(null)
    const changejobstate = (job) => {setjobstate(job)}
    const closejobstate = () => {alert("Application Submitted");   setjobstate(null);}
    const justclose = () => { setjobstate(null);}
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
              onClick={()=>changejobstate(job)}
              className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700"
            >
              APPLY
            </button>
          </div>
        ))}
      </div>
   
     </section>
     <div className='bg-blue-100 flex justify-center items-center'>
     <BrowserRouter>
     <NavLink to='/alljobs'>
      <button className='bg-blue-500 w-full h-auto rounded-sm px-2 py-2 font-bold text-white hover:bg-blue-700 hover:text-black' >BACK TO TOP</button>
        </NavLink> 
     </BrowserRouter>
     
    </div>
      {
        jobstate && (
          <div className='z-40 bg-black  opacity-100 fixed'>
          <div className='z-50 fixed inset-0 flex justify-center items-center w-auto h-auto'>
          <form className='w-full max-w-lg bg-indigo-200 p-6 shadow-lg rounded-md border border-gray-200 m-4 '>
            <center><h1 className='text-3xl m-2 font-bold text-blue-600'>Apply For This Position</h1></center>
            <div className='flex justify-between'>
              <div><label htmlFor ='resume' className='text-2xl m-2 font-bold block'  >RESUME:</label></div>
             <div><input required id='resume' name='resume' placeholder='upload your resume' type='file' className='rounded-md border p-2 border-blue-600'  ></input> </div> 
            </div>
            <button onClick={justclose} className='bg-red-600 text-white rounded-md text-xl font-bold w-full p-2 m-2 '>CLOSE</button>
            <button onSubmit={()=>closejobstate()} className='rounded-md w-full bg-blue-600 text-white text-xl p-2 m-2'>Submit</button>
          </form>
          </div>
          </div>
        )
      }
    </>
  )
}

export default Alljobs