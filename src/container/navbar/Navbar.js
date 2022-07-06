import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://e7.pngegg.com/pngimages/809/39/png-clipart-computer-icons-user-symbol-encapsulated-postscript-info-miscellaneous-cdr.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
