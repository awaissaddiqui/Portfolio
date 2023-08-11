import styled from "styled-components";
import {motion} from "framer-motion" ;
// FAQ Section
const Faq = styled(Home1)`
display: block;
span{
   color: #23d997;
}
h2{
   font-weight: lighter;
   padding-bottom: 4rem;
}
.faq-line{
   background: #cccccc;
   height: 0.2rem;
   width: 100%;
   margin: 2rem 0rem;
}
.answer{
   padding: 1rem 0rem;
   p{
        padding: 1rem 0rem;
        font-family: "Inter", sans-serif;
   }
}
`;
export {Faq}