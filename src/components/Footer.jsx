import React from 'react'
import {  NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-blue-100 '>
    
    <NavLink to='/' >
     <button className='bg-blue-500 w-full h-auto rounded-sm px-2 py-2 font-bold text-white hover:bg-blue-700 hover:text-black' >BACK TO TOP</button>
      </NavLink> 
    
      </div>
    
  )
}

export default Footer