import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Nav() {
    const NavStyle={
        color:'turquoise'
    };


  return (
   <nav>
<h3>Logo</h3>
<ul className="nav-links">
    <Link style={NavStyle} to='/home'>
    <li>Home</li>
    </Link>
    </ul>

    <ul className="Nav-Categories">
    <Link style={NavStyle} to='/category'>
    <li>Category</li>
    </Link>
   </ul>

   <ul className="Nav-Products">
    <Link style={NavStyle} to='/Products'>
    <li>Products</li>
    </Link>
   </ul>

   <ul className="Nav-Admin Area">
    <Link style={NavStyle} to='/AdminArea'>
    <li>Admin Area</li>
    </Link>
</ul>
<Link style={NavStyle} to='/welcome'>Welcome</Link>
   </nav>
  );
}

export default Nav;