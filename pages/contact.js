/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
export default function Contact() {
    return (
        <Layout title="TechG4">
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container contact_heading">
                    <h2>Contact Us</h2>
                    <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName4">Name</label>
                                <input type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputNumber4">Phone number</label>
                                <input type="tel" className="form-control" id="inputNumber4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Select Service</label>
                                <select id="inputState" className="form-control">
                                    <option selected="" />
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputMessage">Message</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMessage"
                                placeholder=""
                            />
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="">
                        Send
                    </button>
                </div>
            </section>
            {/* end contact section */}
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