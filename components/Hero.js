import React from 'react'

const Hero = () => {
  return (
    <section className="bg-cw-grey-800 py-20">
      <div className="max-w-6xl px-6 mx-auto flex justify-center">
        <div className="w-2/3 items-center mr-20 pr-20">
          <h2 className="text-4xl font-work-sans text-cw-grey-100">
            Hi, <br />
            <span className="bg-indigo-600 text-white rounded px-1">I’m Antonio Perez</span>.<br />
            Nice to meet you.
          </h2>
          <p className="font-work-sans text-cw-grey-100 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus ipsum quae.</p>
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
