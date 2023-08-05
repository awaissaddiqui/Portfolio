import React from 'react'
// import pages 
import GlobalStyled from './components/GlobalStyled'
import Home from './components/Home'
import Nav from './components/Nav'
import ServicesSection from './components/ServicesSection'


const App = () => {
  return (
    <>
     <Nav/>
     <Home/>
     <GlobalStyled/>
     <ServicesSection/>
    </>
     )
}

export default App