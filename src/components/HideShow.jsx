import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import svg icons 
import cv from "../images/assets/cv.svg"
const Hide_show = () => {
  return (
     <>
    {/* <Personal>
     <ul>
          <li><Link to="/resume" ><Resume className="cv">Resume</Resume></Link></li>
          <li><Link to="/academic" ><Academic className="academic">Academic Record</Academic></Link></li>
          <li><Link to="/certificates" ><Certificate className="certificate">Achievements</Certificate></Link></li>
     </ul>
    </Personal> */}
    {/* Cards  */}
    <div className="card-group mb-5">
    <Data className="card col-sm-12bg-transparent border-success " >
  <img className="" src={cv} alt="Card "/>
  <div className="card-body ">
    <h5 className="card-title">Card title</h5>
     <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</Data>
    <Data className="card col-sm-12" >
  <img className="" src={cv} alt="Card  2"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
     <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</Data>
    <Data className="card col-sm-12" >
  <img className="" src={cv} alt="Card  3"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
     <Link to="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</Data>
</div>

     </>
  )
}

export default Hide_show

// const Personal = styled.div` 
//      ul{
//           display: block;
//           position: relative;
//           list-style: none;
//           padding: 5rem 0rem;
//           margin: 2rem 0rem;
//           width:12rem;
//      }
     
//      li{
//            margin: 1rem 0rem;
//      }
//      a{
//           text-decoration: none;
//      }
//      `;

// const Resume = styled.div`
//      color: white;
//      font-size: 1.5rem;
//      background-color: #23d997;
// `;
// const Academic = styled.div`
//      color: white;
//      font-size: 1.5rem;
//      background: #8ed2ff;
// `;
// const Certificate = styled.div`
//      color: white;
//      font-size: 1.5rem;
//      background: #8effa0;
// `;
const Data = styled.div`
     height: 25vh;
     text-align: center;
     margin: 5rem 5.5rem;
     padding-bottom: 4rem;

     img{
          width: 20%;
          height: 20vh;
          margin: 1rem 7rem;
     }
`