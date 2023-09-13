import React from 'react';
import '../style/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__clone-banner">
                <marquee scrollamount="3">This website is a non-monetized, educational representation of the Technical Writeup content for the purpose of illustrating the work of an intern assignment. All rights to the original content belong to the TakeUForward group. This representation serves solely as an educational resource and technical write-up demonstration and is not intended for commercial purposes.</marquee>
            </div>

            <div className="navbar__top">
                <div className="navbar__logo">
                    <span className="navbar__logo-text">takeUforward</span>
                    <span className="navbar__logo-clone">Clone</span>
                </div>

                <div className="navbar__buttons">
                    <a href="https://www.linkedin.com/in/gauri-tomar-005048268/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin_logo.png" />
                    </a>
                    <a href="https://github.com/gauritomar" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" />
                    </a>
                    <a href="https://leetcode.com/gauri03" target="_blank" rel="noopener noreferrer">
                        <img src="/images/leetcode.png" />
                    </a>
                    <a href="https://twitter.com/bradakkii?s=11&t=4AnE7upTZ-KOZ0FveLO34g" target="_blank" rel="noopener noreferrer">
                        <img src="/images/twitter.png" />
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
