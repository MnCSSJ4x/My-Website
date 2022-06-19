import React from 'react'
import Logo from '../brackets.png'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transaprent">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <a className="navbar-brand" href="#" >
              <img src={Logo} width="30" height="24"></img></a>
            <ul className="navbar-nav me-auto mb-2 my-1 ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" >Who am I</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#things-i-have-worked-with'>Things I have worked with</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#my-project'>My Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contact'>Contact Me</a>
              </li>
            </ul>
     
        </div>
      </nav>
  )
}
//color : '#ffb742'
export default Navbar