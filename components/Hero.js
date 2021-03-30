import React from 'react'
import Twitter from './socialIcons/Twitter.js'
import GitHub from './socialIcons/GitHub.js'
import Youtube from './socialIcons/Youtube.js'

const Hero = () => {
  return (
    <section className="bg-cw-grey-800 py-20">
      
      <div className="max-w-4xl px-6 mx-auto flex justify-center">
        <div className="w-2/3 items-center mr-20 pr-20">
          <h2 className="text-4xl font-work-sans text-cw-grey-100 leading-snug">
            ¡Hola!, <br />
            Soy <span className="bg-cw-grey-100 text-cw-grey-800 rounded px-1">Antonio Pérez</span>.<br />
            <span className="text-2xl">Javascript Developer.</span>
          </h2>
          <p className="font-work-sans text-cw-grey-100 mt-4">
            Mi Bio aquí. {`¯ \ _ (ツ) _ / ¯`}
          </p>
        </div>
        <div className="w-1/3">
          <div className="bg-cw-grey-050 p-1 rounded-full">
            <img src="/avatar.png" alt="Avatar Logo" className="align-middle rounded-full" />
          </div>
          <div className="my-4 flex justify-center space-x-4">
            <Twitter link="_aperezl" />
            <GitHub link="aperezl" />
            <Youtube link="aperezl" />
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Hero
