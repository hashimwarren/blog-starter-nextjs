import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPostCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={title} width={400} height={300} className="w-full h-auto" />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">Lorem ipsum dolor sit amet sit veroeros et blandit.</p>
        <Button variant="outline" size="sm">Continue Reading</Button>
      </CardContent>
    </Card>
  );
}
