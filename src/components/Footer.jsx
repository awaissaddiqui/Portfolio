import React from 'react'
import { FooterStyle} from '../styles/footerStyle'
import heart from "../images/footer/heart.png"
import styled from 'styled-components'

const Footer = () => {
     return (
     <>
    <FooterStyle>
      <div className='code'>©Code with AWAIS</div>
      <Slogan><strong>Made With </strong>
      <img src={heart} alt="awais" />
      </Slogan>
      <div className='code2'>Privacy Policy</div>
    </FooterStyle>
     </>
  )
}

export default Footer
const Slogan = styled.div`
  text-align: center;
  width: 50%;
  color: white;
  margin: 0rem 20rem;
  padding: 0rem 2rem;
`