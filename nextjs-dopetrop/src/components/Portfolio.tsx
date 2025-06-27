import { PortfolioItem } from "./PortfolioItem"

export function Portfolio() {
  const portfolioItems = [
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+1",
      title: "Ipsum feugiat et dolor",
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+2", 
      title: "Sed etiam lorem nulla",
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+3",
      title: "Consequat et tempus", 
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+4",
      title: "Blandit sed adipiscing",
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+5",
      title: "Etiam nisl consequat",
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Portfolio+6",
      title: "Dolore nisl feugiat",
      description: "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore."
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="text-center mb-12 relative">
        <div className="border-t border-gray-300 relative">
          <h2 className="bg-white inline-block px-4 text-2xl font-semibold text-gray-800 relative -top-3">
            My Portfolio
          </h2>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}