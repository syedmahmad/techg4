// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "../../config/nodemailer";
const email = process.env.REACT_APP_NODEMAILER_EMAIL;
const pass = process.env.REACT_APP_NODEMAILER_EMAIL_PASS;
const handler = async (req, res) => {
  // console.log("ReqBody",req.body);
  if (req.method === "POST") {
    const data = req.body;
    // console.log("Data",data);
    const email = process.env.REACT_APP_NODEMAILER_EMAIL;
    const pass = process.env.REACT_APP_NODEMAILER_EMAIL_PASS;
    // console.log(email, pass);
    if (data.name === '' || data.email === '' || !data.phone  === '' || !data.service === '' || !data.message === '' ) {
      // console.log("Data Shoul be Provided");
      return res.status(400).json({ message: "Bad Requesr" });
    } else{ 
      try {
        await transporter.sendMail({
          to: email,
          cc: ['syedmahmad099@techg4.com','syedmahmad099@gmail.com'], 
          from: data.email,
          subject: "Contact Email",
          text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message}`,
          html: `<h2>Message Details:</h2><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Phone: ${data.phone}</p><p>Service: ${data.service}</p><p>Message: ${data.message}</p>`,    
        });
        return res.status(200).json({success:true});
      } catch (error) {
        console.log(error);
        return res.status(400).json({message:error.message});
      }
    }
  }
  res.status(200).json({ success:true})
};
export default handler;
