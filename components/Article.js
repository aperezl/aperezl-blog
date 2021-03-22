import React from 'react'

const Article = ({ title, image, excerpt }) => {
  return (
    <article>
      <a href="#">
        <img className="mb-2 rounded-md" src={image} alt="image 2"/>
      </a>
      <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">
        Javascript
      </a>
      <h2>
        <a href="#" className="font-bold font-work-sans text-xl text-cw-grey-900 hover:text-cw-blue-600">
          {title}
        </a>
      </h2>
      <p className="text-sm leading-loose">
        {excerpt}
      </p>
    </article>
  )
}

export default Article
