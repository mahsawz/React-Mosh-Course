import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="nav-link navbar-brand" to="/">Vidly</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink className="nav-link nav-item" to="/movies">Movies</NavLink>
                    <NavLink className="nav-link nav-item" to="/customers">Customers</NavLink>
                    <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;