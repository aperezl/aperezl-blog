import React from 'react'

function ArticleHome() {
  return (
    <article className="border-t border-cw-grey-100 flex justify-between py-8">
      <a href="#" className="w-1/2 mr-12">
        <img className="border-sm" src="/images/image1.jpg" alt="image1" />
      </a>
      <div className="w-1/2">
        <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">
          Vanilla
        </a>
        <h1 className="font-bold font-work-sans text-3xl text-cw-grey-800 leading-tight mb-3">
          Laborum ullamco nostrud nisi ad nostrud fugiat elit
        </h1>
        <p>
          Exercitation laboris id magna officia pariatur dolor commodo veniam ut ex et et duis amet.
          Quis aliquip dolore sint esse aliquip amet ex nostrud aliquip exercitation esse incididunt ut magna.
          Elit ipsum voluptate excepteur adipisicing ad deserunt ullamco irure eu nulla sint nisi consequat.
          Ex velit nisi consequat qui irure cupidatat. Sunt elit velit enim do non do deserunt veniam ullamco excepteur quis sit irure excepteur.
          Dolore laborum eiusmod sint dolore. Reprehenderit sint ex eiusmod Lorem.
        </p>
      </div>
    </article>
  )
}

export default ArticleHome
