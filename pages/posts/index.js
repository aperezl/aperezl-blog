import Header from "../../components/Header";

import { getAllPosts } from '../../lib/api'

export default function Home({ allPosts }) {
  console.log(allPosts)

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <div className="mr-12 flex justify-between py-8">
          <div className="w-3/4">
            List posts
          </div>
          <div className="w-1/4">
            Tags secctions and bio
          </div>
        </div>

      </main>
    </>
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