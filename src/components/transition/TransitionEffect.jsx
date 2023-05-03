import { motion } from 'framer-motion'
import React from 'react'
motion

const TransitionEffect = () => {
  return (
    <>
    <motion.div data-aos="zoom-in-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="4000" data-aos-once="true" className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-violet'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:["0%","100%"], width:["0%","100%"]}}
    transition={{duration:2, ease:"easeInOut"}}
    >
    </motion.div>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-azulDark'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    transition={{delay:0.2, duration:2, ease:"easeInOut"}}
    >
    </motion.div>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-azulOscuro'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    transition={{delay:0.4, duration:2, ease:"easeInOut"}}
    >
    </motion.div>
    </>
  )
}

export default TransitionEffect