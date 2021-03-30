import { useRouter } from 'next/router'
import ArticleBody from '../../components/ArticleBody'
import Bio from '../../components/Bio'
import Header from '../../components/Header'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const router = useRouter()
  return(
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <h1 className="font-bold font-work-sans text-4xl text-cw-grey-800 leading-tight mt-4">
          {post.title}
        </h1>
        <p className="font-work-sans text-md text-cw-grey-700">{ new Date(post.date).toLocaleDateString('es-ES', options) }</p>

        <div className="flex justify-between py-8">
          <div className="w-3/4">
            <article className="mb-32">          
              <img className="border-sm rounded-md" src={`/posts/${post.slug}/${post.coverImage}`} alt="image1" />
              <ArticleBody content={post.content} />
            </article>
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