import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact-main' id='contact'>
        <h1 className="title">My Profiles</h1>
        <div className="contact-grid">
        <div className="contact-item">
            <a href ="https://www.linkedin.com/in/monjoy-narayan-choudhury-a424b3200/">
                <img src={require('../Logos/linkedin.svg').default} alt="LinkedIn" className='contact-img'/>
            </a>
        </div>
        <div className="contact-item">
        <a href ="https://github.com/mncssj4x">
                <img src={require('../Logos/ghub2.svg').default} alt="Ghub" className='contact-img'/>
            </a>
        </div>
        <div className="contact-item">
        <a href ="mailto:choudhurymonjoy@gmail.com">
                <img src={require('../Logos/mail.svg').default} alt="mail" className='contact-img'/>
        </a>
        </div>
           
        
        
       
            
        </div>
    </div>
  )
}

export default Contact