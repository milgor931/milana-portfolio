import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";

const Navbar = ({ resourceLinks }) => {
    const [isMobile, setIsMobile] = useState(false); // State to track mobile menu toggle
    const navRef = useRef(null); // Reference to the nav element
    const buttonRef = useRef(null); // Reference to the button element

    const [dropdown, setDropdown] = useState(null); // Track open dropdown

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsMobile(false);
    };

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMobile(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (menu) => {
        setDropdown(dropdown === menu ? null : menu);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <h1><Link to="/">MILANA AERNOVA</Link></h1>
            </div>
            <nav
                ref={navRef}
                className={`nav-links ${isMobile ? "mobile active" : ""}`}
            >
                {isMobile
                    ? <ul>
                        <li><Link to="/projects" onClick={closeMenu}>projects</Link></li>
                        {/* <li><Link to="/teach" onClick={closeMenu}>teach</Link></li> */}
                        <li><Link to="/move/dancemaking" onClick={closeMenu}>move</Link></li>
                        <li><Link to="/capture/photography" onClick={closeMenu}>capture</Link></li>
                        <li><Link to="/connect" onClick={closeMenu}>connect</Link></li>
                    </ul>
                    : <ul>
                        {/* <li
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown("code")}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <span>code</span>
                            <Link to="/code/media-art">code</Link>
                            {dropdown === "code" && (
                                <ul
                                    className="dropdown-menu"
                                    onMouseEnter={() => setDropdown("code")} // Keep it open when inside
                                    onMouseLeave={() => setDropdown(null)} // Close when leaving menu
                                >
                                    <li><Link to="/code/projects">Projects</Link></li>
                                    <li><Link to="/code/media-art">projects</Link></li>
                                </ul>
                            )}
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown("teach")}
                        >
                            <span>teach</span>
                            <Link to="/teach">teach</Link>
                            {dropdown === "teach" && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/teach/workshops">Workshops</Link></li>
                                    <li><Link to="/teach/coaching">Coaching</Link></li>
                                </ul>
                            )}
                        </li>

                        <li
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown("capture")}
                        >
                            <span>capture</span>
                            <Link to="/capture">capture</Link>
                            {dropdown === "capture" && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/capture/photography">photography</Link></li>
                                    <li><Link to="/capture/filmmaking">Filmmaking</Link></li>
                                </ul>
                            )}
                        </li>

                        <li
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown("move")}
                        >
                            <span>move</span>
                            <Link to="/move">move</Link>
                            {dropdown === "move" && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/move/dancemaking">dancemaking</Link></li>
                                    <li><Link to="/move/shows">shows</Link></li>
                                </ul>
                            )}
                        </li> */}

                        <li><Link to="/projects" onClick={closeMenu}>create</Link></li>
                        {/* <li><Link to="/teach" onClick={closeMenu}>teach</Link></li> */}
                        <li><Link to="/move" onClick={closeMenu}>move</Link></li>
                        <li><Link to="/capture" onClick={closeMenu}>capture</Link></li>
                        <li><Link to="/connect" onClick={closeMenu}>connect</Link></li>
                    </ul>
                }
            </nav>

            <span ref={buttonRef}
                className="menu-toggle"
                onClick={toggleMenu}>
                ☰
            </span>

            {/* Overlay */}
            <div className={`overlay ${isMobile ? "active" : ""}`} onClick={closeMenu}></div>
        </header>
    );
};

export default Navbar;
