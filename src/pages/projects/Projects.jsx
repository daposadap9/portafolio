import React from 'react'
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

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
    className="sombras text-center font-dashiellText italic font-black text-white mt-5
    first:text-2xl
    midMobile:text-3xl
    tablet:text-4xl"
    >My Projects</h1></b>
    <section className="pt-10 flex justify-center">
        <button className="text-gray px-4 border-2 border-grayOscuro text-xl rounded-md absolute bg-violet hover:bg-gray60 hover:text-white" id="myButton">View my projects<FontAwesomeIcon className='ml-3 stroke' icon={faArrowCircleRight} color='#000'/></button>
      </section>
    <div className='mt-6'>
      <Animation/>
      </div>
    </motion.div>
    </>
  )
}

export default Projects