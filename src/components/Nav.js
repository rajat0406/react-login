import React from 'react';
import './Nav.css';
import {Link, Router} from 'react-router-dom';

function Nav() {
  return (
    <Router>
    <div className="App">
        <nav className="Nav">
            <h1>Nav</h1>
            <ul className="nav-links">
            <Link to='/home'>
                <li>Home</li>
            </Link>
            <Link to='/about'> 
                <li>about</li>
            </Link>
            </ul>
        </nav>
    </div>
    </Router>
  );
}
export default Nav;
