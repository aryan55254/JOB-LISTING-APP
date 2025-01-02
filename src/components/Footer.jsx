import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-blue-100 flex justify-center items-center'>
    <BrowserRouter>
    <NavLink to='/' >
     <button className='bg-blue-500 w-full h-auto rounded-sm px-2 py-2 font-bold text-white hover:bg-blue-700 hover:text-black' >BACK TO TOP</button>
      </NavLink> 
    </BrowserRouter>
      </div>
    
  )
}

export default Footer