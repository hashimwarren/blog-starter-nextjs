import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="banner" className="bg-gray-200 py-20 text-center">
        <header>
          <h2 className="text-4xl font-bold">Howdy. This is Dopetrope.</h2>
          <p className="text-lg">A responsive template by HTML5 UP</p>
        </header>
      </section>

      <section id="intro" className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Ipsum consequat</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
                et magna tempus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Magna etiam dolor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
                et magna tempus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tempus adipiscing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros
                et magna tempus.
              </p>
            </CardContent>
          </Card>
        </div>
        <footer className="text-center mt-8">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline" className="ml-4">
            Learn More
          </Button>
        </footer>
      </section>

      <section id="main" className="container mx-auto my-8">
        <section>
          <header className="text-center my-8">
            <h2 className="text-3xl font-bold">My Portfolio</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <Image
                src="/pic02.jpg"
                alt=""
                width={400}
                height={240}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Ipsum feugiat et dolor</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                  consequat veroeros lorem blandit adipiscing et feugiat
                  phasellus tempus dolore ipsum lorem dolore.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Find out more</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/pic03.jpg"
                alt=""
                width={400}
                height={240}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Sed etiam lorem nulla</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                  consequat veroeros lorem blandit adipiscing et feugiat
                  phasellus tempus dolore ipsum lorem dolore.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Find out more</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/pic04.jpg"
                alt=""
                width={400}
                height={240}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Consequat et tempus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                  consequat veroeros lorem blandit adipiscing et feugiat
                  phasellus tempus dolore ipsum lorem dolore.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Find out more</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <header className="text-center my-8">
            <h2 className="text-3xl font-bold">The Blog</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <Image
                src="/pic08.jpg"
                alt=""
                width={600}
                height={360}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Magna tempus consequat</CardTitle>
                <p className="text-sm text-gray-500">Posted 45 minutes ago</p>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit
                  consequat sed veroeros lorem et blandit adipiscing feugiat
                  phasellus tempus hendrerit, tortor vitae mattis tempor, sapien
                  sem feugiat sapien, id suscipit magna felis nec elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos lorem ipsum dolor sit amet.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Continue Reading</Button>
                <Button variant="outline">33 comments</Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/pic09.jpg"
                alt=""
                width={600}
                height={360}
                className="rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Aptent veroeros aliquam</CardTitle>
                <p className="text-sm text-gray-500">Posted 45 minutes ago</p>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet sit veroeros sed et blandit
                  consequat sed veroeros lorem et blandit adipiscing feugiat
                  phasellus tempus hendrerit, tortor vitae mattis tempor, sapien
                  sem feugiat sapien, id suscipit magna felis nec elit. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos lorem ipsum dolor sit amet.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Continue Reading</Button>
                <Button variant="outline">33 comments</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </section>
    </>
  );
}
