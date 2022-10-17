/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
export default function Service() {
    return (
        <Layout title="Services | TechG4">
            {/* service section */}
            <section className="service_section">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Our Services</h2>
                    </div>
                    <br/>
                    <p>With almost 8 years of experience in tech collaborations and a full commitment to delivering custom applications and services specially. TechG4 has grown into a highly skilled team of professionals capable of addressing clients’ business challenges by providing technical services such as web and mobile application development, QA, UI and UX, cloud computing, and DevOps. We specialize in custom software development services for large enterprise organizations, mid-sized and small companies, and startups across the globe.</p>
                    <div className="service_container layout_padding2">
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Web <br />
                                    Development
                                </h4>
                                <p>
                                    We use modern technologies to deliver exquisitely scalable and robust web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-2.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Mobile <br />
                                    Development
                                </h4>
                                <p>
                                    We are expert in creating native, hybrid, and cross-platform mobile apps from start to finish.
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-3.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Quality  <br />
                                    Assurance
                                </h4>
                                <p>
                                    Solid Software testing is conducted at every phase of the project ensuring a stable release each time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end service section */}
        </Layout>

    )
}