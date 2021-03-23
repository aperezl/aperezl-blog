import Link from 'next/link'

function ArticleHome({ title, excerpt, image, slug, category } = {}) {
  return (
    <article className="flex justify-between py-8">
      <div className="w-1/2 mr-12">
        <Link Link as={`/posts/${slug}`} href="/posts/[slug]">
          <img className="border-sm rounded-md cursor-pointer" src={`/posts/${slug}/${image}`} alt="image1" />
        </Link>
      </div>
      <div className="w-1/2">
        <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">
          {category}
        </a>
        <h1 className="font-bold font-work-sans text-3xl text-cw-grey-800 hover:text-cw-blue-600 leading-tight mb-3">
          <Link Link as={`/posts/${slug}`} href="/posts/[slug]">
            { title }
          </Link>
        </h1>
        <p>
          { excerpt }
        </p>
      </div>
    </article>
  )
}

export default ArticleHome
