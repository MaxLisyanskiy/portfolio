import React from "react"
import Fade from "react-reveal/Fade"

import aboutImage from '../../images/aboutMe.jpg'
import AppSkills from "./AppSkills";

const About = () => {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="about-section">
                    <div className="content">
                        <Fade bottom cascade>
                            <h2>About Me</h2>
                        </Fade>
                        <div>
                            <div className="about-text">🏠 I'm pre-middle <strong>Front-end Developer</strong> living in <strong>Saint-Petersburg</strong>.</div>
                            <div className="about-text">⭐ I'm currently learning <strong>TypeScript</strong>, <strong>React</strong> and <strong>Vue</strong></div>
                            <div className="about-text">❤️ And I enjoy making  beautiful web sites on HTML,CSS and JavaScript</div>
                        </div>
                        <Fade bottom cascade>
                            <h2>Skills</h2>
                        </Fade>
                        <AppSkills/>
                    </div>

                    <div className="image-wrapper">
                        <img src={aboutImage} alt="about"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;