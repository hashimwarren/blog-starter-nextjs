export default function Home() {
  return (
    <>
      {/* Banner */}
      <section id="banner">
        <header>
          <h2>Howdy. This is Dopetrope.</h2>
          <p>A responsive template by HTML5 UP</p>
        </header>
      </section>

      {/* Intro */}
      <section id="intro" className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <section className="first">
              <i className="icon solid featured fa-cog"></i>
              <header>
                <h2>Ipsum consequat</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="middle">
              <i className="icon solid featured alt fa-bolt"></i>
              <header>
                <h2>Magna etiam dolor</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="last">
              <i className="icon solid featured alt2 fa-star"></i>
              <header>
                <h2>Tempus adipiscing</h2>
              </header>
              <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
            </section>
          </div>
        </div>
      </section>

      {/* Main */}
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Portfolio */}
              <section>
                <header className="major">
                  <h2>My Portfolio</h2>
                </header>
                <div className="row">
                  <div className="col-4 col-6-medium col-12-small">
                    <section className="box">
                      <a href="#" className="image featured">
                        <img src="images/pic02.jpg" alt="" />
                      </a>
                      <header>
                        <h3>Ipsum feugiat et dolor</h3>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem.</p>
                      <footer>
                        <a href="#" className="button alt">Find out more</a>
                      </footer>
                    </section>
                  </div>
                  <div className="col-4 col-6-medium col-12-small">
                    <section className="box">
                      <a href="#" className="image featured">
                        <img src="images/pic03.jpg" alt="" />
                      </a>
                      <header>
                        <h3>Magna lorem tempus</h3>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem.</p>
                      <footer>
                        <a href="#" className="button alt">Find out more</a>
                      </footer>
                    </section>
                  </div>
                  <div className="col-4 col-6-medium col-12-small">
                    <section className="box">
                      <a href="#" className="image featured">
                        <img src="images/pic04.jpg" alt="" />
                      </a>
                      <header>
                        <h3>Natoque vitae dolor</h3>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem.</p>
                      <footer>
                        <a href="#" className="button alt">Find out more</a>
                      </footer>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Blog */}
              <section>
                <header className="major">
                  <h2>The Blog</h2>
                </header>
                <div className="row">
                  <div className="col-6 col-12-small">
                    <section className="box">
                      <a href="#" className="image featured">
                        <img src="images/pic05.jpg" alt="" />
                      </a>
                      <header>
                        <h3>Magna tempus lorem</h3>
                        <p>Posted 45 minutes ago</p>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris in erat justo.</p>
                      <footer>
                        <a href="#" className="button alt">Continue reading</a>
                      </footer>
                    </section>
                  </div>
                  <div className="col-6 col-12-small">
                    <section className="box">
                      <a href="#" className="image featured">
                        <img src="images/pic06.jpg" alt="" />
                      </a>
                      <header>
                        <h3>Aptent veroeros aliquam</h3>
                        <p>Posted 45 minutes ago</p>
                      </header>
                      <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris in erat justo.</p>
                      <footer>
                        <a href="#" className="button alt">Continue reading</a>
                      </footer>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
