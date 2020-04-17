import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <div class="topnav">
            <span className="nav-logo"><Link to="/welcome">ZenUp</Link></span>
            <div class="topnav-right">
                <a><Link to="/dashboard">Dashboard</Link></a> 
                <a><Link to="/categories">Categories</Link></a> 
                <a><Link to="/achievements">Achievements</Link></a> 
                <a><Link to="/login">Login</Link></a> 
                <a><Link to="/signup">Signup</Link></a> 
            </div>
        </div>
    );
}

export default Nav;