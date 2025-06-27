import { FeatureCard } from "./FeatureCard"
import { Button } from "@/components/ui/button"

export function Intro() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon="fa-cog"
          title="Ipsum consequat"
          description="Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus."
          variant="first"
        />
        <FeatureCard
          icon="fa-bolt"
          title="Magna etiam dolor"
          description="Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus."
          variant="middle"
        />
        <FeatureCard
          icon="fa-star"
          title="Tempus adipiscing"
          description="Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus."
          variant="last"
        />
      </div>
      
      <footer className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </footer>
    </section>
  )
}