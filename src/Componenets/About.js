import React from 'react'
import photo from '../photo.png'
import './About.css'
function About() {
  return (
 
    <div className='About' id='about'>
       <div className='photo'><img src ={photo} width="350" height="350"></img></div> 
       <div className='description'>
         <h2 className='Who-Am-I'>Who am I</h2>
         <h1 className='About-Me' >About Me </h1>
         <p className='about-description'>
           Hi! I am Monjoy Narayan Choudhury and I am a computer science 
           student from International Institute of Information Technology Bangalore.
           I am a native of Guwahati, Assam. My hobbies include music, gaming and esport
           and also occasionally debate. I enjoy creating apps for mobile platform and also 
           love to discuss algorithms! I am curious about the advancement in blockchain and Web3 overall.
           I am also new to Machine Learning and looking forward to exploring it more.
         </p>

         <div className='Buttons'>
           <div className='btn-1'>
            <a href='https://drive.google.com/file/d/14TdLSXhhvsdTaCgWJRZ2jBB5RY-BMs2u/view?usp=sharing' className='btn btn-outline-warning'>Download CV</a>
           </div>
           <div className="btn-2">
           <a href='mailto:choudhurymonjoy@gmail.com' className='btn btn-outline-warning'>Contact Me</a>
           </div>
         
        
         </div>
       </div>

    </div>
   
  )
}

export default About