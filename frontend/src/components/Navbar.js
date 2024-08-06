import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/data-integration.png'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="STEM Connect Logo" />
                <strong>STEM Connect</strong>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/post" role="button">Create Program</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
