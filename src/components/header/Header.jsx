import { faFacebook, faInstagram, faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import {faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="list-none bg-circle-gradient3 opacity-90 text-white h-14 flex justify-evenly items-center px-3 py-4 shadow-md overflow-hidden
    "
    >
      <div className="flex justify-center items-center gap-4">
      <Link to="/" className="px-2 py-2">
        <img src="/images/Logo.png" alt="logo" />
      </Link>
      </div>
      
      <nav className="flex">
        <ul className="flex items-center gap-2">
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/">
              <h1>Home</h1>
            </NavLink>
            <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/projects">
              <h1>Projects</h1>
            </NavLink>
          <NavLink className={({isActive})=>isActive ? "px-2 py-1 rounded-md bg-white text-gray50":"px-2 py-1 rounded-md  hover:bg-white hover:text-gray50"} to="/about">
              <h1>About me</h1>
          </NavLink>
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
      <nav className="flex midDesktop:bg-transparent midDesktop:static justify-center items-center gap-5">
        <a className="z-80" target="_black" href="https://www.instagram.com/diego_a_posada/"><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[17%] hover:shadow-white hover:shadow-md hover:text-3xl hover:top-3 text-2xl rounded-md" icon={faInstagram}/></a>
        <a className="z-80" target="_black" href="https://www.linkedin.com/in/diego-alejandro-posada-posada-2aa562129"><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[23%] hover:shadow-white hover:shadow-md hover:text-3xl hover:top-3 text-2xl rounded-md" icon={faLinkedin}/></a>
        <a className="z-80" target="_black" href="https://www.twitch.tv/kenpiad"><FontAwesomeIcon className="midDesktop:absolute midDesktop:top-4 midDesktop:right-[20%] hover:shadow-white hover:shadow-md hover:text-3xl hover:top-3 text-2xl rounded-xl" icon={faTwitch}/></a>
      </nav>
    </header>
  );
};

export default Header;
