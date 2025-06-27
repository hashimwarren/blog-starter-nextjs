import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <section className="bg-white border-b border-gray-300 py-20 text-center">
      {/* Logo */}
      <h1 className="text-4xl font-black text-gray-800 mb-8">
        <Link href="/">Dopetrope</Link>
      </h1>

      {/* Navigation */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 hover:text-gray-600 transition-colors">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 hover:text-gray-600 transition-colors">
              Dropdown
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#" className="block p-3 hover:bg-gray-100 rounded">
                      Lorem ipsum dolor
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#" className="block p-3 hover:bg-gray-100 rounded">
                      Magna phasellus
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#" className="block p-3 hover:bg-gray-100 rounded">
                      Etiam dolore nisl
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a href="#" className="block p-3 hover:bg-gray-100 rounded">
                      Veroeros feugiat
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/left-sidebar" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 hover:text-gray-600 transition-colors">
                Left Sidebar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/right-sidebar" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 hover:text-gray-600 transition-colors">
                Right Sidebar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/no-sidebar" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 hover:text-gray-600 transition-colors">
                No Sidebar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  )
}