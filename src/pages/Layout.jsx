import { Outlet, Link } from "react-router-dom";
import "./stylelayout.css"
import React from "react";

const Layout = () => {
  return (
    <>
      <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;