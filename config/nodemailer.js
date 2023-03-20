import nodemailer from "nodemailer"
const email = process.env.REACT_APP_NODEMAILER_EMAIL;
const pass = process.env.REACT_APP_NODEMAILER_EMAIL_PASS;
// console.log(email, pass);  
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    service:'gmail',
    auth:{
        user: email,
        pass:pass,
    },   
});
export const mailOptions = {
    to:email,
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else 
    {
      res.status(200).json({ message: 'Email Received' })
      console.log("Email sent: " + info.response);
    }
  });