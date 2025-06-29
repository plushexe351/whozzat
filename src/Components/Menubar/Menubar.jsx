import React, { useEffect, useState } from "react";
import "./Menubar.scss";
import { Link, useLocation } from "react-router";
import { useAuth } from "../../Context/AuthContext";
import { p } from "framer-motion/client";
import { handleSignOut } from "../../utils/authHandlers.js";
import { useToast } from "../../Context/ToastContext.jsx";

const menuItems = [
  { name: "About", path: "/landing" },
  { name: "Home", path: "/home" },
  { name: "Profile", path: "/profile" },
  { name: "Bookmarks", path: "/bookmarks" },
  { name: "Analytics", path: "/analytics" },
];

const Menubar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [showFixed, setShowFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const { addToast } = useToast();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 50) {
            setShowFixed(false);
          } else if (currentScrollY < lastScrollY) {
            setShowFixed(true);
          } else if (currentScrollY > lastScrollY) {
            setShowFixed(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`apple-menubar${showFixed ? " fixed-menubar" : ""}`}>
      <div className="logo" onClick={() => console.log(user)}>
        Whozzat!
        <div className="buttons">
          <Link className="login smallDevice" to="/auth">
            {user ? "Log out" : "Log in"}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {item.name}
            </Link>
          ))}
        </>
      </div>
      <div className="buttons">
        {user && <p onClick={() => handleSignOut(addToast)}>Log out</p>}
        {!user && (
          <Link className="login regularScreen" to="/auth">
            {user ? "Log out" : "Log in"}
          </Link>
        )}
        {/* <button className="signup">Sign up free</button> */}
      </div>
    </nav>
  );
};

export default Menubar;
