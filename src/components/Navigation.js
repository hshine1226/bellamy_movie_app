import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <div className="menu">
                <Link to="/">Home</Link>
            </div>
            <div className="menu">
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navigation;