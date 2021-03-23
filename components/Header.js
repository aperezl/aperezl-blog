import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-cw-grey-900">
      <div className="container mx-auto max-w-6xl px-5 flex justify-between h-12 py-10">
        <Link Link as={`/`} href="/">
          <div className="flex justify-between items-center cursor-pointer">
            <img src="/avatar.png" alt="Avatar Logo" className="h-12 rounded-full" />
            <span className="px-2 font-bold fond-work-sans text-2xl text-cw-grey-050">aperezl</span>
          </div>
        </Link>
        <ul className="flex items-center text-cw-grey-050">
          <li className="mr-10 hover:text-cw-grey-100 hover:underline">
            <Link Link as={`/`} href="/">
              Home
            </Link>
  
          </li>
          <li className="mr-10">
            <Link Link as={`/`} href="/">
              Tags
            </Link>
          </li>
          <li className="mr-10">
            <Link Link as={`/`} href="/">
              Sobre mi
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
