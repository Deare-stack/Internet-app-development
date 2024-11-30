import React from 'react';
import './Searchbar.css'; 
import Searchbar from './Searchbar';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="logo">
                Amazon Coffee Shop      
                </div>
                <ul className="nav-links">
                    <li><a href="/start-order">Start Order</a></li>
                    <li><a href="/account">Account Information</a></li>
                    <li><a href="/location">Location</a></li>
                    <li><a href="/menu">Menu</a></li>
                </ul>
                <Searchbar/>
            </div>
        </div>
    );
};

export default Navbar;