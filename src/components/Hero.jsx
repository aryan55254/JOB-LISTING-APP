import React from 'react'

function Hero({TITLE,SUBTITLE}) {
  return (
    <div class="bg-blue-800 h-48 flex items-center justify-center text-center text-white p-8">
    <div>
      <h1 class="text-3xl font-bold mb-4">{TITLE}</h1>
      <p class="text-xl mb-6">{SUBTITLE}</p>
    </div>
  </div>
  
  )
}

export default Hero