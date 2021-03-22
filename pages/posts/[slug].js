import { useRouter } from 'next/router'
import ArticleBody from '../../components/ArticleBody'
import Header from '../../components/Header'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {

  const router = useRouter()
  return(
    <>
      <Header />
      

      <main className="container mx-auto max-w-6xl px-5">

      <div className="mr-12 flex justify-between py-8">
          <div className="w-3/4">
            <article className="mb-32">
            <h1 className="font-bold font-work-sans text-3xl text-cw-grey-800 leading-tight mb-3">
              {post.title}
            </h1>
              <img className="border-sm rounded-md" src={post.coverImage} alt="image1" />
              <ArticleBody content={post.content} />
            </article>
          </div>
          <div className="w-1/4">
            ---
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
  console.log('content', content)
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