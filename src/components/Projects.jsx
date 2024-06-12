import React from 'react'
import P1 from "../assets/i1.png"
import P2 from "../assets/i2.jpeg"
import P3 from "../assets/i3.jpg"
import P4 from "../assets/i4.jpg"

const data = [
  {
    id :1,
    image : P1,
    title : 'Chat with me',
    github : 'https://github.com/SaiKalyan738/Chat-with-me'
  },
  {
    id :2,
    image : P2,
    title : 'Music Player',
    github : 'https://github.com/SaiKalyan738/Music-Player'
  },
  {
    id :3,
    image : P3,
    title : 'Netflix Clone',
    github : 'https://github.com/SaiKalyan738/Netflix-Clone'
  },
  {
    id :4,
    image : P4,
    title : 'Video Conferencing Website',
    github : 'https://github.com/SaiKalyan738/Video-Conferencing-Website'
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>PROJECTS</h2>
      <div className = "container projects__container">
        {
          data.map(({id, image, title, github}) =>{
            return (
              <article key={id} className = "projects__item">
                <div className="projects__item-image">
                  <img src={image} alt="Project"/>
                </div>
                <h3>{title}</h3>
                <div className="projects__item-HeaderButtons">
                  <a href= {github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                </div>
              </article> )
          })
        }
      </div>
    </section>
  )
}

export default Projects