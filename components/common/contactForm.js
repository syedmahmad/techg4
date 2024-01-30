import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { usePathname } from 'next/navigation'
import { sendContactForm } from "../../lib/api";
import GoogleMapComponent from "./GoogleMapComponent";
import Spinner from 'react-bootstrap/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ContactForm = () => {
  const pathName = usePathname();
  const error = () => toast("All Fiedls Are Required");
  const [loading, setLoading] = useState(false);
  const notify = () => toast("Email Send !");

  const fromInput =
  {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
  const [userInput, setUserInput] = useState(fromInput);
  const formDataChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (userInput.name.trim() === "" || userInput.email.trim() === "" || userInput.phone.trim() === "" || userInput.service.trim() === "" || userInput.message.trim() === "") {
      error();
      //   If Fields are empty Loader will not visible 
      setLoading(false);
    }
    else {
      const res = await sendContactForm(userInput);
      if (res.status === 200) {
        //conditional rendering
        setUserInput({ name: '', email: '', phone: '', service: '', message: '' });
        setLoading(false);
        notify();
      }
      else if (res.status === 400) {
        setLoading(false);
        toast(res.statusText);
      }
    }

  }
  return (
    <>
      {pathName !=="/contact" ? <section className={`${pathName === "/contact" ? "contact_sectionWithout_clipPath layout_padding_form responsive-margin" : "contact_section layout_padding_form responsive-margin"}`}>
        <div className="container contact_heading">
          <h2>Contact Us</h2>
          <p>
            <span>London :</span><span className="mx-1">&#128222;</span>  +44 7483 408351
          </p>
        </div>
        {/* Form Started here */}

        <div className="container">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName4">Name</label>
                <input type="text" className="form-control" value={userInput?.name} id="inputName4" onChange={(e) => formDataChange(e)} name="name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" value={userInput?.email} id="inputEmail4" onChange={(e) => formDataChange(e)} name="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNumber4">Phone number</label>
                <input type="tel" className="form-control" value={userInput?.phone} id="inputNumber4" onChange={(e) => formDataChange(e)} name="phone" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Select Service</label>
                <select id="inputState" className="form-control" value={userInput?.service} onChange={(e) => formDataChange(e)} name="service" required>
                  <option>{" "}</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Quality Assurance</option>
                  <option>Consultancy</option>
                  <option>Engineering</option>
                  <option>Technology</option>
                  <option>IT Consulting</option>
                  <option>Software Design & Development</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                type="text"
                className="form-control"
                value={userInput?.message}
                id="inputMessage"
                placeholder=""
                onChange={(e) => formDataChange(e)}
                name="message"
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="hero_btn" onClick={(e) => handleSubmit(e)}>
                {loading ? <Spinner animation="border" role="status">
                  <span className="visually-hidden"></span>
                </Spinner> : "Send"}
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
        <ToastContainer />
      </section> :
        <section className="contact_us_section">
          {/* this will only show on contact us page */}
          <div className="container">
            <div className="contact_page_Wrapper">
              <h2 className="text-center form_heading">Contact Information</h2>
              <p className="text-center">Contact us on any of our channel below and our team will get back to you within 24 hours.</p>
              <div className='row_service mt-4'>
                <div className='column_service'>
                  <div className='card_service_contact'>
                    <div className='icon_wrapper_contact'>
                      <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <h3 className='service_name_contact'>Locations</h3>
                    <div className="">
                      <div className="">
                        <p className="contact_card_des">London Office</p>
                        <p className="contact_card_des">Tritonvägen Sundbyberg Sweden</p>
                        <p className="contact_card_des">1141 F-Block State Life Housing Society, Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column_service'>
                  <div className='card_service_contact'>
                    <div className='icon_wrapper_contact'>
                      <i class="bi bi-envelope-paper-fill"></i>
                    </div>
                    <h3 className='service_name_contact'>Email Us</h3>
                    <div>
                    <p className="contact_card_des">syedmahmad099@techg4.com</p>
                        <p className="contact_card_des"></p>
                        <p className="contact_card_des"></p>
                    </div>
                  </div>
                </div>
                <div className='column_service'>
                  <div className='card_service_contact'>
                    <div className='icon_wrapper_contact'>
                      <i class="bi bi-telephone-outbound"></i>
                    </div>
                    <h3 className='service_name_contact'>Phone No</h3>
                    <div>
                    <p className="contact_card_des">+44 7483 408351</p>
                    <p className="contact_card_des">+92 334 9998990</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Maps */}
              <div className="mt-5">
              <GoogleMapComponent />
              </div>
              {/* TODO: Need to add Google Maps Api  */}
              {/* form with image section started here */}
         <div className="container">
          <form className="p-5"> 
          <h2 className="text-center form_heading">Contact Us Form</h2>
            <div className="row mt-5">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName4">Name</label>
                <input type="text" className="form-control" value={userInput?.name} id="inputName4" onChange={(e) => formDataChange(e)} name="name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" value={userInput?.email} id="inputEmail4" onChange={(e) => formDataChange(e)} name="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNumber4">Phone number</label>
                <input type="tel" className="form-control" value={userInput?.phone} id="inputNumber4" onChange={(e) => formDataChange(e)} name="phone" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Select Service</label>
                <select id="inputState" className="form-control" value={userInput?.service} onChange={(e) => formDataChange(e)} name="service" required>
                  <option>{" "}</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Quality Assurance</option>
                  <option>Consultancy</option>
                  <option>Engineering</option>
                  <option>Technology</option>
                  <option>IT Consulting</option>
                  <option>Software Design & Development</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea
                type="text"
                className="form-control"
                value={userInput?.message}
                id="inputMessage"
                placeholder=""
                onChange={(e) => formDataChange(e)}
                name="message"
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="hero_btn" onClick={(e) => handleSubmit(e)}>
                {loading ? <Spinner animation="border" role="status">
                  <span className="visually-hidden"></span>
                </Spinner> : "Send"}
              </button>
              <ToastContainer />
            </div>
            </div>
           {/* 2nd column in which we are having image.... */}
           <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="contact_form_img">
              <img src="/images/hero-it-solutions.jpeg" alt="Hero It Solution" className="img-fluid contactPage_img"/>
            </div>
           </div>
            </div>
          
          </form>
        </div>
              {/* Form with image section ended here */}
            </div>
          </div>

        </section>



      }

    </>
  )
}
export default ContactForm;