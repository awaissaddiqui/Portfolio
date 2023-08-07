import React from 'react'
// import pages 
import GlobalStyled from './components/GlobalStyled'
import Nav from './components/Nav'
import ServicesSection from './components/ServicesSection'
import AboutUs from './pages/AboutUs'
import {Route, Routes} from "react-router-dom"
import ContactUS from './pages/ContactUS'
import MyWork from "./pages/MyWork"
const App = () => {
  return (
    <>
     <Nav/>
     <GlobalStyled/>
    <Routes>
     <Route path='/' element={<AboutUs/>}/>
     <Route path='/contact' element={<ContactUS/>}/>
     <Route path='/work' element={<MyWork/>}/>
     <Route path='/services' element={<ServicesSection/>}/>
    </Routes>
    </>
     )
}

export default App