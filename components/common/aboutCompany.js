import React from "react";
import Router from "next/router";

const AboutCompany = () => {
  return (
    <section>
      <div className="about_Wrapper">
        <div className="container">
          <div className="custom_heading-container">
            <h2 className="main_heading mt-5">About Company</h2>
          </div>
          <div className="p-5">
            <div className="row row_about_company">
              <div className="col-sm-12 col-md-7 col-lg-8 col-xl-6 col-xxl-6">
                <div>
                  <h2 className="company_subHeading">Providing Best Talent on Demand from all over The World</h2>
                  <p className="subHeading">Our experts know how to fulfill your client need and make sure keeping cultural value at business as well as social.</p>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-xl-4 col-xxl-6">
                    <div className='company_md_container'>
                      <button className='company_btn' onClick={() => Router.push('/contact')}>
                        Get A Quote  <i class="arrow_right bi bi-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-xl-8 col-xxl-6">
                    <div className="about_company_md">
                      <div className="d-flex">
                        <span className="icon_wrapper_about"><i class="bi bi-telephone"></i></span>
                        <p className="m-2">Call & WhatsApp</p>
                      </div>
                      <div className="ml-4">
                        <a href="https://wa.me/923349998990" target="_blank">+92 334 9998990</a>
                      </div>
                    </div>
                  </div>
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
                        <h3 className='service_name text-white'>IT Consulting</h3>
                        <p className='service_des text-white'>
                          Our IT team built strategies which lead to growth and success beyond expectations
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
                        <h3 className='service_name text-white'>Software Design & Development</h3>
                        <p className='service_des text-white'>
                          Growth in scale of revenue and team is the main concern of our business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd column */}
              <div className="col-sm-12 col-md-5 col-lg-4 col-xl-6 col-xxl-6 ">
                <div className="images_div">
                  <div className="img_1 w-50">
                    <img className="img_company" src="images/1.jpg" alt="Slide 1" />
                  </div>
                  <div className="img_2 col_company">
                    <img className="img_company_1" src="images/3.jpg" alt="Slide 1" />
                  </div>
                  <div className="img_3 col_company">
                    <img className="img_company_2" src="images/about-dots.png" alt="Slide 1" />
                  </div>
                  <div className="img_4 col_company">
                    <img className="img_company_3" src="images/2.jpg" alt="Slide 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
};

export default AboutCompany