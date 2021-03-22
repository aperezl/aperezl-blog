import React from 'react'

function ArticleHome({ title, excerpt, image } = {}) {
  return (
    <article className="border-t border-cw-grey-100 flex justify-between py-8">
      <a href="#" className="w-1/2 mr-12">
        <img className="border-sm rounded-md" src={image} alt="image1" />
      </a>
      <div className="w-1/2">
        <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">
          Vanilla
        </a>
        <h1>
          <a href="#" className="font-bold font-work-sans text-3xl text-cw-grey-800 hover:text-cw-blue-600 leading-tight mb-3">
            { title }
          </a>
        </h1>
        <p>
          { excerpt }
        </p>
      </div>
    </article>
  )
}

export default ArticleHome
