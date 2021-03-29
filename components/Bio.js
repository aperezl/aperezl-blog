import React from 'react'
import Twitter from './socialIcons/Twitter.js'
import GitHub from './socialIcons/GitHub.js'
import Youtube from './socialIcons/Youtube.js'


const Bio = () => {
  return (
    <div>
      <div className="bg-cw-grey-050 p-1 rounded-full mx-20">
        <img src="/avatar.png" alt="Avatar Logo" className="align-middle rounded-full" />
      </div>
      <p className="text-2xl font-work-sans text-cw-grey-800 leading-snug text-center">
        aperezl
      </p>
      <p className="text-lg font-work-sans text-cw-grey-800 leading-snug text-center">
        javascript develpoer
      </p>

      <div className="my-4 flex justify-center space-x-4">
        <Twitter color="#1DA1F2" link="_aperezl" />
        <GitHub color="#181717" link="aperezl" />
        <Youtube color="#FF0000" link="aperezl" />
      </div>
    </div>
  )
}

export default Bio
