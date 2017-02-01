import React from 'react'
import navbarLogo from '../../image/yellow-logo.png'
import '../../scss/components/Navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbaru fixed-top navbar-toggleable-md navbar-inverse">
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand " href="#"> <img src={navbarLogo} className="img-fluild" width="60" height="60" alt="va"/></a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
