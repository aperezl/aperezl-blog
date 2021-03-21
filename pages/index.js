import Article from "../components/Article";
import ArticleHome from "../components/ArticleHome";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-5">
        <ArticleHome />
        <div className="mt-4 grid grid-cols-3 gap-8">
          <Article image="/images/image2.jpg" />
          <Article image="/images/image3.jpg" />
          <Article image="/images/image4.jpg" />
          <Article image="/images/image5.jpg" />
          <Article image="/images/image6.jpg" />
          <Article image="/images/image7.jpg" />
        </div>
      </main>
    </>
  )
}
