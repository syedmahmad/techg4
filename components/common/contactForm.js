import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { sendContactForm } from "../../lib/api";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ContactForm = ()=>
{

  const error = () => toast("All Fiedls Are Required");
  const [loading,setLoading] = useState(false);
  const notify = () => toast("Email Send !");
  // const notifyError = () => toast("Email Send !");

    const fromInput = 
    {
        name:'',
        email:'',
        phone:'',
        service:'',
        message:''
    }
      const [userInput,setUserInput] =useState(fromInput);
     
      const formDataChange = (e)=>
      {
    
        setUserInput({...userInput,[e.target.name]:e.target.value});
    
      }

      const handleSubmit = async(e)=>
      {
         e.preventDefault();
         setLoading(true);
        if(userInput.name.trim()==="" || userInput.email.trim()==="" || userInput.phone.trim()==="" || userInput.service.trim()==="" || userInput.message.trim()==="")
        {
          error();
        //   If Fields are empty Loader will not visible 
          setLoading(false);
        }
        else
        {
            
          const res = await sendContactForm(userInput);
          if(res.status===200)
          {
            //conditional rendering
            setUserInput({name: '', email: '', phone: '', service: '', message: ''});
            setLoading(false);
            notify();
          }
          else if(res.status === 400)
          {
            setLoading(false);
            toast(res.statusText);
          }
        } 
    
      }
    return(
        <section className="contact_section layout_padding responsive-margin">
        <div className="container contact_heading">
            <h2>Contact Us</h2>
            {/* <p style={{marginLeft:'1.5rem'}}>
                London Office
            </p> */}
            <p>
                <span className="mx-2">London :</span><span className="mx-3">&#128222;</span>   +44 7483 408351
            </p>
        </div>
        {/* Form Started here */}
        
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Name</label>
                        <input type="text" className="form-control" value={userInput?.name} id="inputName4" onChange={(e)=>formDataChange(e)} name="name" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" value={userInput?.email} id="inputEmail4" onChange={(e)=>formDataChange(e)} name="email" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNumber4">Phone number</label>
                        <input type="tel" className="form-control" value={userInput?.phone} id="inputNumber4" onChange={(e)=>formDataChange(e)} name="phone" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">Select Service</label>
                        <select id="inputState" className="form-control" value={userInput?.service} onChange={(e)=>formDataChange(e)} name="service"  required>
                            <option>{" "}</option>
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>Quality Assurance</option>
                            <option>Consultancy</option>
                            <option>Engineering</option>
                            <option>Technology</option>
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
                        onChange={(e)=>formDataChange(e)}
                        name="message"
                        required
                    />
                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="button" onClick={(e)=>handleSubmit(e)}>
                {loading ?  <Spinner animation="border" role="status">
                     <span className="visually-hidden"></span>
                 </Spinner> : "Send"}
                </button>
                <ToastContainer/>
              </div>
            </form>
        </div>
        <ToastContainer/>
    </section>
    )
}
export default ContactForm;