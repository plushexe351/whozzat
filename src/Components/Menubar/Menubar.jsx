import React from "react";
import "./Menubar.scss";
import { Link, useLocation } from "react-router";

const menuItems = [
  { name: "About", path: "/landing" },
  { name: "Home", path: "/home" },
  { name: "Profile", path: "/profile" },
  { name: "Bookmarks", path: "/bookmarks" },
  { name: "Analytics", path: "/analytics" },
];

const Menubar = () => {
  const location = useLocation();
  return (
    <nav className="apple-menubar">
      <div className="logo">
        Whozzat!
        <div className="buttons">
          <Link className="login smallDevice" to="/auth">
            Log in
          </Link>
        </div>
      </div>
      <div className="page-links">
        <>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </>
      </div>
      <div className="buttons">
        <Link className="login regularScreen" to="/auth">
          Log in
        </Link>
        {/* <button className="signup">Sign up free</button> */}
      </div>
    </nav>
  );
};

export default Menubar;
