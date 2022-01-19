import React from 'react';
import { scrollTo } from "../scrollTo/scrollTo";

import logo from '../../images/logo.png'

const AppHeader = () => {
    return (
        <header className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div
                        role="button"
                        onClick={() => scrollTo({ id: "home" })}
                        className="name logo"
                        tabIndex={0}
                    >
                        <img src={logo} alt="logo" className="logo-img"/>
                        <span>Max Lisyanskiy</span>
                    </div>
                    <div className="links-wrapper">
                        <button onClick={() => scrollTo({ id: "about" })}>About</button>
                        <button onClick={() => scrollTo({ id: "projects" })}>Projects</button>
                        <button onClick={() => scrollTo({ id: "contact" })}>Contact</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;