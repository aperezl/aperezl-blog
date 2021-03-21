import ArticleHome from "../components/ArticleHome";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <ArticleHome />
      </main>
    </>
  )
}
