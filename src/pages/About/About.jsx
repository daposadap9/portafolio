import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TransitionEffect from '../../components/transition/TransitionEffect';
import among from "../../assets/among.json"
import Cards from '../../components/Cards/Cards';

const About = () => {
    const containerAnimation = useRef(null);
    const containerAnimation2 = useRef(null);
    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: containerAnimation.current,
          render: "svg",
          loop: true,
          autoplay: true,
          animationData: among,
        });
        const anim2 = lottie.loadAnimation({
          container: containerAnimation2.current,
          render: "svg",
          loop: true,
          autoplay: true,
          animationData: among,
        });
        return () => {
          anim.destroy();
          anim2.destroy();
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
    miniTablet:mt-6 miniTablet:justify-around miniTablet:translate-x-32'>
      <Animation/>
      <div className='absolute miniTablet:translate-x-[-230px] miniTablet:w-[800px] first:w-[600px] first:translate-x-[-320px] first:top-16 miniMobile:top-16 miniTablet:top-3 miniTablet:translate-y-[-10px]  scale-x-[-1] hidden first:block' ref={containerAnimation}></div>
      </div>
    </motion.div>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1}}
      className="App m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent overflow-hidden px-2
     "
    >
    <section data-aos-once="true" id="textHome">
        <div className="flex justify-center items-center m-4 mobile:mt-8 midMobile:mt-1 text-center">
          <b>
            <h1 className="text-violet text-4xl">Hi!</h1>
          </b>
          <b>
            <span className="text-white">I'm Fronted developer</span>
          </b>
        </div>
        <p className="text-white pb-6">
          I specialize in frontend technologies such as React, Vue, Ionic, HTML, CSS, JavaScript, and Tailwind, as well as database management with SQL.
          With a strong focus on frontend development. <br /> As a developer, I strive to continuously learn and grow in my skills and knowledge to stay up-to-date
          in a constantly evolving field. <br /> Additionally, I value integrity and ethics in my work and professional relationships.
          Customer satisfaction is my top priority. I make every effort to fully understand the needs and expectations of my clients and work closely with them
          to create customized and effective frontend solutions that exceed their expectations.
        </p>
        <button className="text-white boton"><a href="#textHome">click here</a></button>
        </section>

        <section className='relative w-[600px] bg-circle-gradient3 h-full mb-20 rounded-md midMobile:px-10 midMobile:pb-10 text-white'>
        <div className='relative flex flex-row first:mt-14 first:justify-between first:translate-x-16 miniTablet:w[-400px] midMobile:top-5
        miniTablet:mt-6 miniTablet:justify-around miniTablet:translate-x-12 miniMobile:translate-x-10'>
        <div className='flex flex-col gap-2'>
        <Cards
        title={"Mi experiencia"}
        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, nemo."}
        url={"/images/projects/portafolio.png"}>
        </Cards>
        <Cards
        title={"Mi experiencia"}
        text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, nemo."}
        url={"/images/projects/portafolio.png"}>
        </Cards>
        </div>
        <div className='absolute miniTablet:translate-x-[-230px] miniTablet:w-[800px] first:w-[600px] 
        first:translate-x-[-320px] first:top-16 miniMobile:top-16 miniTablet:top-3 miniTablet:translate-y-[-10px] 
        scale-x-[-1] hidden first:block miniMobile:translate-x-[-300px]' ref={containerAnimation2}></div>
        </div>
        </section>
        
        
      
      
    </motion.div>
    </>
  )
}

export default About