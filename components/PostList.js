import React from 'react'
import PostDetail from './PostDetail'

const PostList = ({ posts }) => {
  return (
    <div>
      {
        posts.map(post => {
          const { slug, title, date, excerpt, coverImage, category } = post
          return <PostDetail
            key={slug}
            title={title}
            excerpt={excerpt}
            date={date}
            image={coverImage}
            slug={slug}
            category={category}
          />  
        })
      }
    </div>
  )
}

export default PostList
