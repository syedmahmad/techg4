import React from "react";
import { useRouter } from "next/router";

const MoreAboutUs = () => {
  const Router = useRouter();
  return (
    <section>
      <div className="container md_about_margin">
        <div className="p-5">
          <h2 className="text-center main_heading">About Us</h2>
        </div>
        <div className="">
          <div className="row row_about_company">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-6 col-xxl-6 ">
              <div>
                <img src="images/about_us.png" alt="why_1.png" className="img-fluid" />
              </div>
            </div>

            {/* 2nd column */}
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-6 col-xxl-6">
              <div>
                <h2 className="company_subHeading">Best talent, Competitive Cost, Incredible IT Service Infrastructure</h2>
                <p className="subHeading">Our experts know how to fulfill your client need and make sure keeping cultural value at business as well as social.</p>
              </div>
              {/* another row to add cards */}
              <div className="row">
                {/* first column */}
                <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                  <div className='column_service_company'>
                    <div className='card_service mt-4'>
                      <div className='icon_wrapper bg-light'>
                        <img className="icons" src="images/icon1.png" />
                      </div>
                      <h3 className='service_name text-white'>Awards Winning Company</h3>
                      <p className='service_des text-white'>
                        Our award-winning company excels in delivering innovative solutions,
                        driving success, and setting new industry standards with exceptional expertise.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd column */}
                <div className="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
                  <div className='column_service_company'>
                    <div className='card_service mt-4'>
                      <div className='icon_wrapper bg-light'>
                        <img className="icons" src="images/icon2.png" />
                      </div>
                      <h3 className='service_name text-white'>Startup IT Solution & Business Dev</h3>
                      <p className='service_des text-white'>
                        Our startup IT and software development company pioneers cutting-edge solutions,
                        empowering businesses with transformative technology and unmatched expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 3 cards */}
          <div className='row_service mt-5'>
            <div className='column_service'>
              <div className='card_service_contact'>
                <div className='icon_wrapper_contact'>
                  <i class="bi bi-emoji-smile-fill"></i>
                </div>
                <h3 className='service_name_contact'>Simplicity</h3>
                <div className="">
                  <div className="">
                    <p className="contact_card_des">
                      Experience the essence of simplicity on our website, where intuitive design and
                      user-friendly navigation create an effortless browsing experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column_service'>
              <div className='card_service_contact'>
                <div className='icon_wrapper_contact'>
                  <i class="bi bi-envelope-paper-fill"></i>
                </div>
                <h3 className='service_name_contact'>Social Good</h3>
                <div>
                  <p className="contact_card_des">
                    Discover the power of social good on our website, where we highlight impactful
                    initiatives and inspire positive change in the world.
                  </p>
                </div>
              </div>
            </div>
            <div className='column_service'>
              <div className='card_service_contact'>
                <div className='icon_wrapper_contact'>
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </div>
                <h3 className='service_name_contact'>Trust Partner</h3>
                <div>
                  <p className="contact_card_des">
                    As a trusted partner, our website fosters transparency, reliability, and integrity,
                    providing a secure platform for collaborative and fruitful partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* An ImpactFul Application section started here */}
        <div className="p-3">
          <h2 className="text-center mt-3 main_heading"> Why Choose Us </h2>
          <p className="text-center subHeading">Top-Notch Software Development and Digital Transformation</p>
          <div className="row mt-5">
            {/* image column here */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div>
                <img src="images/why-choose1-min.jpeg" alt="About Us Image" className="img-fluid" />
              </div>
            </div>
            {/* text with some bullets is here  */}
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h2 >An impactful Application Needs an innovative and interactive.</h2>
              <p>Our industry expert team build trust through transparency, reliability and hard work. Learn and implement latest trend and innovations.</p>
              <div>
                <p>
                  <span className="mr-2" style={{ fontSize: '20px' }}><i class="bi bi-check-circle"></i></span> Comprehensive UI/UX Assessment
                </p>
                <p>
                  <span className="mr-2" style={{ fontSize: '20px' }}><i class="bi bi-check-circle"></i></span> Deep Contextual Research and 360° Planning
                </p>
                <p>
                  <span className="mr-2" style={{ fontSize: '20px' }}><i class="bi bi-check-circle"></i></span> Wireframing & Prototyping
                </p>
              </div>
              <div className=''>
                <button className='hero_btn' onClick={() => Router.push('/contact')}>
                  Let&#39;s Talk  <i class="arrow_right bi bi-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* An ImpactFul Application section ended here */}

      </div>
    </section>

  )
}

export default MoreAboutUs;