import styled from "styled-components"
// styled Home.jsx
export const Home1 = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;
export const Description = styled.div`
flex:1;
font-family: 'Lobster', cursive;
h2{
  font-weight: lighter;
}
`;
export const Image = styled.div`
flex: 1;
overflow: hidden;
img{
  max-width: 100%;
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
`;
export const Hide = styled.div`
  overflow: hidden;
`;

// styled Nav.jsx
export const StyledNav = styled.nav`
     display: flex;
     min-height: 10vh;
     margin: auto;
     justify-content: space-between;
     align-items: center;
     padding: 1rem 6rem;
     background: #282828;
     a{
          color: white;
          text-decoration: none;
     }
     ul{
          display: flex;
          list-style: none;
          font-family: "Inter", sans-serif;
     }
     #logo{
          font-size: 2rem;
          font-family: "Lobster" , cursive;
          font-weight: lighter;
          color: white;
     }
     li{
          padding-left: 9rem;
          position: relative;
     }
     `;

// style MyWork.jsx