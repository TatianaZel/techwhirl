import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия бургер меню

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Logo className="navbar-logo-svg" />
                Techwhirl
            </div>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Expertise</Link></li>
                <li><Link to="/our-vision">Our Vision</Link></li>
                <li>
                    <Link to="/careers">
                        Careers
                        <FontAwesomeIcon icon={faArrowRight} className="right-up-arrow-icon" />
                    </Link>
                </li>
            </ul>

            <div className="burger-menu" onClick={toggleMenu}>
                <div className={`burger-line ${isOpen ? 'open' : ''}`} />
                <div className={`burger-line ${isOpen ? 'open' : ''}`} />
                <div className={`burger-line ${isOpen ? 'open' : ''}`} />
            </div>
        </nav>
    );
};

export default Navbar;
