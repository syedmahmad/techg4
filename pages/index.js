import Layout from "../hoc"
export default function Home() {
  return (
    <Layout title="TechG4">
      <div className="hero_area">
        {/* slider section */}
        <section className=" slider_section ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              >
                01
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                02
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                03
              </li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="slider_detail-box">
                        <h1>
                          Manifesting The Technology For Your Future
                        </h1>
                        <p>
                          Committed to meet deadlines, our deep software engineering and product expertise offer the best solutions to your business needs.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* welcome section */}
      <section className="welcome_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Warmly Welcome to TechG4</h2>
          </div>
          <div className="layout_padding2">
            <div className="img-box">
              <img src="images/welcome.png" alt="" />
            </div>
            <div className="detail-box">
              <p>
                At TechG4, our quality of services has always resulted in a fulfilling customer experience. Our customers range from startups, startup accelerators to established businesses and enterprises. We follow a customer-centric, collaborative approach after understanding customer’s business needs and gradually addressing them through crafting custom software solutions.
              </p>
              <div>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end welcome section */}
      {/* service section */}
      <section className="service_section">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Our Services</h2>
          </div>
          <div className="service_container layout_padding2">
            <div className="service_box">
              <div className="img-box">
                <img src="images/s-1.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h4>
                  Web Design <br />
                  UX/UI
                </h4>
                <p>
                  have suffered alteration in some form, by injected humour, or
                  randomised words which don&apos;t look even slightly believable. If you
                  are
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="img-box">
                <img src="images/s-2.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h4>
                  Web <br />
                  Development
                </h4>
                <p>
                  have suffered alteration in some form, by injected humour, or
                  randomised words which don&apos;t look even slightly believable. If you
                  are
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="img-box">
                <img src="images/s-3.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h4>
                  Figma <br />
                  to Website
                </h4>
                <p>
                  have suffered alteration in some form, by injected humour, or
                  randomised words which don&apos;t look even slightly believable. If you
                  are
                </p>
              </div>
            </div>
          </div>
          <div>
            <a href="">Read More</a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/*problem section */}
      <section className="problem_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Do you have any business problem ?</h2>
          </div>
          <div className="layout_padding2">
            <div className="img-box">
              <img src="images/problem.jpg" alt="" />
            </div>
            <div className="detail-box">
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable. I
              </p>
              <div>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end problem section */}
      {/* why section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="content-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis
            </p>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/smiley.png" alt="" />
                </div>
                <div className="detail-box">
                  <h3>99%</h3>
                  <h6>SATISFIED CLIENTS</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/monitor.png" alt="" />
                </div>
                <div className="detail-box">
                  <h3>4700+</h3>
                  <h6>AWESOME planing</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/multiple-users-silhouette.png" alt="" />
                </div>
                <div className="detail-box">
                  <h3>4500+</h3>
                  <h6>CLIENTS</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/bar-chart.png" alt="" />
                </div>
                <div className="detail-box">
                  <h3>19000+</h3>
                  <h6>DAILY business</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <h2>What Our Clients Says</h2>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container layout_padding2">
                  <div className="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div className="detail-box">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>Joans Mark</h5>
                      <p>cal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div className="detail-box">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>Joans Mark</h5>
                      <p>cal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container layout_padding2">
                  <div className="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div className="detail-box">
                    <div className="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="name">
                      <h5>Joans Mark</h5>
                      <p>cal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container contact_heading">
          <h2>Contact Us</h2>
          <p>
            psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="container">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName4">Name</label>
                <input type="text" className="form-control" id="inputName4" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNumber4">Phone number</label>
                <input type="tel" className="form-control" id="inputNumber4" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Select Service</label>
                <select id="inputState" className="form-control">
                  <option selected="" />
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <input
                type="text"
                className="form-control"
                id="inputMessage"
                placeholder=""
              />
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="">
            Send
          </button>
        </div>
      </section>
      {/* end contact section */}
      <div className="footer_bg">
        {/* info section */}
        <section className="info_section layout_padding2-bottom">
          <div className="container">
            <img src="images/techg4Logo.png" style={{ height: '140px', width: '250px' }}></img>
          </div>
          <div className="container info_content">
            <div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>Useful Link</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>The Services</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="">sit amet, consectetur</a>
                      </li>
                      <li>
                        <a href="">adipiscing elit,</a>
                      </li>
                      <li>
                        <a href="">sed do eiusmod</a>
                      </li>
                      <li>
                        <a href="">tempor incididunt</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>Contact Us</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="">dolor sit amet,</a>
                      </li>
                      <li>
                        <a href="">consectetur</a>
                      </li>
                      <li>
                        <a href="">adipiscing</a>
                      </li>
                      <li>
                        <a href="">elit, sed do eiusmod</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
              <div className="social-box">
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/linkedin1.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram1.png" alt="" />
                </a>
              </div>
              <div className="form_container mt-5">
                <form action="">
                  <label htmlFor="subscribeMail">Newsletter</label>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    id="subscribeMail"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
      </div>
    </Layout>

  )
}
