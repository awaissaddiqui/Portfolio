import styled from "styled-components"
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
