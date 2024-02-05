import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (

     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element ={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
     </Routes>
     <Footer/>
     </BrowserRouter> 
   
  )
}

export default App
