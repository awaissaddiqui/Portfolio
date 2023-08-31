import styled from "styled-components";

export const FooterStyle = styled.footer`
     background: #282828;
     .code{
          margin: -1.5rem 1rem;
          color: white;
          padding-bottom: 12px;
          font-size: 1.5rem;
          font-family:Verdana, Geneva, Tahoma, sans-serif ;
     }
     .code2{
          margin: -1.5rem 1rem;
          color: white;
          padding-bottom: 12px;
          font-size: 1.5rem;
          font-family:Verdana, Geneva, Tahoma, sans-serif ;
          float: right;
     }
     .icons{
          text-align: center;
          margin: -2.5rem 0rem;
     }
     .upwork{
          margin: 0rem 0.7rem;
     }
     .linkedin{
          margin: 0rem 0.7rem;
     }
    
     @media(max-width: 576px){
          display: flex;
          width: 100%;
          padding: 3rem 2rem;
          img{
               width: 20%;
               margin: 1rem 0rem;
          }
          .code, .code2{
               margin: 0rem 4rem;
               font-size :1.5rem ;
          }
     }
     `; 
