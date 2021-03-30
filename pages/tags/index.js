import Link from 'next/link'
import Header from "../../components/Header";
import Bio from '../../components/Bio'
import { getAllTags } from '../../lib/api'

export default function Home({ allTags }) {

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <div className="mr-12 flex justify-between py-8">
          <div className="w-3/4">
            {
              allTags.map(tag => (
                <Link
                  key={tag}
                  as={`/tags/${tag}`}
                  href="/tags/[tag]">
                  {tag}
                </Link>
              ))
            }
          </div>
          <div className="w-1/4">
            <Bio />
          </div>
        </div>

      </main>
    </>
  )
}


export async function getStaticProps() {
  const allTags = getAllTags(['tag'])
  console.log('allTags', allTags)
  return {
    props: { allTags },
  }
}