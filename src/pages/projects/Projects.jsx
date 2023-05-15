import React, { useEffect, useRef, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import { motion } from "framer-motion";
import Animation from '../../components/Animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TransitionEffect from '../../components/transition/TransitionEffect';
import Cards from '../../components/Cards/Cards';
import among from "../../assets/among.json"
import lottie from "lottie-web";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "atropos/atropos.css";
import Atropos from 'atropos/react';

const Projects = () => {

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

    //logica para fixed
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
    //logica para fixed

  return (
  <>
  <TransitionEffect/>
    <Banner>
      <img className="object-cover " src="./images/calle/desierto.jpeg" alt=""  />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover " src="./images/calle/desierto.jpeg" alt=""  />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
      <img className="object-cover " src="./images/calle/desierto.jpeg" alt=""  />
      <img className="object-cover scale-x-[-1]" src="./images/calle/desierto.jpeg" alt="" />
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
    >My Projects</h1></b>
    <section className="pt-10 flex justify-center">
        <button className="text-gray px-4 py-2 border-2 border-grayOscuro text-xl rounded-md absolute bg-violet hover:bg-gray60 
        hover:text-white z-[9]" id="myButton"><a href="#projects">View my projects<FontAwesomeIcon className='ml-3 stroke' icon={faArrowCircleRight} color='#000'/></a> 
        </button>
      </section>
    <div className='mt-6 mb-6 tablet:mb-2'>
      <Animation/>
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
    <Atropos>
      <section className="flex justify-end rounded-md bg-fixed bg-cover bg-center" style={{backgroundImage: "url('./images/fondoIlustracion.jpeg')"}}>
      <img
           className="w-[500px]" src="/images/Ilustracion.png" alt="" />
      </section>
    </Atropos>
    <section data-aos-once="true" id="textHome">
        <div className="flex justify-center items-center m-4 mobile:mt-8 midMobile:mt-1 text-center font-semibold">
          <b>
            <h1 className="text-violet text-4xl">Hi!</h1>
          </b>
          <b>
            <span className="text-white text-2xl">these are my projects</span>
          </b>
        </div>
        <p className="text-white pb-6 mb-5">
        These are my personal projects that I have been developing in a bootcamp called Academlo. During this bootcamp, 
        I have used various technologies such as HTML, CSS, JavaScript, and Tailwind. Tailwind, in particular, has greatly 
        facilitated my work by providing a framework that simplifies the management of HTML element classes.
        In these projects, I have extensively used React, mainly leveraging its component-based approach to replicate and reuse
        elements throughout the page. Additionally, I have used React Router Dom to handle routes and Redux to manage global 
        states. Regarding API consumption, Axios has been crucial, allowing seamless integration with multiple APIs. 
        Furthermore, I have acquired knowledge in using React hooks, manipulating DOM elements, and working with events. 
        For example, I have used event listeners like window.addEventListener('scroll', handleScroll) to enhance user 
        interactions.
        </p>
        </section>

        <section ref={contenedorPadreAnimation2}  className='relative w-[600px] bg-circle-gradient4 h-full mb-20 rounded-md midMobile:px-10 midMobile:pb-10 text-white overflow-hidden'>
        <div className='relative flex flex-row first:mt-14 first:justify-between first:translate-x-16 miniTablet:w[-400px] midMobile:top-5
        miniTablet:mt-6 miniTablet:justify-around miniTablet:translate-x-12 miniMobile:translate-x-10 tablet:translate-x-24'>
        <div data-aos="fade-up" data-aos-once="true" className='flex flex-col gap-2'>
        <Cards
        title={"Pokedex"}
        text={"This project was built using React Router Doom and Redux to store the session in local storage. It also utilized several useState and useEffect hooks. Axios was used to consume the Pokémon API, and the different views were structured accordingly. The array.map function was used to render the list of Pokémon, and pagination logic was implemented extensively. Of course, the useDispatch function was also used."}
        url={"/images/projects/pokedex.png"}>
        <a href="https://github.com/daposadap9/entregable-5-pokedex" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://entregable5-pokedex.netlify.app/" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"Portafolio"}
        text={"This project was designed using pure flex, HTML, CSS, and media queries with max-width, meaning that it was initially designed for desktop and then adjusted for mobile devices."}
        url={"/images/projects/portafolio.png"}>
        <a href="https://github.com/daposadap9/portafolio-actualizado" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://lustrous-elf-02bf6e.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"App Ricky Morty"}
        text={"In this project, an API from Ricky and Morty was consumed using Axios. The array.map method was used to render multiple characters. It's worth mentioning that the page initially displays a random dimension out of the 100+ available. Math.random was used for this purpose. Additionally, an uncontrolled input was implemented in the project."}
        url={"/images/projects/rickyMorty.png"}>
        <a href="https://github.com/daposadap9/entregable-3.00" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://lucent-cassata-25a151.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"App Ecommerce"}
        text={"This project was designed using pure flex, grid, HTML, CSS, JavaScript, and media queries with min-width. It means that the project was initially designed for mobile devices and then adjusted for desktop screens. The project is an e-commerce website for gym equipment."}
        url={"/images/projects/carritoDeCompras.png"}>
        <a href="https://github.com/SalvadorAguila13/Ecommerce-1" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://stalwart-melba-d7b3d9.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"Infogalax"}
        text={"This project is called Infogalax, and Tailwind CSS was used, just like in other previous projects. The Math.random function was used in the project. The information was retrieved from a JSON file, and, of course, the useState hooks were used to manage the application state."}
        url={"/images/projects/infogalax.png"}>
        <a href="https://github.com/daposadap9/entregable-1-generacion24" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://charming-biscochitos-54b730.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"Crud Users"}
        text={"In this project, we used the CRUD methods which include create, read, update, and delete. We made several requests using Axios and interacted with multiple endpoints. We implemented required fields to ensure that the backend wouldn't receive empty values. Additionally, we added regular expressions to validate all the fields."}
        url={"/images/projects/crudUsers.png"}>
        <a href="https://github.com/daposadap9/entregable-4" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://entregable-4-academlo.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        <Cards
        title={"Weather app"}
        text={"In this project, we made our first API consumption using Axios. We utilized a weather API, where the app prompts you to provide your location and retrieves the weather data, including temperature and other relevant information, for your current location."}
        url={"/images/projects/appClima.png"}>
        <a href="https://github.com/daposadap9/entregable-2-clima" target='_blank' className='z-[9]'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
        <a href="https://tranquil-naiad-917af2.netlify.app/" target='_blank'className='z-[9]'><FontAwesomeIcon size='2x' icon={faArrowCircleRight}/></a>
        </Cards>
        </div>
        <div className='absolute p-0 miniTablet:translate-x-[-200px] miniTablet:w-[800px] first:w-[600px] 
        first:translate-x-[-320px] first:top-16 miniMobile:top-16 miniTablet:top-3 miniTablet:translate-y-[-10px] 
        scale-x-[-1] hidden first:block miniMobile:translate-x-[-280px] recortar' ref={containerAnimation2}></div>
        </div>
        </section>
    </motion.div>
    {/*Codigo que se va a usar en otra ocasion*/}
    {/* <div className='w-full flex items-center justify-center relative text-white bg-transparent '>
    </div> */}
    {/*Codigo que se va a usar en otra ocasion*/}
    </>
  )
}

export default Projects