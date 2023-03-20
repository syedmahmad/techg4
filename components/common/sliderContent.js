
import React from 'react'

const SliderContent = () => {
  return (
    <div className="hero_area">
    <section className=" slider_section ">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      {/* <ol className="carousel-indicators">
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
      </ol> */}
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ipadAirResponsive specfic-Height">
                <div className="slider_detail-box ">
                  <h1 className="heading ">
                    Manifesting The Technology For Your Future
                  </h1>
                  <p className="sub-heading font_size">
                    Committed to meet deadlines, our deep software engineering and product 
                    expertise offer the best solutions to your business needs.
                  </p>
                  {/* <div className="btn-box">
                    <a href="" className="btn-1">
                      Read More
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ipadAirResponsive specfic-Height">
                <div className="slider_img-box ">
                  <img src="images/slider-img.png" alt="" className="insider-image"/>
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
  </div>
  )
}

export default SliderContent;