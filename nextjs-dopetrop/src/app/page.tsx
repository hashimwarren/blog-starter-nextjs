import { Header } from "@/components/Header"
import { Banner } from "@/components/Banner"
import { Intro } from "@/components/Intro"
import { Portfolio } from "@/components/Portfolio"
import { BlogList } from "@/components/BlogList"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div id="page-wrapper">
        <Header />
        <Banner />
        <Intro />
        <main className="bg-white">
          <Portfolio />
          <BlogList />
        </main>
        <Footer />
      </div>
    </div>
  )
}
