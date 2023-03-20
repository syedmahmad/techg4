import React from "react";
import 'react-toastify/dist/ReactToastify.css'; 

const ProblemContent = ()=>
{

    return(
        <section className="problem_section layout_padding responsive-margin">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Do you have any business problem ?</h2>
          </div>
          <div className="layout_padding2">
            <div className="img-box">
              <img src="images/problem.jpg" alt="" />
            </div>
            <div className="detail-box">
              <p className="font_size">
                We offer Creative Web Application Solutions for every phase of Your Business problem.
                 We offer all of the essential skills to bring your innovative concept to market, 
                 having worked with startups for over ten years and launched many successful products.
              </p>
              <div>
                <a href="/contact">Contact US</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ProblemContent;