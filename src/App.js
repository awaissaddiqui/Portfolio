import React from 'react'
import {Route, Routes} from "react-router-dom"
// import pages 
import GlobalStyled from './components/GlobalStyled'
import Nav from './components/Nav'
import ServicesSection from './components/ServicesSection'
import AboutUs from './pages/AboutUs'
import ContactUS from './pages/ContactUS'
import MyWork from "./pages/MyWork"
import Error from './components/Error'
import ProjectDetail from './pages/ProjectDetail'
const App = () => {
  return (
    <>
     <Nav/>
     <GlobalStyled/>
    <Routes>
     <Route path='/' element={<AboutUs/>}/>
     <Route path='/contact' element={<ContactUS/>}/>
     <Route path='/work/' element={<MyWork/>}/>
     <Route path='/work/:id' element={<ProjectDetail/>}/>
     <Route path='/services' element={<ServicesSection/>}/>
     <Route path='*' element={<Error/>}/>
    </Routes>

    </>
     )
}

export default App