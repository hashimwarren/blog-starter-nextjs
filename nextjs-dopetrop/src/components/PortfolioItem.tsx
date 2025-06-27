import Image from "next/image"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PortfolioItemProps {
  image: string
  title: string
  description: string
  alt?: string
}

export function PortfolioItem({ image, title, description, alt }: PortfolioItemProps) {
  return (
    <Card className="h-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={alt || title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button variant="outline" className="w-full">
          Find out more
        </Button>
      </CardFooter>
    </Card>
  )
}