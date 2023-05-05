import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, } from "react-router-dom";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import person from "../../assets/person.json"
import Lottie from "lottie-web";

const Nav = ({ handleActive }) => {

  const containerAnimation = useRef(null)

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containerAnimation.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: person,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  return (
  <>
      <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 0.7}}
      className="absolute w-full h-screen top-0 bg-[#C6C8EE] backdrop-blur-15 z-10 overflow-hidden"
      >
      <b>
      <ul className="flex flex-col justify-center items-center gap-6 h-screen text-2xl font-dashiellText italic font-black first:text-2xl
            midMobile:text-3xl
            tablet:text-4xl translate-y-[-40px]">
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6}}
        className="px-4 py-0 text-center max-w-sm"
        ref={containerAnimation}>
        </motion.li>      
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6}}
        className="px-4 py-2 text-center border-azulDark sombras text-white">
          <Link onClick={handleActive} to="/">
            <h1>Home</h1>
          </Link>
        </motion.li>
        <motion.li 
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="px-4 py-2 sombras text-white">
          <Link onClick={handleActive} to="/projects">
            <h1>Projects</h1>
          </Link>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-2  border-azulDark sombras text-white">
          <a href="">
            <h1>About me</h1>
          </a>
        </motion.li>
        <motion.li
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2}}
        className="px-4 py-2  border-azulDark sombras text-white">
          <a href="">
            <h1>Contact me</h1>
          </a>
        </motion.li>
        <motion.div className="absolute z-20 flex w-screen first:justify-around  midMobile:justify-evenly px-20 top-12 text-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2}}>
        <li><FontAwesomeIcon icon={faInstagram}/></li>
        <li><FontAwesomeIcon icon={faLinkedin}/></li>
        <li><FontAwesomeIcon icon={faFacebook}/></li>
      </motion.div>
      </ul>
      </b>
      <motion.div
      
      className="absolute w-10 z-30 right-3 top-2 text-white flex flex-row">
        <button className="z-[9]" onClick={handleActive}>
        <FontAwesomeIcon size="2x" icon={faRectangleXmark} style={{color: "#c82f09",}} />
        </button>
      </motion.div>
      <div className="burbujas">
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      <div className="burbuja"></div>
      </div>
    </motion.nav>
</>
  );
};

export default Nav;