import React, { useEffect, useRef, useState } from 'react'
import lottie from "lottie-web";
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload } from '@fortawesome/free-solid-svg-icons';
import TransitionEffect from '../../components/transition/TransitionEffect';
import among from "../../assets/among.json"
import Cards from '../../components/Cards/Cards';
import Atropos from 'atropos/react';

const About = () => {

    //animaciones
    const containerAnimation = useRef(null);
    const containerAnimation2 = useRef(null);
    //animaciones
    const contenedorPadreAnimation2 = useRef(null);

    const [isFixed, setIsFixed] = useState(false);


    //animacion
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
    //animacion

      //logica para que la animacion quede fixed
    
      useEffect(() => {
        const handleScroll = () => {
          const contenedorPadre = contenedorPadreAnimation2.current;
          const elementoHijo = containerAnimation2.current;
    
          const contenedorRect = contenedorPadre.getBoundingClientRect();
          const contenedorTop = contenedorRect.top;
    
          if (contenedorTop <= 0) {
            setIsFixed(true);
            elementoHijo.style.top = `${Math.abs(contenedorTop) + 2}px`;
          } else {
            setIsFixed(false);
            elementoHijo.style.top = '2px';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      //logica para que la animacion quede fixed

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
        hover:text-white z-[9]" id="myButton"><a href="/document/MyCV.pdf" target='_blank' downloand="true">Download my cv<FontAwesomeIcon className='ml-3 stroke' icon={faDownload} color='#000'/></a> 
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
      <section className="flex justify-end rounded-md bg-fixed bg-cover bg-center" style={{backgroundImage: "url('./images/paisaje2.jpeg')"}}>
      <img className="w-[500px]" src="/images/Ilustracion.png" alt="" />
      </section>
    <section data-aos-once="true" id="textHome">
        <div className="flex justify-center items-center m-4 mobile:mt-8 midMobile:mt-1 text-center font-semibold">
          <b>
            <h1 className="text-violet text-4xl">Hi!</h1>
          </b>
          <b>
            <span className="text-white text-2xl">I'm <h1 className="text-violet text-2xl">Diego</h1></span>
          </b>
        </div>
        <p className="text-white pb-6 mb-5">
        Currently, I am participating in a bootcamp at Academlo, where I am learning various programming technologies. 
        Within the bootcamp, I am focused on studying frontend development with React, Redux, Redux Tolkin, Tailwind, 
        API consumption, and backend development with Node.js. It is worth mentioning that in the technology sector, 
        I already have previous experience working with tools such as Ionic, Vue.js, MySQL, SQL, and Kotlin. I am excited 
        to continue expanding my knowledge in these areas and apply what I have learned in future projects. I am a 
        passionate individual when it comes to my work, always seeking to learn and improve my skills in order to provide 
        better service to my clients/employer. I am responsible, organized, and possess excellent communication skills, 
        which allow me to work effectively in a team and handle high-pressure situations efficiently.
        I am interested in furthering my professional growth in my field and I am willing to take on new 
        challenges and learn from them. I hope to contribute my skills and experience in the technology field.
        </p>
        </section>
        <h1 className='text-center text-2xl font-bold text-white translate-y-[48px]'>Mi experience</h1>
        <section ref={contenedorPadreAnimation2}  className='relative w-[600px] bg-circle-gradient4 h-full mb-20 rounded-md midMobile:px-10 midMobile:pb-10 text-white overflow-hidden'>
        <div  className='relative flex flex-row first:mt-14 first:justify-between first:translate-x-16 miniTablet:w[-400px] midMobile:top-5
        miniTablet:mt-6 miniTablet:justify-around miniTablet:translate-x-12 miniMobile:translate-x-10 tablet:translate-x-24'>
        <div data-aos="fade-up" data-aos-once="true" className='flex flex-col gap-2 pt-8'>
        <Cards
        title={"Apprentice in Emtelco - Duration 6 months"}
        text={"During this internship experience, I learned how to use NPM installations and, for the first time, I gained knowledge in frameworks such as Ionic and Vue. Additionally, I successfully made my first REST API consumption"}
        url={"/images/about/Emtelco.jpg"}>
        </Cards>
        <Cards
        title={"Information Systems Assistant in Corbeta - Duration 1 year and 7 months"}
        text={"Working as a support assistant at a car company, I provide functional-level support for an information system. I extensively analyze potential system improvements, gather requirements, escalate cases, analyze data, and generate reports. I have a strong proficiency in Excel, as I handle data analysis and process automation. Additionally, I conduct user training sessions to ensure effective system utilization."}
        url={"/images/about/Colombiana.jpg"}>
        </Cards>
        <Cards
        title={"Freelance web developer in Ememca - Duration 6 months"}
        text={"In this role, I am developing a website using React, Express, MongoDB, and Node.js. All of this is being uploaded to the Cloudinary and AWS cloud platforms. It is a platform-type website."}
        url={"/images/about/ememca.png"}>
        </Cards>
        </div>
        <div className='absolute miniTablet:translate-x-[-200px] miniTablet:w-[800px] first:w-[600px] 
        first:translate-x-[-320px] first:top-16 miniMobile:top-16 miniTablet:top-3 miniTablet:translate-y-[-10px] 
        scale-x-[-1] hidden first:block miniMobile:translate-x-[-280px] recortar' ref={containerAnimation2}></div>
        </div>
        </section>
    </motion.div>   
    </>
  )
}

export default About