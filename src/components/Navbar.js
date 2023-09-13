import React from 'react';
import '../style/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__top">
                <div className="navbar__logo">
                    <span className="navbar__logo-text">takeUforward</span>
                    <span className="navbar__logo-clone">Clone</span>
                </div>

                <div className="navbar__buttons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin_logo.png" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" />
                    </a>
                    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/leetcode.png" />
                    </a>
                </div>

            </div>
            <div className='navbar__bottom'>
                <div className="navbar__options">
                    <a href="/technical-writeup">Technical Writeup</a>
                    <a href="/why-me">Why Me?</a>
                    <a href="/json-support">JSON Support</a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
