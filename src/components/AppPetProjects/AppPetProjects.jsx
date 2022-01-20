import React, {useState} from "react"
import Fade from "react-reveal/Fade"

const AppPetProjects = () => {

    return (
        <div className="section">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom cascade>
                      <h3 className="projects-title">Do you want to see the pet projects?</h3>
                      <div className="button">
                        <a href="https://github.com/MaxLisyanskiy?tab=repositories" target="_blank" rel="noreferrer" className="button__text">Click</a>

                        <div className="button__wrapper">
                          <div className="button__arrow"></div>
                          <div className="button__border-circle"></div>
                          <div className="button__mask-circle">
                            <div className="button__small-circle"></div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AppPetProjects;
