export default function LeftSidebar() {
  return (
    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-8 col-12-medium">
            {/* Content */}
            <article className="box post">
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <header>
                <h2>Left Sidebar</h2>
                <p>Lorem ipsum dolor sit amet feugiat</p>
              </header>
              <p>
                Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
              </p>
              <p>
                Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
              </p>
            </article>
          </div>
          <div className="col-4 col-12-medium">
            {/* Sidebar */}
            <section className="box">
              <a href="#" className="image featured">
                <img src="images/pic09.jpg" alt="" />
              </a>
              <header>
                <h3>Sed etiam lorem nulla</h3>
              </header>
              <p>Lorem ipsum dolor sit amet sit veroeros sed blandit consequat veroeros et magna tempus lorem feugiat tempus.</p>
              <footer>
                <a href="#" className="button alt">Magna sed taciti</a>
              </footer>
            </section>
            <section className="box">
              <header>
                <h3>Feugiat consequat</h3>
              </header>
              <p>Veroeros sed amet blandit consequat veroeros et magna tempus lorem feugiat tempus lorem ipsum dolore.</p>
              <ul className="divided">
                <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                <li><a href="#">Hendrerit tortor vitae sapien dolore</a></li>
                <li><a href="#">Sapien id suscipit magna felis nec elit</a></li>
                <li><a href="#">Aptent taciti sociosqu ad litora torquent</a></li>
                <li><a href="#">Magna eget lorem ipsum dolor sit</a></li>
              </ul>
              <footer>
                <a href="#" className="button alt">Ipsum consequat</a>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}