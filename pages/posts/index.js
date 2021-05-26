import { getAllPosts } from '../../lib/api'
import PostList from '../../components/PostList'
import PageLayout from '../../components/Layouts/PageLayout'

export default function Home({ allPosts }) {

  return (
    <PageLayout>
      <PostList posts={allPosts} />
    </PageLayout>
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