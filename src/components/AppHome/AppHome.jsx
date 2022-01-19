import React from 'react';
import Fade from "react-reveal/Fade"
import data from "../../myData"

import gif from '../../images/background.gif'

import git from '../../images/icons-for-home/github.png'
import vk from '../../images/icons-for-home/vk.png'
import telegram from '../../images/icons-for-home/telegram.svg'
import hh from '../../images/icons-for-home/hh.png'

const AppHome = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <img src={gif} alt="gif" className="gif"/>
                    <Fade bottom>
                        <h2>
                            Hi, I'm Max Lisyanskiy
                            <span role="img" aria-label="Emoji">👋</span>
                        </h2>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>Building digital</h1>
                            <h1>products, brands</h1>
                            <h1>and experience</h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="header-icons">
                            <a href="https://github.com/MaxLisyanskiy" target="_blank" className="header-icon">
                                <img src={git} alt="git"/>
                            </a>
                            <a href="https://github.com/MaxLisyanskiy" target="_blank" className="header-icon">
                                <img src={vk} alt="vk"/>
                            </a>
                            <a href="https://github.com/MaxLisyanskiy" target="_blank" className="header-icon">
                                <img src={telegram} alt="telegram"/>
                            </a>
                            <a href="https://spb.hh.ru/resume/61a2d302ff07fe62460039ed1f554542734272" target="_blank" className="header-icon">
                                <img src={hh} alt="hh"/>
                            </a>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <a href={`mailto:"hello@chetanverma.com"}`} className="primary-btn">
                            CONNECT WITH ME
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AppHome;