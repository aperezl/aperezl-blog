import ArticleGrid from "../components/ArticleGrid";
import ArticleHome from "../components/ArticleHome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeLayout from "../components/Layouts/HomeLayout";

import { getAllPosts } from '../lib/api'

export default function Home({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
 
  return (
    <HomeLayout>
      
        <ArticleHome
          title={heroPost.title}
          date={heroPost.date}
          excerpt={heroPost.excerpt}
          image={heroPost.coverImage}
          slug={heroPost.slug}
          category={heroPost.category}
        />
        <ArticleGrid posts={morePosts} />
    </HomeLayout>
  )
}

export async function getStaticProps() {
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