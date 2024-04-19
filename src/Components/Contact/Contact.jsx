import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import while_arrow from '../../assets/white-arrow.png'
const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08bb249c-094d-4731-8e75-098b658a7c13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you! Our 'Send us a message' feature is your direct line to our team. Whether you're inquiring about our products or services, need assistance, or want to provide feedback, we're here to help. Simply fill out the form below, and we'll get back to you as soon as possible. Your input is invaluable to us, and we're committed to ensuring your experience with us is nothing short of exceptional. Thank you for reaching out!</p>
        <ul>
            <li><img src={mail_icon} alt="" /> contact@gmail.com</li>
            <li><img src={phone_icon} alt="" />919191919191</li>
            <li><img src={location_icon} alt="" />Karnataka, India</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter Your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={while_arrow} alt="" /></button>
            
        </form>
        <span>{result} </span>
      </div>

    </div>
  )
}

export default Contact
