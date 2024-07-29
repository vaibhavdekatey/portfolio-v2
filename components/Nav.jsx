import React from "react";
import menuIcon from '../src/assets/icons8-menu.svg'
import vdLogo from "../src/assets/logo.png"
import resume from '../src/assets/resume.pdf'


function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={vdLogo} className="logo" />  
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img className="menu" src={menuIcon} width="30px" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link " href="#hero">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#exp">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pro">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a href={resume}><button className="btn btn-outline-success" target="_blank">Resume</button></a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
}

export default Navbar;