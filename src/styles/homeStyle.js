import styled from "styled-components"
// styled Home.jsx
const Home1 = styled.div`
     min-height: 90vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5rem 10rem;
     color: white;
     @media (max-width: 992px){
          display: block;
          padding: 2rem 2rem;
          text-align: center;
     }
     `;
const Description = styled.div`
     flex:1;
     font-family: 'Lobster', cursive;
     z-index: 2;
     h2{
     font-weight: lighter;
     }
     @media (max-width: 992px){
         padding :0;
         button{
          margin: 2rem 0rem 5rem 0rem;
         }
     }
`;
const Image = styled.div`
     flex: 1;
     overflow: hidden;
     z-index: 2;
     img{
     max-width: 100%;
     width: 100%;
     height: 74vh;
     object-fit: cover;
     margin: 0rem 3.5rem;
     }
     @media (max-width: 900px){
          width: 100%;
          height: 70vh;
     }
`;
const Hide = styled.div`
  overflow: hidden;
`;
// Exports all components
export {
     Home1, Description, Image,Hide}
