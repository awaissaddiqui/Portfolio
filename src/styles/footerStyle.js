import styled from "styled-components";

export const FooterStyle = styled.footer`
     background-color: #282828;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     position:relative;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     width: 100%;
     height: 100%;

     .code{
          flex: 2;
          margin: -3rem 1rem;
          color: white;
          padding-bottom: 12px;
          font-size: 1.5rem;
          font-family:'Verdana, Geneva, Tahoma, sans-serif' ;
     }
     .code2{
          flex: 1;
          float: right;
     }

     @media screen (min-width: 780px){
          width: 100vw;
          display: flex;
          .code, .code2{
               padding: 3rem 4rem;
               font-size :1rem ;
          }
     }

     
     `; 
