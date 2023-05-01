import {faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="list-none bg-morado2 text-white h-14 flex justify-evenly items-center px-3 py-4 rounded-md shadow-md overflow-hidden
    "
    >
      <li className="px-4 py-2">
        <img src="/images/Logo.png" alt="logo" />
      </li>
      <nav className="flex">
        <ul className="flex items-center">
          <li className="px-4 py-2">
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/projects">
              <h1>Projects</h1>
            </Link>
          </li>
          <li className="px-4 py-2">
            <a href="">
              <h1>About me</h1>
            </a>
          </li>
          <li className="px-4 py-2">
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
    </header>
  );
};

export default Header;
