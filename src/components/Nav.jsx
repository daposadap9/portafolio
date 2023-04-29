import React from "react";
import { motion } from "framer-motion";

const Nav = ({ handleActive }) => {
  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 0.8}}
      className="absolute w-full h-screen top-0 bg-circle-gradient backdrop-blur-15 z-10"
    >
      <ul className="flex flex-col justify-center items-center h-screen gap-16">
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6}}
        className="px-4 py-2 border-b-2 border-white">
          <a href="">
            <h1>Home</h1>
          </a>
        </motion.li>
        <motion.li 
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="px-4 py-2 border-b-2 border-white">
          <a href="">
            <h1>Projects</h1>
          </a>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-2 border-b-2 border-white">
          <a href="">
            <h1>About me</h1>
          </a>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2}}
        className="px-4 py-2 border-b-2 border-white">
          <a href="">
            <h1>Contact me</h1>
          </a>
        </motion.li>
      </ul>
      <div className="absolute w-10 right-3 top-2 text-white">
        <button onClick={handleActive}>
          <img src="/images/cerrar.png" alt="" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
