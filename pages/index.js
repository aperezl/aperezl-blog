import Article from "../components/Article";
import ArticleGrid from "../components/ArticleGrid";
import ArticleHome from "../components/ArticleHome";
import Header from "../components/Header";
import Hero from "../components/Hero";

import { getAllPosts } from '../lib/api'

export default function Home({ allPosts }) {
  console.log(allPosts)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
 
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto max-w-6xl px-5">
        <ArticleHome
          title={heroPost.title}
          excerpt={heroPost.excerpt}
          image={heroPost.coverImage}
          slug={heroPost.slug}
          category={heroPost.category}
        />
        <ArticleGrid posts={morePosts} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  console.log('xxxx')
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
    'tags',
    'featured',
  ])
  
  return {
    props: { allPosts },
  }
}