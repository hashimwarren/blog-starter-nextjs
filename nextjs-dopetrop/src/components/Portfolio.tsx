import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <PortfolioItem title="Project One" image="/next.svg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PortfolioItem>
        <PortfolioItem title="Project Two" image="/next.svg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PortfolioItem>
        <PortfolioItem title="Project Three" image="/next.svg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PortfolioItem>
      </div>
    </section>
  );
}
