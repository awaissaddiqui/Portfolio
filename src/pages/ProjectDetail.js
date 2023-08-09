import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { projectState } from "../projectState"
//import styled components
import { Details, HeadLine, Awards, AwardStyle } from '../styles/style';
// Import Animation
import { pageAnimation } from '../Animations/PageAnimation';
const ProjectDetail = () => {
     const param = useParams();
     const [projects, setProjects] = useState(projectState);
     const [project, setProject] = useState("");
     useEffect(() => {
          const currentProject = projects.filter((stateProject) => stateProject.id === param.id)
          setProject(currentProject[0])
     }, [projects, param.id])
     return (
          <>
               {project &&
                    (
                         <Details 
                         variants={pageAnimation}
                         initial="hidden"
                         animate="show"
                         exit="exit"
                         >
                              <HeadLine>
                                   <h2>{project.title}</h2>
                                   <video controls>
                                        <source src={project.video} type="video/mp4" />
                                   </video>
                              </HeadLine>
                              <Awards>
                                   {project.awards.map((award) => (
                                        <Award
                                             title={award.title}
                                             description={award.projectDescription}
                                             key={award.title}
                                        />
                                   ))}
                              </Awards>
                         </Details>
                    )}
          </>
     )
}
// Award
const Award = ({ title, description }) => {
     return (
          <AwardStyle>
               <h3>{title}</h3>
               <div className="line"></div>
               <p>{description}</p>
          </AwardStyle>
     )
}
export default ProjectDetail