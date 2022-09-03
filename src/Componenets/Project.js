import React from 'react'
import './Project.css' 
const Project = () => {
  return (
    <div className='project' id='my-project'>
        <h1 className='title'>
            My Projects
        </h1>
        <h3 className='sub-title'>(At least some of them)</h3>
        <div className="project-grid">
        <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>Warranty IT</h1>
                            <a href='https://github.com/MnCSSJ4x/WarrantyIT' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                   
                    <p className='pro-desc'>
                        <ul>
                            <li>Technologies : Solidity, React-JS, tailwind-css, web3.js</li>
                            <li>
                           Warranty preservation on blockchain solution. 
                            </li>
                            <li>
                            Implemented responsive user interface for the system.
                            </li>
                            <li>
                            Integrated web3.js and interfaced UI and Solidity contracts.  
                            </li>
                        </ul>
                    </p>
                    
            </div>
            <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>ShareCab</h1>
                            <a href='https://github.com/MnCSSJ4x/carpool' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                   
                    <p className='pro-desc'>
                        <ul>
                            <li>Technologies : Flutter, Firebase, Dart.</li>
                            <li>
                            Created an Android application using Flutter for carpool facilities from College to Airport.
                            </li>
                            <li>
                            Implemented Firebase operations with UI elements, added OTP Email Authentication Support with an attempt to utilise
the solution of Interval Matching Problem.
                            </li>
                            <li>
                            Awarded 1st prize in Open Innovation Track at ByteSynergy 2022.
                            </li>
                        </ul>
                    </p>
                    
            </div>
            <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>iCarrom</h1>
                            <a href='https://github.com/MnCSSJ4x/iCarrom' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                    <p className='pro-desc'>
                       <ul>
                        <li>
                            Technologies : C++, SDL.
                        </li>
                        <li>
                        Developed a singleplayer Carrom Simulator.
                        </li>
                        <li>
                        Integrated game-physics with graphical elements.
                        </li>
                        <li>
                        Implemented object-oriented programming practices such as inheritance to create different GameObject types.
                        </li>
                       </ul>
                    </p>
                    
            </div>
            <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>Tiff2Png</h1>
                            <a href='https://github.com/MnCSSJ4x/Tiff2PnG' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                   
                    <p className='pro-desc'>
                       <ul>
                        <li>
                            Technologies : C
                        </li>
                        <li>
                        Designed a TIFF to PNG converted in a team.
                        </li>
                        <li>
                        Handled conversion of TIFF to image data arrays which later was converted to PNG.
                        </li>
                       </ul>
                    </p>
                    
            </div>
            <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>Galaga <br/>Revisited</h1>
                           
                            <a href='https://github.com/MnCSSJ4x/GalagaRevisited' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                   
                    <p className='pro-desc'>
                        <ul>
                        <li>
                            Technologies : Python, Pygame.
                            </li>
                        <li>
                            Implemented Galaga based game using pygame.
                            </li>
                        <li>
                            Handled collision detection and shooting mechanics of the game.
                            </li>
                        </ul>
                        
                    </p>
                    
            </div>
            <div className="item">
                        <div className='link-title'>
                            <h1 className='pro-title'>Calculating<br/> digits of <br/> Pi</h1>
                            <a href='https://github.com/MnCSSJ4x/CalculatingPi' className='l'><img src={require('../Logos/ghub.svg').default} className='logo'/></a>
                            
                        </div>
                   
                    <p className='pro-desc'>
                        <ul>
                            <li>
                                Technology : C++.
                            </li>
                            <li>
                            Generate digits of up to any given precision (number of decimal digits after the decimal point).
                            </li>
                            <li>
                            Algorithms like Karatsuba Multiplication, Long Division, Newton Rapson and Borwein’s Algorithm were used and implemented.
                            </li>
                        </ul>
                    </p>
                    
            </div>
        </div>

       
    </div>
  )
}

export default Project