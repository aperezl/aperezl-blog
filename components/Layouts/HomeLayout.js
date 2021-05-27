import Header from '../Header'
import Hero from '../Hero'
import Footer from '../Footer'

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto max-w-6xl px-5">
        {children}
      </main>
      <Footer />
    </>
  )
}