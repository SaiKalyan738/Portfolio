import React from 'react'
import Next from '../assets/pic02.png'

const About = () => {
  return (
    <section id='about'>
      <div className="about-container">
        <h1 className="about-heading">ABOUT ME</h1>
        <div className="intro-section">
          <div className="intro-image">
          <img className='img' src={Next} alt="Intro"/>
          </div>
          <div className="intro-text">
            <h1>NADITHOKA ESWAR VENKATA SAI KALYAN</h1>
            <p>Looking for an opportunity to work in a challenging position combining my skills in Front-end Engineering, which provides professional development, interesting experiences and personal growth.</p>
          </div>
        </div>
      </div>

      <h1 className="education-heading">EDUCATION</h1>
      <div class="education-container">
        <div class="education-box">
          <h2>BBV High School</h2>
          <p>Class: 10</p>
          <p>Percentage: 93.1%</p>
          <p>Location: Visakhapatnam</p>
        </div>
        <div class="education-box">
          <h2>Narayana Junior College</h2>
          <p>Class: 12</p>
          <p>Percentage: 88.35%</p>
          <p>Location: Visakhapatnam</p>
        </div>
        <div class="education-box">
          <h2>Vignan's institute of information technology</h2>
          <p>Degree: B.Tech (ECE)</p>
          <p>Percentage: 75%</p>
          <p>Location: Visakhapatnam</p>
        </div>
      </div>

      <h1 className="experience-heading">EXPERIENCE</h1>
      <div class="experience-container">
        <div class="experience-box">
          <p>Company: VulcanTech Solutions</p>
          <p>Position: Web Developer Intern</p>
          <p>Location: Visakhapatnam</p>
        </div>
        <div class="experience-box">
          <p>Company: CodersCave</p>
          <p>Position: Web Developer Intern (Virtual)</p>
          <p>Location: Visakhapatnam</p>
        </div>
      </div>
    </section>
  );
};


export default About
