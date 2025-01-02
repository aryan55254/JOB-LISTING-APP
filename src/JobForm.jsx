import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
{/*htmlfor is used to link label with its id in input and name is used for storing data with keys*/}
function JobForm() {
  return (
    <>
    <Navbar />
    <form className='w-full max-w-lg mx-auto bg-white p-6 shadow-lg rounded-sm'>
        <h2 className='font-bold text-3xl text-blue-600 mb-4'>Job Details</h2>
      <div className='space-y-4'>
      <div>
      <label htmlFor="title" className='text-xl mb-1 block font-medium'>Job Title:</label>
        <input className='rounded-md p-2 border border-gray-400 w-full font-medium ' id = " title" name = 'title' type='text' placeholder='e.g. react developer'></input>
      </div>
        <div>
        <label className='text-xl mb-1 block font-medium' htmlFor='type'>Type:</label>
        <select  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id='type' name = 'type' >
          <option value = 'option 1'>Full-Time</option>
          <option value ='option 2'>Part-Time</option>
        </select>
        </div>
        <div>
        <label className='text-xl mb-1 block font-medium' htmlFor="description">Job Description:</label>
        <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "description" name = 'description' type='text' placeholder='type thedescription of the role'></input>
        </div>
        <div>
        <label className='text-xl mb-1 block font-medium' htmlFor="location">Job Location:</label>
        <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "location" name = 'location' type='text' placeholder='e.g. Noida,U.P.'></input>
        </div>
      <div>
      <label className='text-xl mb-1 block font-medium' htmlFor="Salary">Per Month Salary:</label>
      <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "Salary" name = 'Salary' type='text' placeholder='eg.40k-50k'></input>
      </div>
        </div>  
        <h2 className='font-bold text-3xl text-blue-600 mb-4 mt-4'>Company details:</h2>
        <label className='text-xl mb-1 block font-medium' htmlFor="name">Company Name:</label>
        <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "name" name = 'name' type='text' placeholder='Name of the company'></input>
        <label className='text-xl mb-1 block font-medium' htmlFor="c-description">Company Description:</label>
        <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "c-description" name = 'c-description' type='text' placeholder='Description of the company'></input>
        <label className='text-xl mb-1 block font-medium' htmlFor="email">Company Email:</label>
        <input  className='rounded-md  border p-2 border-gray-400 w-full font-medium'  id = "email" name = 'email' type='text' placeholder='Email of the company'></input>
        <center>
        <button  className='bg-blue-600 text-white p-2 w-full hover:bg-white hover:text-blue-600 h-auto mt-4 rounded-md text-3xl border border-slate-600'>
            Submit
        </button>
        </center>
        <center>
        <button className='bg-red-600 text-white p-2 w-full  h-auto mt-4 rounded-md text-3xl border border-slate-600'>
            CLOSE
        </button>
        </center>
        
    </form>
    <Footer />
    </>
  )
}

export default JobForm