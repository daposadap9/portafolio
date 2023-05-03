import React from "react";
import { motion } from "framer-motion";
import { Link, } from "react-router-dom";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ handleActive }) => {
  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 0.7}}
      className="absolute w-full h-screen top-0 bg-circle-gradient backdrop-blur-15 z-10 opacity-95"
    >
      <b>
      <ul className="flex flex-col justify-center items-center h-screen gap-16 text-2xl">
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6}}
        className="px-4 py-2 border-b-2 border-white sombras2">
          <Link onClick={handleActive} to="/">
            <h1>Home</h1>
          </Link>
        </motion.li>
        <motion.li 
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="px-4 py-2 border-b-2 border-white sombras2">
          <Link onClick={handleActive} to="/projects">
            <h1>Projects</h1>
          </Link>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-2 border-b-2 border-white sombras2">
          <a href="">
            <h1>About me</h1>
          </a>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2}}
        className="px-4 py-2 border-b-2 border-white sombras2">
          <a href="">
            <h1>Contact me</h1>
          </a>
        </motion.li>
      </ul>
      </b>
      <div className="absolute w-10 right-3 top-2 text-white ">
        <button className="z-[9]" onClick={handleActive}>
        <FontAwesomeIcon size="2x" icon={faRectangleXmark} style={{color: "#c82f09",}} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
