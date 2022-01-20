import React, {useState} from "react"
import Fade from "react-reveal/Fade"

import Modal from "../Modal/Modal"
import Card from "./AppCommercialCard"

import eProjects from './eProjects'


const AppCommercialProjects = () => {

  const [isModal, setModal] = React.useState(false)
  const [dataModal, setDataModal] = useState(eProjects);
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
                {eProjects.map((project, index) => (
                  <Card
                    key={index}
                    index={index}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    openModal={openModal}
                    technologyStack={project.technologyStack}
                  />
                ))}
              </Fade>
            </div>
          </div>

          {isModal
            ?
            <Modal
              visible={isModal}
              title={selectedProj.title}
              img={selectedProj.imageSrc}
              para={selectedProj.para}
              aditionalInfo={selectedProj.aditionalInfo}
              moreInfoUrl={selectedProj.moreInfoUrl}
              visiteSite={selectedProj.visiteSite}
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

export default AppCommercialProjects;
