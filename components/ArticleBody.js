import React from 'react'
import markdownStyles from './markdown-styles.module.css'

const ArticleBody = ({ content }) => {
  console.log('content', content)
  return (
    <div
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    
  )
}

export default ArticleBody
