import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='Hero'>
    <img src={profile_img} alt="profile picture"  class/>
    <h1><span>I'm Pasindu Ransika Kossinna,</span> front end web developer in srilanka.</h1>

    <div className='Hero-action'>
      <div className="Hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className="Hero-resume">My resume</div>
    </div>
    </div>

    
  )
}

export default Hero