/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
export default function Contact() {
    return (
        <Layout title="Contact | TechG4">
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container contact_heading">
                    <h2>Contact Us</h2>
                    <p>
                        1141 F-Block State Life Housing Society, Lahore, Pakistan
                    </p>
                    <p>
                        <span>&#128222;</span> +92 334 9998990
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
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>Quality Assurance</option>
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
        </Layout>

    )
}   