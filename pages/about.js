/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
export default function About() {
    return (
        <Layout title="About Us | TechG4">
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
                        <div className="detail-box box-w85">
                            <p>
                                TechG4 is a technology consulting organization that connects strategy, design and engineering services into a seamless workflow devised to support clients every step of the way.
                                <br/><br/>
                                We have a smart team of like-minded professionals with a shared vision for their company. The team is passionate about creating valuable products and helping other businesses climb the ladder of technological development.
                                <br/><br/>
                                We specialize in web application development for desktops and mobile devices. Let us help solving the growing technology needs of your business so that you can focus on the core.
                            </p>
                        </div>
                        <div className="box-w85">
                            <ul className="flex-parent">
                                <li className="flex-center">
                                    <span className="">Full Stack Software Dev</span>
                                    <span className="">Quality Assurance</span>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="flex-center">
                                    <span className="">24/7 Technical Support</span>
                                    <span className="">IT Consultancy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* end welcome section */}
        </Layout>

    )
}