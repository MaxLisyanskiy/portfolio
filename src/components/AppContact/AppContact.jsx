import React from "react"
import Fade from "react-reveal/Fade"

const AppContact = () => {
    return (
        <div className="section" id="contact">
            <div className="container">
                <div className="footer-container">
                    <Fade bottom cascade>
                        <h1>Contact</h1>
                        <h2>Let's talk about your project.</h2>
                    </Fade>
                    <a className="email-link" href={'mailto:Max_Lisyanskiy@mail.ru'}>
                        Max_Lisyanskiy@mail.ru
                    </a>
                    {/*<div className="social-icons">*/}
                    {/*    {data.social.map((socialLink, index) => (*/}
                    {/*        <a*/}
                    {/*            key={index}*/}
                    {/*            href={socialLink.url}*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*        >*/}
                    {/*            <img src={socialLink.img} alt="icons"></img>*/}
                    {/*        </a>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <span>Made With ❤ by{" "}<a href="https://www.chetanverma.com/">Chetan Verma</a></span>
                </div>
            </div>
        </div>
    )
}

export default AppContact
