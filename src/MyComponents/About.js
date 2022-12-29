import React from 'react'
import about from './about.png';

const About = () => {
  let mystyle={
    textDecoration: "none",
    color: "Black",
  };
  let iconstyle={
    width:"400px",
    height:"400px",
}
  return (
    <div className='container mt-4 d-flex flex-column'>
      <p className='text-center'>
      <b>App Name:</b> Todo-List Web App. <br/>
      <b>Framework used:</b> React js. <br/>
      <b>Created by:</b> <a target="_blank" href="http://akash.rf.gd/" style={mystyle} >Akash Chowdhury</a>. <br/>
      <b>Deployed in:</b> Github. <br/>
      <b>Created date:</b> 30 Dec 2022. <br/>
      <br/>
      <p>This is my frontend project.</p>
      </p>
      <div className='d-flex ml-5 flex-column justify-content-center align-self-center'>
        <img src={about} style={iconstyle}></img>
      </div>
    </div>
  )
}

export default About
