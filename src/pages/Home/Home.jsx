import { useEffect, useRef, useState } from "react";
import "../Home/Home.css";
import lottie from "lottie-web";
import html from "../../assets/html.json"
import css from "../../assets/css.json"
import js from "../../assets/js.json"
import react from "../../assets/react.json"
import { saludo } from "../../js/variableConmutada";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Banner from "../../components/Banner/Banner";
import Animation from "../../components/Animation";
import TransitionEffect from "../../components/transition/TransitionEffect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Home() {
  useEffect(()=>{
    Aos.init({duration:1000});
      },[])

  //background de imagen
  const [backgroundDay, setBackgroundDay] = useState(false)

  //logica para carrucel
  const changeBackground = () => {
    setBackgroundDay(!backgroundDay)
  }
  //animaciones
  const containerAnimation2 = useRef(null);
  const containerAnimation3 = useRef(null);
  const containerAnimation4 = useRef(null);
  const containerAnimation5 = useRef(null);

  useEffect(() => {
    const anim2 = lottie.loadAnimation({
      container: containerAnimation2.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: html,
    });
    const anim3 = lottie.loadAnimation({
      container: containerAnimation3.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: css,
    });
    const anim4 = lottie.loadAnimation({
      container: containerAnimation4.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: js,
    });
    const anim5 = lottie.loadAnimation({
      container: containerAnimation5.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: react,
    });
    return () => {
      anim2.destroy();
      anim3.destroy();
      anim4.destroy();
      anim5.destroy();
    };
  }, []);



//logica para formulario
  

  return (
    /*
     *En el contenedor padre se esta usando m-auto para centrar todos elementos y se usa h-screen
     *para que ocupe toda la pantalla y empezar con mobile first
     *Linea 18 clase sticky para dejar el componente header fijo en pantalla y centrar con flex
     */
     <>
     {
      backgroundDay ?
      <Banner backgroundDay={backgroundDay}>
      <img className="object-cover " src="./images/calle/fondo.jpg" alt=""  />
          <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="object-cover" src="./images/calle/fondo.jpg" alt="" />
          <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
      </Banner> : 
      <Banner backgroundDay={backgroundDay}>
      <img className="object-cover " src="./images/calle/fondo2.jpg" alt=""   />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover " src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover " src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover " src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
      </Banner>
     }
     <TransitionEffect/>
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
      <section className="m-4">
        <div>
          <b>
            <h1 data-aos="fade-left" data-aos-once="true" 
              className="sombras text-center font-dashiellText italic font-black text-white
            first:text-2xl
            midMobile:text-3xl
            tablet:text-4xl"
            >
              {saludo}
            </h1>
            <div className="gradient"></div>
            <div className="spotlight"></div>
          </b>
        </div>
      </section>
      <section className="flex justify-center">
        <button className="text-gray text-xl px-4  py-2 border-2 border-grayOscuro rounded-md bg-violet hover:bg-gray60 hover:text-white z-[9]" id="myButton"  onClick={changeBackground}>{backgroundDay?
        <FontAwesomeIcon className="px-0 py-0" id="myButton" 
        icon={faSun} style={{color: "#ffdd00",}} />:
        <FontAwesomeIcon id="myButton"
        icon={faMoon} style={{color: "rgb(193, 110, 238)",}} />} Change background</button>
      </section>
      <div className="mobile:mt-5 miniTablet:translate-y-[-20px] miniMobile:translate-y-[-20px] first:translate-y-[-20px] mobile:translate-y-[0px] miniTablet:mt-0 ">
        <Animation />
      </div>
      <section className="flex justify-end rounded-md bg-fixed bg-cover bg-center" style={{backgroundImage: "url('./images/fondoIlustracion.jpeg')"}}>
      <img className="w-[500px]" src="/images/Ilustracion.png" alt="" />
      </section>
    

      <section data-aos="fade-down" data-aos-once="true" id="textHome">
        <div className="flex justify-center items-center m-4 mobile:mt-8 midMobile:mt-1 text-center font-semibold">
          <b>
            <h1 className="text-violet text-4xl">Hi!</h1>
          </b>
          <b>
            <span className="text-white text-2xl">I'm Fronted developer</span>
          </b>
        </div>
        <p className="text-white pb-6">
          I specialize in frontend technologies such as React, Vue, Ionic, HTML, CSS, JavaScript, and Tailwind, as well as database management with SQL.
          With a strong focus on frontend development. <br /> As a developer, I strive to continuously learn and grow in my skills and knowledge to stay up-to-date
          in a constantly evolving field. <br /> Additionally, I value integrity and ethics in my work and professional relationships.
          Customer satisfaction is my top priority. I make every effort to fully understand the needs and expectations of my clients and work closely with them
          to create customized and effective frontend solutions that exceed their expectations.
        </p>
        <Link to="/about" className="text-white boton"><a href="#textHome">click here</a></Link>
      </section>
      <section className="mt-6 rounded-xl w-5/6 flex flex-col m-auto p-3 bg-[#3a2f634f] shadow-2xl
      miniMobile:p-4
      mobile:p-6
      midMobile:p-8
      miniTablet:p-9 miniTablet:w-8/12
      tablet:pt-3 tablet:flex-row tablet:gap-6 tablet:w-full
      " id="Cards" >
        <div className="text-gray mt-3 bg-carton
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4 tablet:mt-6
        "
        >
          <div className="flex justify-center" ref={containerAnimation2}></div>
          <p className="text-center mt-2">Experience the world through VR glases
          </p>
        </div>
        <div className="text-gray mt-3 bg-carton
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4 tablet:mt-6
        "
        >
          <div className="flex justify-center" ref={containerAnimation3}></div>
          <p className="text-center mt-2">Experience the world through VR glases
          </p>
        </div>
        <div className="text-gray mt-3 bg-carton
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4 tablet:mt-6
        "
        >
          <div className="flex justify-center pt-5 pb-5" ref={containerAnimation4}></div>
          <p className="text-center mt-2">Experience the world through VR glases
          </p>
        </div>
        <div className="text-gray mt-3 bg-carton
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4 tablet:mt-6
        "
        >
          <div className="flex justify-center pt-5 pb-5" ref={containerAnimation5}></div>
          <p className="text-center mt-2">Experience the world through VR glases
          </p>
        </div>
      </section>
      <section className="text-white m-5">
        <div className="m-4"><b><h1 className="text-violet text-2xl mt-4 mb-4">Development<span className="text-white"> of custom websites,  web applications, and mobile applications with Ionic.</span></h1></b>
          <p>My approach is customer-centric, and I am committed to providing you with an exceptional experience. I will work closely with you, listening to your ideas and requirements, to ensure that the final outcome reflects your vision and meets your needs.
            Whether you need an elegant mobile application, a comprehensive web platform, or improvements to your existing software, I am here to assist you. Together, we can take your project to the next level and achieve success.</p></div>
        <div className="m-4 relative flex justify-center">
          <img src="/images/frames/Frame1.png" alt="" />
          <img className="absolute top-5  midMobile:top-9 w-3/5" src="/images/cell.png" alt="" />
        </div>
      </section>
      <section className="text-white m-5">
        <div className="m-4"><b><h1 className="text-violet text-2xl mt-4 mb-4">Build<span className="text-white"> a whole new world</span></h1></b>
          <p>I always stay at the forefront of new technologies and constantly seek to improve my professional skills. I am committed to staying updated 
            on the latest advancements in the field of software development and I am always willing to acquire new knowledge and skills to deliver innovative and high-quality solutions to my clients. 
            I firmly believe in the importance of continuous learning for success in the software development industry, and I am always ready to invest time and effort in my professional development</p></div>
        <div className="m-4 relative flex justify-center">
          <img src="/images/frames/Frame2.png" alt="" />
          <img className="absolute top-5 midMobile:top-9 w-1/2" src="/images/code.png" alt="" />
        </div>
      </section>
    </motion.div>
    </>
  );
}

export default Home;