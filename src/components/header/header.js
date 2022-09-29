import React from 'react';
import './header.css'

const Header = () => {
    return (
        <nav className="navbar">
            <img src ="./logo512.png" className="logo" />
            <h3>Welcome to UberTown</h3>
            <ul className="list">
                <li>About</li>
                <li>Services</li>
                <li>contact</li>
            </ul>
        </nav>
    );
};

export default Header;
