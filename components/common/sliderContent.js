import React from 'react';
import SimpleSlider from './SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from 'next/router';

const SliderContent = () => {
  return (
      <section className="hero_section">
        <div className='container'> 
        <div className='inner_container w-md-75'>
          <div className='row'>
          <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6'>
            <div className='content_div_xs '>
          <h2 className='main_heading w-100'>
            Economical top Engineers And Resources
            {/* Manifesting The Technology For Your Future */}
          </h2>
          <p className='subHeading'>
            We help to scale your team and projects
            with expert top Engineers and Talent in 
            very economical way. How much economical? 
          </p>
          <div className=''> 
            <button className='hero_btn' onClick={() => Router.push('/contact')}>
              Let&#39;s Talk  <i class="arrow_right bi bi-arrow-right" />
          </button>
          </div>

          </div>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6'>
            <div className='content_div_img w-md-75'>
              <div className='heart-container'> 
                  <SimpleSlider />
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default SliderContent;