import Link from 'next/link'

function ArticleHome({ title, excerpt, image, slug, category, date } = {}) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <article className="flex justify-between p-4 mt-4 bg-cw-grey-100 rounded-md">
      <div className="w-1/2 mr-12">
        <Link Link as={`/posts/${slug}`} href="/posts/[slug]">
          <img className="border-sm rounded-md cursor-pointer" src={`/posts/${slug}/${image}`} alt="image1" />
        </Link>
      </div>
      <div className="w-1/2">
        <div className="text-cw-grey-700 text-sm mb-1">
          <span className="hover:text-cw-blue-600 font-bold">
            <Link as={`/tags/${category}`} href="/tags/[tag]">
              {category}
            </Link>
          </span>
          <p className="font-work-sans text-cw-grey-700 inline"> / { new Date(date).toLocaleDateString('es-ES', options) }</p>
        </div>
        
        <h1 className="font-bold font-work-sans text-3xl text-cw-grey-800 hover:text-cw-blue-600 leading-tight">
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
