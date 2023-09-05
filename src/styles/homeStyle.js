import styled from "styled-components"
// styled Home.jsx
const Home1 = styled.div`
     min-height: 80vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 4rem 8rem;
     color: white;
     @media (max-width: 728px){
          /* display: block; */
          position: relative;
          width: 150%;
         
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
          margin: 0rem 0rem 15rem 0rem;
         }
     }
`;
const Image = styled.div`
     flex: 1;
     overflow: hidden;
     z-index: 2;
     img{
     max-width: 100%;
     width: 85%;
     height: 50vh;
     object-fit: cover;
     border: 0px solid black;
     border-radius: 20px;
     }
     @media (max-width: 576px){
          width: 50%;
          height: 70vh;
          /* margin: 1rem 7rem; */
     }
`;
const Hide = styled.div`
  overflow: hidden;
`;
// Exports all components
export {
     Home1, Description, Image,Hide}
