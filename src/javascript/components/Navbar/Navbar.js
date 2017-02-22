import React from 'react'
import navbarLogo from '../../../image/logo-lettering-256.png'
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbar-toggleable-md navbar-inverse navbar-custom">
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand " href="#"> <img src={navbarLogo} className="Navbar__logo" alt="va"/></a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
