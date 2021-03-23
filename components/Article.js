import Link from 'next/link'
import React from 'react'

const Article = ({ title, image, excerpt, slug, category }) => {
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

    </article>
  )
}

export default Article
