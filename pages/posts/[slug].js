import { useRouter } from 'next/router'
import ArticleBody from '../../components/ArticleBody'
import Bio from '../../components/Bio'
import Header from '../../components/Header'
import PageLayout from '../../components/Layouts/PageLayout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {

  const router = useRouter()
  return(
    <PageLayout>
      <article className="mb-32">          
        <img className="border-sm rounded-md" src={`/posts/${post.slug}/${post.coverImage}`} alt="image1" />
        <ArticleBody content={post.content} />
      </article>
    </PageLayout>
  )
}


export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}