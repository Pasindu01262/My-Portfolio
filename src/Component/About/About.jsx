import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile.png"

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
Welcome to my portfolio! Software Engineering undergraduate with strong skills in front-end and back-end web development,
experienced in building user-friendly web applications using modern technologies such as React,
JavaScript, and Node.js. Passionate about learning new technologies and continuously improving problemsolving abilities while expanding technical knowledge.
</p>
                     <p>
                        This portfolio showcases the projects I have developed on during my degree program, 
                        demonstrating both my technical skills and problem-solving abilities.
                     </p>
                </div>
                <div className='About-skills'>
                    <div class="About-skill"><p>HTML</p><hr style={{width:"100%"}}/></div>
                    <div class="About-skill"><p>CSS</p><hr style={{width:"100%"}}/></div>
                    <div class="About-skill"><p>React JS</p><hr style={{width:"90%"}}/></div>
                    <div class="About-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                    <div class="About-skill"><p>Bootstrap</p><hr style={{width:"100%"}}/></div>
                    <div class="About-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                    <div class="About-skill"><p>JAVA</p><hr style={{width:"60%"}}/></div>
                    <div class="About-skill"><p>C</p><hr style={{width:"80%"}}/></div>
                    <div class="About-skill"><p>PHP</p><hr style={{width:"60%"}}/></div>
                    <div class="About-skill"><p>MY SQL</p><hr style={{width:"60%"}}/></div>
                    <div class="About-skill"><p>Node.js</p><hr style={{width:"50%"}}/></div>
                    <div class="About-skill"><p>Mongo DB</p><hr style={{width:"80%"}}/></div>
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
                <h1>4+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
               <hr/>
            <div className='About-achievement'>
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
         </div>
    </div>
  )
}

export default About
