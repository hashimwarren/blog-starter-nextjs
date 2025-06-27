import { LucideBolt, LucideCog, LucideStar } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Intro() {
  return (
    <section className="container mx-auto py-12 grid gap-6 sm:grid-cols-3">
      <FeatureCard title="Ipsum consequat" icon={<LucideCog className="h-8 w-8" />}>
        Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
      </FeatureCard>
      <FeatureCard title="Magna etiam dolor" icon={<LucideBolt className="h-8 w-8" />}>
        Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
      </FeatureCard>
      <FeatureCard title="Tempus adipiscing" icon={<LucideStar className="h-8 w-8" />}>
        Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.
      </FeatureCard>
    </section>
  );
}
