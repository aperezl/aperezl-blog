import Link from 'next/link'
import React from 'react'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Article = ({ title, image, excerpt, slug, category, date }) => {
  return (
    <article>
      <Link Link as={`/posts/${slug}`} href="/posts/[slug]">
        <img className="mb-2 rounded-md cursor-pointer" src={`/posts/${slug}/${image}`} alt="image 2"/>
      </Link>
      <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">
        {category}
      </a>
      <h2 className="font-bold font-work-sans text-xl text-cw-grey-900 hover:text-cw-blue-600">
        <Link Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h2>
      <p className="font-work-sans text-md text-cw-grey-700 mb-2">{ new Date(date).toLocaleDateString('es-ES', options) }</p>
    </article>
  )
}

export default Article
