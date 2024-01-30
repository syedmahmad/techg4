import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,  
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div className="">
      <img className="img-fluid w-100" src="images/hero-1.jpg" alt="Slide 1" />
      </div>
      <div className="">
      <img className="img-fluid w-100" src="images/hero-2.jpg" alt="Slide 2" />
      </div>
    </Slider>
  );
}