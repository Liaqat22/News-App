import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function Nav() {

  return (
    <div>

      <nav className='navbar navbar-expand-lg fixed-top' style={{
        lineHeight: '35px',
        marginTop: '-8px'
      }}>
        <div className="container-fluid " style={{ color: 'black', backgroundColor: 'orange' }}>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">general</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">business</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">entertainment</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">health</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">science</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">sports</NavLink></li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">technology</NavLink></li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: '#f8f8f7f5' }} />
              <button className="btn btn-outline-success" type="submit" style={{
                color: 'black',
                border: '1px solid white'
              }}>Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
