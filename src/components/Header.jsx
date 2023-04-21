import React from "react";

const Header = () => {
  return (
    <header
      className="list-none bg-morado2 text-white h-14 w-full flex
    justify-center items-center px-3 py-4 rounded-md shadow-md
    "
    >
      <li className="px-4 py-2">
        <img src="/images/Logo.png" alt="logo" />
      </li>
      <nav className="flex">
        <ul className="flex">
          <li className="px-4 py-2">
            <a href="">
              <h1>Home</h1>
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="">
              <h1>Projects</h1>
            </a>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
