import Link from 'next/link'
import Header from "../../components/Header";
import Bio from '../../components/Bio'
import { getAllTags } from '../../lib/api'
import PageLayout from '../../components/Layouts/PageLayout'

export default function Home({ allTags }) {

  return (
    <PageLayout>
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
    </PageLayout>
  )
}


export async function getStaticProps() {
  const allTags = getAllTags(['tag'])
  console.log('allTags', allTags)
  return {
    props: { allTags },
  }
}