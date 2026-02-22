import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className="footer">
         <div className="footer-top">
              <div className="footer-top-left">
                 <span className='footer-name'>PASINDU RANSIKA</span>
                 <p>I am a frontend developer from srilanka</p>
              </div>
              <div className="footer-top-right">
                  <div className="footer-email-input">
                      <img src={user_icon} alt="user_icon"/>
                      <input type="email" placeholder='Enter your Email'/> 
                  </div>
                  <div className="footer-subscribe">
                      Subscribe
                  </div>
              </div>
         </div>
          <hr/>
            <div className='footer-bottom'>
              <div className='footer-bottom-right'>
                  <p>term of Services</p>
                  <p>privacy policy</p>
                  <p>connect with me</p>
              </div>
            </div>
    </div>
  )
}

export default Footer