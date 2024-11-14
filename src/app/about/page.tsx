import React from 'react'
import "./about.css"

export default function About() { 
  return (
    <div className='about'>
      <div className='about-1'>
        <div className='aboutHeading'>
          <h1>about.</h1>
        </div>
        <div className="aboutPara">
          <p>I am an aspiring coder with a deep passion for technology and innovation. My journey began with the Governor Sindh Initiative for GenAI, Web3, and the Metaverse...</p>
        </div>
      </div>
      <div className="about-2">
        <div className="ab-1a">
          <h1 className='ab-2-head'>● 2020 - 2021</h1>
          <br />
          <p className='ab-2-para'>Fsc student at Goverment Collage...</p>
        </div>
        <div className="ab-1b">
          <h1 className='ab-2-head'>● 2021 - 2022</h1>
          <br />
          <p className='ab-2-para'> Free at home...</p>
        </div>
        <div className="ab-1c">
          <h1 className='ab-2-head'>● 2023 - Present</h1>
          <br />
          <p className='ab-2-para'>Currently Learning in Giaic...</p>
        </div>
      </div>
    </div>
  )
}



