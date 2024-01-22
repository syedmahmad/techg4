/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
import AboutContent from "../components/common/aboutContent";
import ServicesContent from "../components/common/servicesContent"
import ProblemContent from "../components/common/problemContent";
import WhyContent from "../components/common/whyContent";
import ContactForm from "../components/common/contactForm";
import SliderContent from "../components/common/sliderContent";
// this is in progress that's why commenting this...
// import AboutCompany from "../components/common/aboutCompany";

export default function Home() {
  return (
    
    <Layout title="HOME | TechG4">
        {/* slider section */}

          <SliderContent/>

        {/* end slider section */}

      {/* welcome section */}

        <AboutContent/>
      
      {/* end welcome section */}

      {/* service section */}

         <ServicesContent/>
     
      {/* end service section */}

      {/*problem section */}

        <ProblemContent/>

      {/* end problem section */}

      {/* why section */}
            <WhyContent/>
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
      {/* AboutCompany Section Started here */}
        {/* <AboutCompany /> */}
      {/* AboutCompany Section ended here */}
      {/* contact section */}
        <ContactForm/>
      {/* end contact section */}
    </Layout>
  )
}
