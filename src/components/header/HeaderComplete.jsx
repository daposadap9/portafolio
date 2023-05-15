import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import UseActivate from '../../js/hooks/UseActivate';

const HeaderComplete = ({width}) => {

  const {handleActive, isOpen, setisOpen} = UseActivate()

  useEffect(() => {
    if (width >= 734) {
      setisOpen(false);
      document.documentElement.style.overflow = "auto";
    }
  }, [width, setisOpen]);
  return (
    <>
    <motion.section 
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{ duration: 1}}
     className="top-0 z-50 sticky">
        {width >= 734 ? (
          <Header />
        ) : (
          <HeaderMobile handleActive={handleActive} isOpen={isOpen} />
        )}
    </motion.section>
    </>
  )
}

export default HeaderComplete;