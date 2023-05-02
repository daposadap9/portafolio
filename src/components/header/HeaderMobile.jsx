import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const HeaderMobile = ({ handleActive, isOpen }) => {
  return (
    <div
      className="bg-[#34305f] opacity-90 text-white h-14 w-full flex justify-around items-center shadow-md rounded-md
    "
    >
      <li className="px-2 py-2 list-none">
        <img src="/images/Logo.png" alt="logo" />
      </li>
      <li className="px-2 py-2 list-none">
          <FontAwesomeIcon icon={faGlobe} />
            <select className="bg-transparent mr-4" id="">
              <option className="bg-morado" value="">English</option>
              <option className="bg-morado" value="">Español</option>
            </select>
            <button onClick={handleActive}>
              <img srcSet="/images/menuHamburguesa.png" alt="" />
            </button>
      </li>
      
      {isOpen && <Nav className="z-10" handleActive={handleActive} />}
    </div>
  );
};

export default HeaderMobile;
