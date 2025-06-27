import Image from "next/image"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPostCardProps {
  image: string
  title: string
  publishedDate: string
  excerpt: string
  commentsCount?: number
  alt?: string
}

export function BlogPostCard({ 
  image, 
  title, 
  publishedDate, 
  excerpt, 
  commentsCount = 33,
  alt 
}: BlogPostCardProps) {
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
        <header className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{publishedDate}</p>
        </header>
        <p className="text-gray-600 leading-relaxed">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <Button className="flex items-center gap-2">
            <i className="fas fa-file-alt"></i>
            Continue Reading
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <i className="fas fa-comment"></i>
            {commentsCount} comments
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}