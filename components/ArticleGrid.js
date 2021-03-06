import React from 'react'
import Article from './Article'

const ArticleGrid = ({ posts }) => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-8">
      {posts.map(post => {
        const { slug, title, date, excerpt, coverImage, category } = post
        return <Article
          key={slug}
          title={title}
          date={date}
          image={coverImage}
          slug={slug}
          category={category}
        />  
      }
        
      )}
    </div>
  )
}

export default ArticleGrid
