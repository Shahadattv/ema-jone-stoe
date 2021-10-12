import React from 'react';
// import logo form coustom folder
import logo from '../../images/logo.png'
import "./header.css"
const Header = () => {
    return (
        <div className='header'>
            {/* show image from logo imoprt */}
            <img className='logo' src={logo} alt="" srcset="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/Inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;