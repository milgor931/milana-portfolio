import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Create</h3>
                    <ul>
                        <li><Link to="/code/projects">projects</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Move</h3>
                    <ul>
                        <li><Link to="/move">dancemaking</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Capture</h3>
                    <ul>
                        <li><Link to="/capture">photography</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><Link to="/connect">contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Milana Gorobchenko. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
