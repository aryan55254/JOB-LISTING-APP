import React from 'react'

function Hero({TITLE,SUBTITLE}) {
  return (
    <div className="bg-blue-500 h-48 flex items-center justify-center text-center text-white p-8">
    <div>
      <h1 className="text-3xl font-bold mb-4">{TITLE}</h1>
      <p className="text-xl mb-6">{SUBTITLE}</p>
    </div>
  </div>
  
  )
}

export default Hero