import React from 'react'
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';

const Projects = () => {
  return (
  <>
    <Banner>
      <img className="object-cover " src="./images/calle/desierto.jpeg" alt=""  />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
    </Banner>
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
    ><b><h1
    className="sombras text-violetClaro text-center mt-5
    first:text-2xl
    midMobile:text-3xl
    tablet:text-4xl"
    >My Projects</h1></b>
    <div className='mt-16'>
      <Animation/>
      </div>
    </motion.div>
    </>
  )
}

export default Projects