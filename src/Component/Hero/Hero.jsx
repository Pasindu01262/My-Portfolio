import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CV from '../../assets/Pasindu Ransika CV.pdf';

const Hero = () => {
  return (
    <div id="home" className='Hero'>
    <img src={profile_img} alt="profile picture"  class/>
    <h1><span>I'm Pasindu Ransika Kossinna,</span> Full-Stack web developer in srilanka.</h1>

    <div className='Hero-action'>
      <div className="Hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className="Hero-resume" onClick={() => window.open(CV)}>My resume</div>
    </div>
    </div>

    
  )
}

export default Hero
