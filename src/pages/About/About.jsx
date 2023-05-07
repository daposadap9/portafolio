import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TransitionEffect from '../../components/transition/TransitionEffect';
import among from "../../assets/among.json"

const About = () => {
    const containerAnimation = useRef(null);
    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: containerAnimation.current,
          render: "svg",
          loop: true,
          autoplay: true,
          animationData: among,
        });
        return () => {
          anim.destroy();
        };
      }, []);
  return (
  <>
  <TransitionEffect/>
    <Banner>
    <img className="object-cover " src="./images/calle/laboratorio.jpeg" alt=""  />
    <img className="object-cover scale-x-[-1]" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover scale-x-[-1]" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover " src="./images/calle/laboratorio.jpeg" alt=""  />
    <img className="object-cover scale-x-[-1]" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover scale-x-[-1]" src="./images/calle/laboratorio.jpeg" alt="" />
    <img className="object-cover " src="./images/calle/laboratorio.jpeg" alt=""  />
    <img className="object-cover scale-x-[-1]" src="./images/calle/laboratorio.jpeg" alt="" />
    </Banner>
    
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 2}}
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
    >About me</h1></b>
    <section className="pt-10 flex justify-center">
        <button className="text-gray px-4 py-2 border-2 border-grayOscuro text-xl rounded-md absolute bg-violet hover:bg-gray60 
        hover:text-white z-[9]" id="myButton">Click me<FontAwesomeIcon className='ml-3 stroke' icon={faArrowCircleRight} color='#000'/>
        </button>
      </section>
    <div className='relative flex flex-row first:mt-14 first:justify-between first:translate-x-16 miniTablet:w[-400px] midMobile:top-5
    miniTablet:mt-6 miniTablet:justify-around miniTablet:translate-x-28'>
      <Animation/>
      <div className='absolute miniTablet:translate-x-[-230px] miniTablet:w-[800px] first:w-[600px] first:translate-x-[-320px] first:top-16 miniMobile:top-16 miniTablet:top-3 miniTablet:translate-y-[-10px]  scale-x-[-1] hidden first:block' ref={containerAnimation}></div>
      </div>
    </motion.div>
    </>
  )
}

export default About