import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im"
import logotodo from "../assets/logo.png"

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <nav className="navbar">
        <Link to="/welcome">
            <img src={logotodo} alt="logo" className="logo" style={{ width: '100px', height: 'auto' }} />
        </Link>

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
                <Link to="/about-us">About Us</Link>
            </li>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross /> : <FaBars />}
        </button>
    </nav>
  );
};

export default Navbar;
