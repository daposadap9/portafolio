import React from 'react'
import Banner from '../../components/Banner'
import { motion } from "framer-motion";

const Projects = () => {
  return (
  <>
  <div className='relative m-auto h-[500px]'><Banner/></div>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1}}
      className="App m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent overflow-hidden
     "
    >
      <b><h1 className='text-white text-center text-3xl mt-4'>My Projects</h1></b>
    </motion.div>
    </>
  )
}

export default Projects