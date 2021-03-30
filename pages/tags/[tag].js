import Header from "../../components/Header";
import Bio from '../../components/Bio'
import PostList from "../../components/PostList"
import { getAllTags, getAllPostsByTag } from '../../lib/api'

export default function Home({ allPosts }) {

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <div className="mr-12 flex justify-between py-8">
          <div className="w-3/4">
            <PostList posts={allPosts} /> 
          </div>
          <div className="w-1/4">
            <Bio />
          </div>
        </div>

      </main>
    </>
  )
}


export async function getStaticProps({ params }) {
  const allPosts = getAllPostsByTag(params.tag, [
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

export async function getStaticPaths() {
  const tags = getAllTags(['tag'])
  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag
        }
      }
    }),
    fallback: false
  }
}