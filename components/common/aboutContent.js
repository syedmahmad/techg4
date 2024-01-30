import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AboutContent = () => {
  return (
    <section className="welcome_section layout_padding responsive-margin">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Warmly Welcome to TechG4</h2>
        </div>
        <div className="layout_padding2">
          <div className="img-box">
            <img src="images/welcome.png" alt="" />
          </div>
          <div className="detail-box">
            <p className="font_size">
              At TechG4, our quality of services has always resulted in a fulfilling
              customer experience. Our customers range from startups,
              startup accelerators to established businesses and enterprises.
              We follow a customer-centric, collaborative approach after understanding customer’s business needs and gradually addressing them through crafting custom software solutions.
            </p>
            <div>
              <a href="/about" className='hero_btn'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutContent;