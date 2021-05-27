import Header from "../Header";
import Bio from '../Bio'
import Footer from "../Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <div className="mr-12 flex justify-between py-8">
          <div className="w-3/4">
            {children}
          </div>
          <div className="w-1/4">
            <Bio />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}