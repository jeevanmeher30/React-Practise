import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
    
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/log">Log in</Link>
          <Link to="/reg">Register</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/Admin/Admindashboard">Admin</Link>
        </div>
      </nav>

    
  );
};

export default Nav
