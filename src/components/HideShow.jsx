import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
// Animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// import svg icons 
import cv from "../images/assets/cv.svg"
import academic from "../images/assets/academic.svg";
import certificate from "../images/assets/certificate.svg";

const Hide_show = () => {
     useEffect(()=>{
          AOS.init();
     },[])
  return (
     <>
    {/* Cards  */}
    <Heading  data-aos="zoom-in-up">
    <h1>Welcome To my Portfolio</h1>
    </Heading>
    <CardGroup 
    className="card-group text-white " 
    data-aos="zoom-in-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"
    >
    <Data className="card col-sm-12  bg-info " >
  <img className="" src={cv} alt="Card "/>
  <div className="card-body ">
     <Link to="/resume" className=""><button className="">View Resume</button></Link>
  </div>
</Data>
    <Data className="card col-sm-12 bg-danger" >
  <img className="" src={academic} alt="Card  2"/>
  <div className="card-body">
     <Link to="/academic" className=""> <button className="">Acdemic Record</button></Link>
  </div>
</Data>
    <Data className="card col-sm-12 bg-success" >
  <img className="" src={certificate} alt="Card  3"/>
  <div className="card-body">
     <Link to="/certificates" className=""><button className="">Achievements</button> </Link>
  </div>
</Data>
</CardGroup>

     </>
  )
}

export default Hide_show

const CardGroup = styled.div`
     min-height: 80vh;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     @media(max-width: 768px) {
          flex-direction:column ;
          margin: 10rem 0rem;
     }
`
const Data = styled.div`
     height: 25vh;
     text-align: center;
     margin: 0rem 5rem;
     padding: 1rem 0rem;
     img{
          width: 20%;
          height: 20vh;
          margin: 0.5rem 7.5rem;
     }

`
const Heading = styled.h1`
     color: white;
     font-family: "Inter", sans-serif;
     text-align: center;
`
