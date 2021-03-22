import { useRouter } from 'next/router'
import Header from '../../components/Header'

export default function Post({ post }) {

  const router = useRouter()
  return(
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <div>hola</div>
      </main>
    </>
  )
}