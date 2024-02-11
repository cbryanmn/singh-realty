import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdTerrain } from 'react-icons/md';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const toggleDropdown = () => {
        if (window.innerWidth <= 1200) {
            setDropdown(!dropdown);
        }
    };

    const handleHover = () => {
        if (window.innerWidth > 1200) {
            setDropdown(true);
        }
    };

    const handleHoverLeave = () => {
        if (window.innerWidth > 1200) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        showButton();
        const handleResize = () => showButton();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <MdTerrain className="navbar-icon" />
                            SINGH REALTY
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item"
                                onClick={toggleDropdown}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverLeave}>
                                <span className="nav-links">
                                    About {dropdown ? <FaChevronUp className="fa-chevron" /> : <FaChevronDown className="fa-chevron" />}
                                </span>
                                {dropdown && (
                                    <div className="dropdown-menu">
                                        <Link to='/aboutus' className="dropdown-link" onClick={closeMobileMenu}>About</Link>
                                        <Link to='/portfolio' className="dropdown-link" onClick={closeMobileMenu}>Portfolio</Link>
                                        <Link to='/testimonials' className="dropdown-link" onClick={closeMobileMenu}>Testimonials</Link>
                                        <Link to='/availableproperties' className="dropdown-link" onClick={closeMobileMenu}>Available Properties</Link>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/sign-up"
                                        className="btn-link">
                                        <Button buttonStyle="btn--outline">
                                            ACCESS PORTAL
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to="sign-up"
                                        className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline"
                                            buttonSize="btn--mobile" className="btn-text">
                                            ACCESS PORTAL
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
