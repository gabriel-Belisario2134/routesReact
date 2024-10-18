import { Outlet, Link } from "react-router-dom";
import "./stylelayout.css"
import React from "react";

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navigation" aria-label="Main Navigation">
        <ul>
          <li>
            <Link to="/" aria-label="Go to Home">Home</Link>
          </li>
          <li>
            <Link to="/blogs" aria-label="View Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact Us">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Layout;