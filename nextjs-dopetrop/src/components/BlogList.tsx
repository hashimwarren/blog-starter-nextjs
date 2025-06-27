import { BlogPostCard } from "./BlogPostCard"

export function BlogList() {
  const blogPosts = [
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Blog+Post+1",
      title: "Magna tempus consequat",
      publishedDate: "Posted 45 minutes ago",
      excerpt: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet."
    },
    {
      image: "https://via.placeholder.com/400x300/cccccc/666666?text=Blog+Post+2",
      title: "Aptent veroeros aliquam", 
      publishedDate: "Posted 45 minutes ago",
      excerpt: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet."
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="text-center mb-12 relative">
        <div className="border-t border-gray-300 relative">
          <h2 className="bg-white inline-block px-4 text-2xl font-semibold text-gray-800 relative -top-3">
            The Blog
          </h2>
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            image={post.image}
            title={post.title}
            publishedDate={post.publishedDate}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}