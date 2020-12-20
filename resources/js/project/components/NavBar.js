import React from 'react';
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">
                    Cleaning Service
                </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">
                                My orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

