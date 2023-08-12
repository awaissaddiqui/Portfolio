import styled from "styled-components"

export const Message =styled.div` 
     background-color: white;
     width: 100%;
     padding: 6rem 0rem;
     height: 100vh;
     text-align: center;
     button{
          color: black;
          margin: 2rem 0rem;
          border: 1px solid #3CB54A;
          border-radius: 25px;
          padding: 0.5rem 2rem;
          &:hover{
               background: #3CB54A;
          }
     }
     @media(max-width: 728px){
          img{
               width: 20%;
               margin: 6rem 0rem;
     }
     }
`;