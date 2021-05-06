import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {


  return (
  <nav className="navbar navbar-expand-lg navbar-light text-light" style={{backgroundColor: '#190D30'}}>
    <div className="container">

  <div className="group">
    <div className="item">
    <a className="navbar-brand" href="/">Frank Costelli</a>
    </div>
    <div className="item">
    <p style={{letterSpacing: '.15rem'}}>Software Developer</p>
    </div>
  </div>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{ color: '#fffeff'}}/>
  </button>



  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blog">Blog</a>
      </li>
    </ul>
  </div>
  </div>
  </nav>
  ) 
}
