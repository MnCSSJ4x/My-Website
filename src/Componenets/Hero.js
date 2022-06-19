import React from 'react'
import './Hero.css'
import Bitmoji from '../bitmoji.png'
const Hero = () => {
    
    return (
        <main className='Hero'>
            <div className="banner">
       
                <h2 className='info'>Hello, My name is <span className='name'> Monjoy Narayan Choudhury</span></h2>
                <div className="bitmoji">
                    <img src={Bitmoji}></img>
                </div>
                <div className="small-description">
                   <p className='description1'>I am a Computer Science student at International Institute of Information Technology.</p>
                   <p className='description2'>I am interested in Mobile Application Development, Machine Learning and is often fascinated by Web3 !</p>  
                </div>
           
            </div>
        </main>
        
    
  )
}

export default Hero