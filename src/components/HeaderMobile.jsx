import React from "react";
import Nav from "./Nav";

const HeaderMobile = ({ handleActive, isOpen }) => {
  return (
    <div
      className="bg-morado2 text-white h-14 w-full flex justify-center items-center shadow-md rounded-md 
    gap-14
    first:gap-16
    miniMobile:gap-20
    mobile:gap-28
    midMobile:gap-40
    miniTablet:gap-52
    tablet:hidden
    "
    >
      <li className="px-4 py-2 list-none">
        <img src="/images/Logo.png" alt="logo" />
      </li>
      <button onClick={handleActive}>
        <img srcSet="/images/menuHamburguesa.png" alt="" />
      </button>
      {isOpen && <Nav className="z-10" handleActive={handleActive} />}
    </div>
  );
};

export default HeaderMobile;
