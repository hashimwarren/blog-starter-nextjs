import BlogPostCard from "./BlogPostCard";

export default function BlogList() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">The Blog</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <BlogPostCard title="Magna tempus consequat" image="/next.svg" />
        <BlogPostCard title="Aptent veroeros aliquam" image="/next.svg" />
      </div>
    </section>
  );
}
