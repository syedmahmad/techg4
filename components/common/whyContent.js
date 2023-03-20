import React from "react";
const WhyContent = ()=>
{
    return(
        <section className="why_section layout_padding responsive-margin">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Why Choose Us</h2>
          </div>
          <div className="content-container">
            <p>
              We use different technologies stacks to deliver better results. 
            </p>
            <div className="row">
            <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-12  mt-5 text-center ">
                <div className="img-box">
                  <img src="images/smiley.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>HOSTING</h3> */}
                  <h6 className="mt-3">AWS, HEROKU, NETLIFY, VERCEL</h6>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-12 mt-5 text-center ">
                <div className="">
                  <img src="images/monitor.png" alt=""/>
                </div>
                <div className="detail-box">
                  {/* <h3>FRONTEND</h3> */}
                  <h6 className="mt-3"> React JS, Next JS, React with Relay, GraphQL Material UI, Chakra UI, Tailwind, HTML5, CSS3</h6>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-12 mt-5 text-center ">
                <div className="img-box">
                  <img src="images/multiple-users-silhouette.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>BACKEND</h3> */}
                  <h6 className="mt-3">NODE JS, RUBY ON RAILS, PYTHON, Hasura Actions</h6>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-6 col-sm-12 mt-5 text-center ">
                <div className="img-box">
                  <img src="images/bar-chart.png" alt="" />
                </div>
                <div className="detail-box">
                  {/* <h3>DATABASES</h3> */}
                  <h6 className="mt-3">MONGODB, POSTGRESQL, REDIS, ELASTICSEARCH</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default WhyContent;