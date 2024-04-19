import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider =useRef();
    let tx=0;


const slideForward =() =>{
    if(tx>-50){
        tx -= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward =() =>{
    if(tx<0){
        tx += 25;
    } 
    slider.current.style.transform=`translateX(${tx}%)`;
}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Abhishek</h3>
                            <span>Co-Founder</span>
                        </div>
                    </div>
                    <p>Co-founder at Ecoyaan, building a sustainable e-commerce platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
</p>
                </div> 
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Sarwan</h3>
                            <span>Co-founder</span>
                        </div>
                    </div>
                    <p>Co-founder at Ecoyaan, building a sustainable e-commerce platform. 
Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Shruti</h3>
                            <span>Social Media</span>
                        </div>
                    </div>
                    <p>Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Harsh</h3>
                            <span>Engineering</span>
                        </div>
                    </div>
                    <p>Harsh is our Software Developer, who manages and optimises the infrastructure and logic of our platform</p>
                </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials
