import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="list-none bg-[#34305f] opacity-90 text-white h-14 flex justify-evenly items-center px-3 py-4 rounded-md shadow-md overflow-hidden
    "
    >
      <div className="flex justify-center items-center gap-4">
      <Link to="/" className="px-2 py-2">
        <img src="/images/Logo.png" alt="logo" />
      </Link>
      {/* <li><FontAwesomeIcon icon={faInstagram}/></li>
      <li><FontAwesomeIcon icon={faLinkedin}/></li>
      <li><FontAwesomeIcon icon={faFacebook}/></li> */}
      </div>
      
      <nav className="flex">
        <ul className="flex items-center gap-2">
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/">
              <h1>Home</h1>
            </NavLink>
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/projects">
              <h1>Projects</h1>
            </NavLink>
          <li className="px-2 py-1">
            <a href="">
              <h1>About me</h1>
            </a>
          </li>
          <li className="px-2 py-2">
            <a href="">
              <h1>Contact me</h1>
            </a>
          </li>
          <li className="px-2 py-2">
          <FontAwesomeIcon icon={faGlobe} />
            <select className="bg-transparent" id="">
              <option className="bg-morado" value="">English</option>
              <option className="bg-morado" value="">Español</option>
            </select>
          </li>
        </ul>
      </nav>
      <nav className="flex midDesktop:bg-transparent midDesktop:static justify-center gap-5">
        <li><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[17%] text-2xl rounded-md" icon={faInstagram}/></li>
        <li><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[23%] text-2xl rounded-md" icon={faLinkedin}/></li>
        <li><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[20%] text-2xl rounded-xl" icon={faFacebook}/></li>
      </nav>
    </header>
  );
};

export default Header;
