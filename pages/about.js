import Layout from "../hoc"
export default function About() {
    return (
        <Layout title="TechG4">
            {/* welcome section */}
            <section className="welcome_section layout_padding">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Welcome To Our Company</h2>
                    </div>
                    <div className="layout_padding2">
                        <div className="img-box">
                            <img src="images/welcome.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                            </p>
                            <div>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end welcome section */}
            <div className="footer_bg">
                {/* info section */}
                <section className="info_section layout_padding2-bottom">
                    <div className="container">
                        <h3 className="">BigWing</h3>
                    </div>
                    <div className="container info_content">
                        <div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>Useful Link</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">About Us</a>
                                            </li>
                                            <li>
                                                <a href="">About services</a>
                                            </li>
                                            <li>
                                                <a href="">About Departments</a>
                                            </li>
                                            <li>
                                                <a href="">Services</a>
                                            </li>
                                            <li>
                                                <a href="">Contact Us</a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href="">Loram ipusm</a>
                                            </li>
                                            <li>
                                                <a href="">Loram ipusm</a>
                                            </li>
                                            <li>
                                                <a href="">Loram ipusm</a>
                                            </li>
                                            <li>
                                                <a href="">Loram ipusm</a>
                                            </li>
                                            <li>
                                                <a href="">Loram ipusm</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>The Services</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">About Us</a>
                                            </li>
                                            <li>
                                                <a href="">About services</a>
                                            </li>
                                            <li>
                                                <a href="">About Departments</a>
                                            </li>
                                            <li>
                                                <a href="">Services</a>
                                            </li>
                                            <li>
                                                <a href="">Contact Us</a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href="">Lorem ipsum dolor</a>
                                            </li>
                                            <li>
                                                <a href="">sit amet, consectetur</a>
                                            </li>
                                            <li>
                                                <a href="">adipiscing elit,</a>
                                            </li>
                                            <li>
                                                <a href="">sed do eiusmod</a>
                                            </li>
                                            <li>
                                                <a href="">tempor incididunt</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="d-flex">
                                        <h5>Contact Us</h5>
                                    </div>
                                    <div className="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">About Us</a>
                                            </li>
                                            <li>
                                                <a href="">About services</a>
                                            </li>
                                            <li>
                                                <a href="">About Departments</a>
                                            </li>
                                            <li>
                                                <a href="">Services</a>
                                            </li>
                                            <li>
                                                <a href="">Contact Us</a>
                                            </li>
                                        </ul>
                                        <ul className="ml-3 ml-md-5">
                                            <li>
                                                <a href="">Lorem ipsum</a>
                                            </li>
                                            <li>
                                                <a href="">dolor sit amet,</a>
                                            </li>
                                            <li>
                                                <a href="">consectetur</a>
                                            </li>
                                            <li>
                                                <a href="">adipiscing</a>
                                            </li>
                                            <li>
                                                <a href="">elit, sed do eiusmod</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                            <div className="social-box">
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
                            </div>
                            <div className="form_container mt-5">
                                <form action="">
                                    <label htmlFor="subscribeMail">Newsletter</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your email"
                                        id="subscribeMail"
                                    />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end info_section */}
            </div>
        </Layout>

    )
}