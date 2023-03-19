import React from 'react'
import {  NavLink } from 'react-router-dom'
import './App.css'
function Header() {
  return (
    // <div>
      
      
    //   <nav>
    //     <ul>
    //         <li><NavLink to = '/'>home</NavLink></li>
    //         <li><NavLink to= '/about'>about</NavLink></li>
    //         <li><NavLink to = '/contact'>contact</NavLink></li>
    //     </ul>
    //   </nav>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Usman Brands</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  to ="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">contact</NavLink>
              </li>
             
            </ul>
</div>
</div>
</nav>
    // </div>
  )
}

export default Header
