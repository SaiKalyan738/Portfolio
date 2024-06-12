import './Bg.css'
import React from 'react'
import Intro from '../assets/pic01.jpg'
import Resume from '../assets/Resume.pdf'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Bg = () => {
  return (
    <section id='home'>
        <div className="container">
            <div className="left-side">
                <div className="text-content">
                    <span className="hello">Hello Dev's</span>
                    <span className="title">I'm a REACT DEVELOPER</span>
                </div>
                <div className='social-media'>
                    <a href="https://www.facebook.com/nadithokakalyan/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/sai_kalyan_n/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://t.me/sai7335" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram"></i>
                    </a>
                </div>
                <a href={Resume} download="Resume" className="know-more">DOWNLOAD CV</a>
            </div>
            <div className="right-side">
                <img className='img' src={Intro} alt="Intro"/>
            </div>
        </div>
    </section> 
  )
}

export default Bg

