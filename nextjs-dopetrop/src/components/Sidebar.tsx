import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const sidebarLinks = [
    "Sed et blandit consequat sed",
    "Hendrerit tortor vitae sapien dolore", 
    "Sapien id suscipit magna sed felis",
    "Aptent taciti sociosqu ad litora"
  ]

  return (
    <div className="space-y-6">
      {/* Featured Image Box */}
      <Card>
        <CardHeader className="p-0">
          <div className="h-32 w-full bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
            Sidebar Image
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <header className="mb-4">
            <h3 className="text-lg font-semibold">Sed etiam lorem nulla</h3>
          </header>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full">
            Magna sed taciti
          </Button>
        </CardFooter>
      </Card>

      {/* Links Box */}
      <Card>
        <CardContent className="p-4">
          <header className="mb-4">
            <h3 className="text-lg font-semibold">Feugiat consequat</h3>
          </header>
          <p className="text-gray-600 leading-relaxed mb-4">
            Veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat sed lorem consequat feugiat lorem dolore.
          </p>
          <ul className="space-y-2 mb-4">
            {sidebarLinks.map((link, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full">
            Ipsum consequat
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}