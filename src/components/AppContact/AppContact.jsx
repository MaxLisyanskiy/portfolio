import React from "react"
import Fade from "react-reveal/Fade"

const AppContact = () => {
    return (
        <div className="section" id="contact">
            <div className="container">
                <div className="footer-container">
                    <Fade bottom cascade>
                        <h2>Let's talk about your project.</h2>
                    </Fade>
                    <a className="email-link" href={'mailto:Max_Lisyanskiy@mail.ru'}>
                        Max_Lisyanskiy@mail.ru
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AppContact
