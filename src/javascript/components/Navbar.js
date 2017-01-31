import React from 'react'
import navbarLogo from '../../image/yellow-logo.png'
import '../../scss/components/Navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light navbar-custom">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand " href="#"> <img src={navbarLogo} className="img-fluild" width="40" height="40" alt="va"/></a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar;
