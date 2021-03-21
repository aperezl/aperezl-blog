import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto max-w-6xl px-5">
      <div className="flex justify-between h-12 py-10">
        <a className="flex justify-between items-center" href="#">
          <img src="avatar.png" alt="Avatar Logo" className="h-12 rounded-full" />
          <span className="px-2 font-bold fond-work-sans text-2xl text-cw-blue-400">aperezl</span>
        </a>
        <ul className="flex items-center">
          <li className="mr-10">
            <a className="hover:text-cw-blue-600 hover:underline" href="#">Home</a>
          </li>
          <li className="mr-10">
            <a className="hover:text-cw-blue-600 hover:underline" href="#">Travel</a>
          </li>
          <li className="mr-10">
            <a className="hover:text-cw-blue-600 hover:underline" href="#">Music</a>
          </li>
          <li className="mr-10">
            <a className="hover:text-cw-blue-600 hover:underline" href="#">Technology</a>
          </li>
          <li>
            <a className="hover:text-cw-blue-600 hover:underline" href="#">Business</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
