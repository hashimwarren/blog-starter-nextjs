import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function NoSidebar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div id="page-wrapper">
        <Header />
        
        <main className="bg-white">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <article className="bg-white border border-gray-200 rounded-lg p-8">
                <header className="mb-8">
                  <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-8">
                    Featured Article Image
                  </div>
                  <h2 className="text-4xl font-bold mb-4">No Sidebar</h2>
                  <p className="text-xl text-gray-600 italic">Lorem ipsum dolor sit amet feugiat</p>
                </header>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  <p>
                    Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                    hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                    Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                    Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
                  </p>
                  <p>
                    Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl,
                    a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                    placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                    eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                    elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet nullam consequat feugiat dolore tempus.
                  </p>
                  
                  <section className="mt-12">
                    <header className="mb-6">
                      <h3 className="text-2xl font-semibold">Something else</h3>
                    </header>
                    <p>
                      Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                      placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                      eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                      elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                      sit amet nullam consequat feugiat dolore tempus.
                    </p>
                    <p>
                      Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                      eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                      elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                      sit amet nullam consequat feugiat dolore tempus.
                    </p>
                  </section>
                  
                  <section className="mt-12">
                    <header className="mb-6">
                      <h3 className="text-2xl font-semibold">So in conclusion ...</h3>
                    </header>
                    <p>
                      Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                      eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                      elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                      sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
                      Maecenas sagittis convallis justo vel mattis.
                    </p>
                  </section>
                </div>
              </article>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}