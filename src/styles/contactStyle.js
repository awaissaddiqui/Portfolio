import styled from "styled-components";
import { motion } from "framer-motion";
const ContactStyle = styled(motion.div)`
  padding: 4rem 9rem;
  color:#353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

`;
const Hide=styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
  }
`;
export {ContactStyle, Title, Hide, Circle, Social}