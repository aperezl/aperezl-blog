import React from 'react'
import Article from './Article'

const ArticleGrid = ({ posts }) => {
  console.log('posts', posts)
  return (
    <div className="mt-4 grid grid-cols-3 gap-8">
      {posts.map(post => {
        const { slug, title, excerpt, coverImage } = post
        return <Article
          key={slug}
          title={title}
          excerpt={excerpt}
          image={coverImage}
        />  
      }
        
      )}
    </div>
  )
}

export default ArticleGrid