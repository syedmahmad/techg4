/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
    return (
        <>
            <div className="footer_bg">
                {/* info section */}
                <section className="info_section layout_padding2-bottom">
                    <div className="container">
                        <h3 className="techG4">TechG4</h3>
                    </div>
                    <div className="container info_content">
                        <div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 responsive">
                                    <div className="d-flex">
                                        <h5>Our Company</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul className="responsive">
                                            <li>
                                                <a href="/about">Who We Are</a>
                                            </li>
                                            <li>
                                                <a href="/service">Services</a>
                                            </li>
                                            <li>
                                                <a href="/contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 responsive">
                                    <div className="d-flex">
                                        <h5>Our Services</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">Web Development</a>
                                            </li>
                                            <li>
                                                <a href="">Mobile Development</a>
                                            </li>
                                            <li>
                                                <a href="">Quality Assurance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 responsive">
                                    <div className="d-flex">
                                        <h5>Contact Us</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul className="responsiveUL">
                                            <li>
                                                <a href="https:www.google.com/maps/place/1141,+Block+F+State+Life+Phase+1+State+Life,+society,+Lahore,+Punjab,+Pakistan/@31.4430042,74.3965209,17z/data=!3m1!4b1!4m6!3m5!1s0x3919062eb92dd57d:0x38bcce20ffb31cdb!8m2!3d31.4429996!4d74.3987096!16s%2Fg%2F11s9mq5gkb">
                                                1141 F-Block State Life Housing Society, Lahore, Pakistan</a>
                                            </li>
                                            <li>
                                            <a href="tel:+92 334 9998990">+92 334 9998990</a>
                                            </li>
                                            <li>
                                                <a href="mailto:syedmahmad099@gmail.com">syedmahmad099@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                            {/* <div className="social-box">
                                <a href="">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/linkedin1.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/instagram1.png" alt="" />
                                </a>
                            </div> */}
                            {/* <div className="form_container mt-5">
                                <form action="">
                                    <label htmlFor="subscribeMail">Newsletter</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your email"
                                        id="subscribeMail"
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* end info_section */}
            </div>
        </>
    )
}