import React from 'react'
// import { FooterStyle } from '../styles/footerStyle'
import heart from "../images/footer/heart.png"
// import styled from 'styled-components';
import '../styles/footer-styles.css';

const Footer = () => {
  return (
    <footer>
      <div id="copyright">Code with AWAIS © 2023</div>
      <div id="developed-by">Made With&nbsp;<img src={heart} alt="awais" />&nbsp;by&nbsp;<strong>AWAIS</strong></div>
      <div id="privacy-policy">Privacy Policy</div>
    </footer>
  );
}

/* If you want you can replace my code with yours again ....
<>
      <FooterStyle>
        <div className='code'>Code with AWAIS © 2023</div>
        <Slogan>
          Made With &nbsp;
          <img src={heart} alt="awais" />
          by&nbsp;<strong>AWAIS</strong>
        </Slogan>
        <div className='code code2'>Privacy Policy</div>
      </FooterStyle>
</> 
*/

export default Footer
// const Slogan = styled.div`
//   text-align: center;
//   flex: 1;
//   width: 50%;
//   color: #fff;
//   margin: 0rem 20rem;
//   padding: 0rem 2rem;
// `