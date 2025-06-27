import { Button } from "@/components/ui/button"

export function Footer() {
  const footerNews = [
    { date: "Jan", day: "27", title: "Lorem dolor sit amet veroeros", excerpt: "Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam." },
    { date: "Jan", day: "23", title: "Ipsum sed blandit nisl consequat", excerpt: "Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem." },
    { date: "Jan", day: "15", title: "Magna tempus lorem feugiat", excerpt: "Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat." },
    { date: "Jan", day: "12", title: "Dolore tempus ipsum feugiat nulla", excerpt: "Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat." },
    { date: "Jan", day: "10", title: "Blandit tempus aliquam?", excerpt: "Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore." }
  ]

  const quickLinks1 = [
    "Lorem ipsum dolor sit amet sit veroeros",
    "Sed et blandit consequat sed tlorem blandit", 
    "Adipiscing feugiat phasellus sed tempus",
    "Hendrerit tortor vitae mattis tempor sapien",
    "Sem feugiat sapien id suscipit magna felis nec",
    "Elit class aptent taciti sociosqu ad litora"
  ]

  const quickLinks2 = [
    "Lorem ipsum dolor sit amet sit veroeros",
    "Sed et blandit consequat sed tlorem blandit",
    "Adipiscing feugiat phasellus sed tempus", 
    "Hendrerit tortor vitae mattis tempor sapien",
    "Sem feugiat sapien id suscipit magna felis nec",
    "Elit class aptent taciti sociosqu ad litora"
  ]

  return (
    <section className="bg-white border-t border-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-8">
            <section>
              <header className="mb-6">
                <h2 className="text-xl font-semibold">Blandit nisl adipiscing</h2>
              </header>
              <ul className="space-y-4">
                {footerNews.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-center min-w-[60px]">
                      <div className="text-sm text-gray-500">{item.date}</div>
                      <div className="text-lg font-bold">{item.day}</div>
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">
                        <a href="#" className="hover:text-red-600 transition-colors">{item.title}</a>
                      </h3>
                      <p className="text-sm text-gray-600">{item.excerpt}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* About Section */}
          <div className="lg:col-span-4">
            <section className="mb-8">
              <header className="mb-4">
                <h2 className="text-xl font-semibold">What&apos;s this all about?</h2>
              </header>
              <div className="h-32 w-full mb-4 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                About Image
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by{" "}
                <a href="http://twitter.com/ajlkn" className="text-red-600 hover:underline">AJ</a> for{" "}
                <a href="http://html5up.net/" className="text-red-600 hover:underline">HTML5 UP</a>. 
                It&apos;s released for free under the{" "}
                <a href="http://html5up.net/license/" className="text-red-600 hover:underline">Creative Commons Attribution</a> license 
                so feel free to use it for any personal or commercial project – just don&apos;t forget to credit us!
              </p>
              <Button>Find out more</Button>
            </section>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <section>
              <header className="mb-4">
                <h2 className="text-xl font-semibold">Tempus consequat</h2>
              </header>
              <ul className="space-y-2 text-sm">
                {quickLinks1.map((link, index) => (
                  <li key={index} className="border-b border-gray-200 pb-2">
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-3">
            <section>
              <header className="mb-4">
                <h2 className="text-xl font-semibold">Ipsum et phasellus</h2>
              </header>
              <ul className="space-y-2 text-sm">
                {quickLinks2.map((link, index) => (
                  <li key={index} className="border-b border-gray-200 pb-2">
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <section>
              <header className="mb-4">
                <h2 className="text-xl font-semibold">Vitae tempor lorem</h2>
              </header>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-tumblr"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    Untitled Incorporated<br />
                    1234 Somewhere Road Suite<br />
                    Nashville, TN 00000-0000
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mail</h3>
                  <p>
                    <a href="mailto:someone@untitled.tld" className="text-gray-600 hover:text-red-600 transition-colors">
                      someone@untitled.tld
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(800) 000-0000</p>
                </div>
              </div>
            </section>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-12 border-t border-gray-200 pt-6">
            <div className="text-center text-sm text-gray-500">
              <p>
                &copy; Untitled. All rights reserved. | Design:{" "}
                <a href="http://html5up.net" className="text-red-600 hover:underline">HTML5 UP</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}