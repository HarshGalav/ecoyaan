import React, { useState } from 'react'
import Navbar from './Components/Navbar/Narbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar defaultCss={false}/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Values' title='Guiding Principles'/>
        <Programs/>
        <Title subTitle='Gallery' title='Our Products'/>
        <Campus/>
        <Title subTitle='Team members' title='Roles and Responsibilities'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
