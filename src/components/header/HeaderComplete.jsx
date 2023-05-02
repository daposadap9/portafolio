import React, { useState } from 'react'
import { motion } from "framer-motion";
import Header from './Header';
import HeaderMobile from './HeaderMobile';

const HeaderComplete = ({width}) => {

  const [isOpen, setisOpen] = useState(false);

  const handleActive = () => {
    setisOpen(!isOpen);
  };
  return (
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
  )
}

export default HeaderComplete