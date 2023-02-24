import React, { useEffect, useRef, useState } from "react";
import { MdClose, RiMenu3Fill } from "react-icons/all";
import { Link } from "react-router-dom";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState("");

  const NavBarToggle = () => {
    setShow(!show);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", StickyNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", StickyNavbar);
  //   };
  // }, []);
  const StickyNavbar = () => {
    if (window !== undefined) {
      let Height = window.scrollY;

      Height >= 150 ? setSticky("StickyNavbar") : setSticky("");
    }
  };
  let menu = useRef("mainmenu");

  useClickOutsideDetector(menu, () => {
    setShow(false);
  });

  return (
    <>
      <nav className={`${sticky} nav`}>
        {/* <nav className={`${sticky} nav`}> */}
        <div className="Navbar">
          <div className="Nav-logo">
            <Link to="/">
              <h1>
                UNDA
                <span>.Quest</span>
              </h1>
            </Link>
          </div>
          <div
            className={show ? "Main-nav Main-nav-show" : "Main-nav"}
            ref={menu}
          >
            <ul>
              <li>
                <Link to="/About" onClick={NavBarToggle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Work" onClick={NavBarToggle}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={NavBarToggle}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="Nav-btn">
              <Link to="/SignUp">
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="Hamburger">
            {show ? (
              <MdClose onClick={NavBarToggle} />
            ) : (
              <RiMenu3Fill onClick={NavBarToggle} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
