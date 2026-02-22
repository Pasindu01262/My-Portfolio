import React from 'react'
import "./Contact.css"
import them_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1777a241-2674-47cb-890d-cbf63186a971");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert(res.message);
    }
  };


  return (
    <div id="contact" className="contact">
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={them_pattern} alt='them_pattern'/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail_icon" /><p>pasindukossinna@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call_icon" /> <p>0761908833</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location_icon" /> <p>Hanwalla</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>

                <label for="">your Name</label>
                <input type="text" placeholder='Enter your Name' name='name'/> 

                <label for="">Your Email</label>
                <input type="email" placeholder='Enter your email' name="email"/>

                <label for="">write your massage here</label>
                <textarea name="message" cols="30" rows="8" placeholder='Enter your message'></textarea>

                <button type="submit" className="contact-submit">Submit Now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact