import React from "react"
import eProjects from "./eProjects";

import html from '../../svg/html.svg';
import css3 from '../../svg/css3.svg';
import javascript from '../../svg/javascript.svg';
import typescript from '../../svg/typescript.svg';
import vue from '../../svg/vue.svg';
import nuxt from '../../svg/nuxt.svg';
import react from '../../svg/react.svg';
import next from '../../svg/next.svg';
import expo from '../../svg/expo.svg';
import laravel from '../../svg/laravel.svg';
import webasyst from '../../svg/webasyst.png'

const Card = ({index, heading, paragraph, imgUrl, openModal, technologyStack}) => {

  console.log(technologyStack)

  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            imgUrl +
            ")",
        }}
      >
        <div className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
          <div className="stack">
            {technologyStack.map((project, index) => (
              <div className="stack-icon">
                <img className="stack-icon-img" key={index} src={project.icon} alt={project.name}/>
                <span className="stack-icon-label">{project.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => openModal(index)}
            className="btn"
          >
            Explore more 👈
          </button>
        </div>
      </div>
    </>
  )
}

export default Card