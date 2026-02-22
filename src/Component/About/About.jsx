import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.png"

const About = () => {
  return (
    <div id="about" className='About'>
        <div className='About-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme_pattern"/>
        </div>
        <div className='About-sections'>
            <div className='About-left'>
            <img src={profile_img}  alt="profile_img"/>
            </div>
            <div className='About-right'>
                <div className='About-para'>
<p>
Welcome to my portfolio! I am Pasindu Ransika Kossinna I am an undergraduate
student at the University of Kelaniya, currently pursuing a degree in Information
and Communication Technology (BICT), specializing in the Software Engineering pathway.
My academic journey has been focused on acquiring a deep understanding of software
development, design principles, and advanced technologies that drive modern systems
and applications.
</p>
                     <p>
                        This portfolio showcases the projects I have developed on during my degree program, 
                        demonstrating both my technical skills and problem-solving abilities.
                     </p>
                </div>
                <div className='About-skills'>
                    <div class="About-skill"><p>HTML</p><hr style={{width:"70%"}}/></div>
                    <div class="About-skill"><p>CSS</p><hr style={{width:"70%"}}/></div>
                    <div class="About-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div class="About-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                    <div class="About-skill"><p>Bootstrap</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>

        </div>
         <div className='About-achievements'>
            <div className='About-achievement'>
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
              <hr/>
            <div className='About-achievement'>
                <h1>2+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
               <hr/>
            <div className='About-achievement'>
                <h1>0+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
         </div>
    </div>
  )
}

export default About