import React from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <div className="brand-logo">
                <Link to="/">
                    <h4>Sasquatchtory</h4>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;