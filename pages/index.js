/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
import Service from "./service"

export default function Home() {
  return (
    <Layout title="HOME | TechG4">
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
                        {/* <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                        </div> */}
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
            {/* <div className="carousel_btn-container">
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
            </div> */}
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
                <a href="/about">Read More</a>
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
                    <br/>
                    <p>With almost 8 years of experience in tech collaborations and a full commitment to delivering custom applications and services specially. TechG4 has grown into a highly skilled team of professionals capable of addressing clients’ business challenges by providing technical services such as web and mobile application development, QA, UI and UX, cloud computing, and DevOps. We specialize in custom software development services for large enterprise organizations, mid-sized and small companies, and startups across the globe.</p>
                    <div className="service_container layout_padding2">
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Web <br />
                                    Development
                                </h4>
                                <p>
                                    We use modern technologies to deliver exquisitely scalable and robust web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-2.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Mobile <br />
                                    Development
                                </h4>
                                <p>
                                    We are expert in creating native, hybrid, and cross-platform mobile apps from start to finish.
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-3.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Quality  <br />
                                    Assurance
                                </h4>
                                <p>
                                    Solid Software testing is conducted at every phase of the project ensuring a stable release each time.
                                </p>
                            </div>
                        </div>
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
                We offer Creative Web Application Solutions for every phase of Your Business problem. We offer all of the essential skills to bring your innovative concept to market, having worked with startups for over ten years and launched many successful products.
              </p>
              <div>
                <a href="/contact">Contact US</a>
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
              We use different technologies stacks to deliver better results. 
            </p>
            <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/smiley.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>HOSTING</h3> */}
                  <h6>AWS, HEROKU, NETLIFY, VERCEL</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box big-size">
                  <img src="images/monitor.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>FRONTEND</h3> */}
                  <h6>React JS, Next JS, React with Relay, GraphQL Material UI, Chakra UI, Tailwind, HTML5, CSS3</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/multiple-users-silhouette.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>BACKEND</h3> */}
                  <h6>NODE JS, RUBY ON RAILS, PYTHON, Hasura Actions</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="img-box">
                  <img src="images/bar-chart.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>DATABASES</h3> */}
                  <h6>MONGODB, POSTGRESQL, REDIS, ELASTICSEARCH</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section */}
      {/* client section */}
      {/* <section className="client_section layout_padding">
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
      </section> */}
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
                <div className="container contact_heading">
                    <h2>Contact Us</h2>
                    <p>
                        1141 F-Block State Life Housing Society, Lahore, Pakistan
                    </p>
                    <p>
                        <span>&#128222;</span> +92 334 9998990
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
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>Quality Assurance</option>
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
    </Layout>

  )
}
