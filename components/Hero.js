import React from 'react'

const Hero = () => {
  return (
    <section className="bg-cw-grey-800 py-20">
      
      <div className="max-w-4xl px-6 mx-auto flex justify-center">
        <div className="w-2/3 items-center mr-20 pr-20">
          <h2 className="text-4xl font-work-sans text-cw-grey-100 leading-snug">
            ¡Hola!, <br />
            Soy <span className="bg-cw-grey-100 text-cw-grey-800 rounded px-1">Antonio Pérez</span>.<br />
            Javascript Developer.  
          </h2>
          <p className="font-work-sans text-cw-grey-100 mt-4">
            Mi Bio aquí
          </p>
        </div>
        <div className="w-1/3">
          <div className="bg-cw-grey-050 p-1 rounded-full">
            <img src="/avatar.png" alt="Avatar Logo" className="align-middle rounded-full" />
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Hero
