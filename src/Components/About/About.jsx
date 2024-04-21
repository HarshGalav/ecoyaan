import React, {useState} from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import Navbar from '../Navbar/Narbar'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const About = () => {
  const [playState,setPlayState]=useState(false);

  return (
    <>
    <Navbar defaultCss={true}/>
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)} }/>

      </div>
      <div className="about-left">
        <h2>About Ecoyaan</h2>
        <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>
        <ul>
            <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
            <li>Videos, posts, and quizzes on climate change and sustainability</li>
            <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
        </ul>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>

    </div>
    </>
  )
}

export default About
