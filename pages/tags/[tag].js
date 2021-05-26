import Header from "../../components/Header";
import Bio from '../../components/Bio'
import PostList from "../../components/PostList"
import { getAllTags, getAllPostsByTag } from '../../lib/api'
import PageLayout from "../../components/Layouts/PageLayout";

export default function Home({ allPosts }) {

  return (
    <PageLayout>
      <PostList posts={allPosts} /> 
    </PageLayout>
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