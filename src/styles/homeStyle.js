import styled from "styled-components"
// styled Home.jsx
const Home1 = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-around;
     color: white;
     padding: 1rem 2rem;
     margin: 1rem;
     position:relative;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     width: 100%;
     height: 100%;

     @media (width <= 560px){
          flex-direction: column;
          width: 140%;
          padding: 4rem 2rem;
     }
     `;

const Description = styled.div`
     flex:2;
     font-family: 'Lobster, cursive';
     size:100vw;
     z-index: 2;
     h2{
     font-weight: lighter;
     }
     
     @media (width <= 560px){
         padding :2rem 1rem;
         button{
          margin: 0 auto 3rem;

         }
     }
`;
const Image = styled.div`
     flex: 1;
     overflow: hidden;
     z-index: 2;
     img{
     max-width: 80%;
     width: 100%;
     height: 70vh;
     object-fit:scale-down;
     border: 0px solid black;
     border-radius: 20px;
     }
     @media (max-width: 576px){
          width: 50%;
          height: 50vh;
          margin: 1rem 7rem;
     }
`;
const Hide = styled.div`
  overflow: hidden;
`;
// Exports all components
export {
     Home1, Description, Image, Hide
}
