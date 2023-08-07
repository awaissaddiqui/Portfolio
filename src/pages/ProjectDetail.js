import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { projectState } from "../projectState"

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
                         <Details>
                              <HeadLine>
                                   <h2>{project.title}</h2>
                                   <video controls>
                                        <source src={project.video} type="video/mp4"/>
                                   </video>
                              </HeadLine>
                              <Awards>
                                   {project.awards.map((award)=> (
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
const Award = ({title , description})=>{
     return(
          <AwardStyle>
               <h3>{title}</h3>
               <div className="line"></div>
               <p>{description}</p>
          </AwardStyle>
     )
}

const Details = styled.div`
     color: white;
`;
const HeadLine = styled.div`
     min-height: 90vh;
     padding-top: 20vh;
     position: relative;
     h2{
          position: absolute;
          top: 10%;
          left: 43%;
          transform: translate(-10%, -10%);
     }
     video{
          width: 100%;
          height: 60vh;
     }
`;
const Awards = styled.div`
     min-height: 50vh;
     display: flex;
     margin: 5rem 10rem;
     align-items: center;
     justify-content: space-around;
`;
const AwardStyle = styled.div`
     padding: 3rem;
     h3{
          font-size: 2rem;
     }
     .line{
          width: 100%;
          background: #23d997;
          height: 0.5rem;
          margin: 1rem 0rem;
     }
`;



export default ProjectDetail