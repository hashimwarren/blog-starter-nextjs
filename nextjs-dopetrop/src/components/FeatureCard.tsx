import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  variant?: "first" | "middle" | "last"
}

export function FeatureCard({ icon, title, description, variant = "first" }: FeatureCardProps) {
  const getIconBgColor = () => {
    switch (variant) {
      case "middle":
        return "bg-gray-800"
      case "last":
        return "bg-gray-600"
      default:
        return "bg-red-600"
    }
  }

  return (
    <Card className="text-center h-full">
      <CardHeader>
        <div className={`mx-auto w-16 h-16 ${getIconBgColor()} text-white flex items-center justify-center rounded-full mb-4`}>
          <i className={`fas ${icon} text-2xl`}></i>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}