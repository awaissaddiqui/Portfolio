import styled from "styled-components";
import { motion } from "framer-motion";


const ContactStyle = styled(motion.div)`
  padding: 4rem 9rem;
  color:#353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 3rem;
  color: black;

`;
const Hide=styled.div`
  overflow: hidden;
  text-align: center;
`;
const Form = styled.form` 
  margin: 3rem 5rem;
  #name{
    width: 49%;
  }
  #email{
    margin-left: 1rem;
    width: 49%;
    
  }
  #subject{
    width: 100%;    
  }
  @media(max-width: 576px){
    margin: 3rem 3rem;
    #name{
      width: 47%;
    }
    #email{
      width: 47%;
    }
  }
  `;
const StyledInput = styled.input`
padding: 1rem;
border: 1px solid #23d997;
margin-top: 1.5rem;
border-radius: 35px;
&:hover{
  border:1px solid #D96ED4;
}
  `;
const StyledText = styled.textarea` 
  width: 100%;
  height: 15vh;
  border: 1px solid #23d997;
  border-radius: 15px;
  margin-top: 1.5rem;
  padding: 1rem;
  &:hover{
  border:1px solid #D96ED4;
  font-family: "Lobster", cursive;
  font-size: 1.5rem;
  @media(max-width: 576px){
    font-size: 1rem;
  }
}
`;
const StyledButton = styled.button`
  background-color: #23d997;
  color: white;
  padding: 1rem;
  width: 30%;
  float: right;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: pointer;
  &:hover{
    background-color: #D96ED4;
  }
`;
export {ContactStyle, Title, Hide, Form,StyledInput,StyledText, StyledButton}