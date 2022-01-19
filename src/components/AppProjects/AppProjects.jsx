import React, {useState} from "react"
import Fade from "react-reveal/Fade"
// import Modal from "react-modal/lib/components/Modal"

import Modal from "../Modal/Modal"

import Projects from './projects'
import Card from "./AppCard"

const AppProjects = () => {

    const [isModal, setModal] = React.useState(false)

    const [dataModal, setDataModal] = useState(Projects);
    const [selectedProj, setSelectedProj] = useState(null);

    const onClose = () => setModal(false)

    function openModal(i) {
      setSelectedProj(dataModal[i]);
      setModal(true)
    }

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
                                {Projects.map((project, index) => (
                                    <Card
                                        key={index}
                                        index={index}
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl={project.imageSrc}
                                        openModal={openModal}
                                    ></Card>
                                ))}
                            </Fade>
                        </div>
                    </div>


                {/* { isOpen 
                    ?                     
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={toggleModal}
                      ariaHideApp={false}
                    >
                      <span>{selectedProj.title}</span>

                      <button onClick={toggleModal}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L13 13" stroke="#24272E" stroke-width="2" stroke-linecap="round"/>
                          <path d="M13 1L1 13" stroke="#24272E" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </button>

                    </Modal>
                    :
                    <Modal></Modal>
                } */}

                  { isModal 
                    ?                     
                    <Modal
                      visible={isModal}
                      title={selectedProj.title}
                      content={<p>Что-то важное</p>}
                      footer={<button onClick={onClose}>Закрыть</button>}
                      onClose={onClose}
                    >
                      
                    </Modal>
                    :
                    <Modal></Modal>
                }
                </div>
            </div>
        </div>
    )
}

export default AppProjects;
