import React from "react"
import Card from "./AppCard"
import Fade from "react-reveal/Fade"

import vies from '../../images/viessmann.jpg'
import vies2 from '../../images/vies.jpg'
import ezdun from '../../images/ezdun.jpg'
import sms from '../../images/sms.jpg'
import tclub from '../../images/tclub.jpg'
import bushe from '../../images/bushe.jpg'

const AppProjects = () => {

    const proj = [
        {
            title: "Project One", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: ezdun,
            //Project URL - Add Your Project Url Here
            url: "http://chetanverma.com/",
        },
        {
            title: "Project Two", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: vies2,
            url: "http://chetanverma.com/",
        },
        {
            title: "Project Three", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: sms,
            url: "http://chetanverma.com/",
        },
        {
            title: "Project Four", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: tclub,
            url: "http://chetanverma.com/",
        },
        {
            title: "Project Five", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: bushe,
            url: "http://chetanverma.com/",
        },
        {
            title: "Project Six", //Project Title - Add Your Project Title Here
            para:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            url: "http://chetanverma.com/",
        },
    ]

    return (
        <div className="section" id="projects">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h2>Projects</h2>
                    </Fade>

                    <div>
                        <h3 className="projects-title">Commercial projects</h3>
                        <div className="grid">
                            <Fade bottom cascade>
                                {proj.map((project, index) => (
                                    <Card
                                        key={index}
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl={project.imageSrc}
                                        projectLink={project.url}
                                    ></Card>
                                ))}
                            </Fade>
                        </div>
                    </div>
                    <div>
                        <h3 className="projects-title">Pet-projects</h3>
                        <div className="grid">
                            <Fade bottom cascade>
                                {proj.map((project, index) => (
                                    <Card
                                        key={index}
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl={project.imageSrc}
                                        projectLink={project.url}
                                    ></Card>
                                ))}
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppProjects;
