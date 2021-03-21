import React from 'react'
export default function Home() {
  return (
    <>
      <header className="container mx-auto max-w-6xl px-5">
        <div className="flex justify-between h-12">
          <a className="flex justify-between items-center" href="#">
            <img src="avatar.png" alt="Avatar Logo" className="h-12" />
            <span className="font-bold fond-work-sans text-2xl text-cw-blue-400">aperezl</span>
          </a>
          <ul className="flex items-center">
            <li className="mr-10">
              <a href="#">Home</a>
            </li>
            <li className="mr-10">
              <a href="#">Travel</a>
            </li>
            <li className="mr-10">
              <a href="#">Music</a>
            </li>
            <li className="mr-10">
              <a href="#">Technology</a>
            </li>
            <li className="mr-10">
              <a href="#">Business</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
