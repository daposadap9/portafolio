import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink, } from "react-router-dom";
import { faEnvelope, faHome, faTasks, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import person from "../../assets/person.json"
import Lottie from "lottie-web";

const Nav = ({ handleActive }) => {

  const containerAnimation = useRef(null)
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, []);
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
  <div ref={divRef} style={{overflow: "auto"}} className="h-screen overflow-hidden overflow-y-auto absolute">
      <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 0.7}}
      className="w-screen relative h-full bg-[#ACB1D6] z-50 backdrop-blur-15 overflow-hidden pt-3"
      >
      <b>
      <ul className="flex flex-col items-center justify-center gap-2 text-2xl font-dashiellText italic font-black 
      first:text-2xl midMobile:text-3xl tablet:text-4xl translate-y-[-20px]">
        <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="text-center mb-4 mt-4 px-12 mx-2 text-xl">
        <p>Follow us on our social media</p>
        </motion.div>
        <motion.div className="flex w-screen first:justify-around midMobile:justify-evenly first:px-20 justify-around px-10 text-gray"
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2}}>
        <li className="cursor-pointer"><a href="https://www.instagram.com/diego_a_posada/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
        <li className="cursor-pointer"><a href="https://www.linkedin.com/in/diego-alejandro-posada-posada-2aa562129" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        <li className="cursor-pointer"><a href="https://www.twitch.tv/kenpiad" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitch}/></a></li>
      </motion.div>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        className="px-4 py-0 m-0 text-center max-w-[280px]"
        ref={containerAnimation}>
        </motion.li>
        
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/">
            <FontAwesomeIcon icon={faHome}/><h1>Home</h1>
          </NavLink>
        </motion.li>
        <motion.li 
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className="sombras text-white   shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/projects">
          <FontAwesomeIcon icon={faTasks}/><h1>Projects</h1>
          </NavLink>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className=" sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className={({isActive}) => isActive?"bg-morado flex flex-row gap-2 justify-center items-center py-1":"bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado"} onClick={handleActive} to="/about">
          <FontAwesomeIcon icon={faUser}/><h1>About me</h1>
          </NavLink>
        </motion.li>
        <motion.li
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8}}
        className=" sombras text-white shadow-xl w-full overflow-hidden">
          <NavLink className="bg-[#C6C8EE] flex flex-row gap-2 justify-center items-center py-1 hover:bg-morado" onClick={handleActive} to="/">
          <FontAwesomeIcon icon={faEnvelope}/><h1>Contact me</h1>
          </NavLink>
        </motion.li>
      <motion.div initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3}}
      className="text-center relative text-xl px-5">
      <b><p className="text-gray">        
        Made with ❤️ at Academlo</p></b>
      </motion.div>
      </ul>
      </b>
      <div className="burbujas absolute bottom-0 mx-auto">
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
    </div>
  );
};

export default Nav;