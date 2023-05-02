import { useEffect, useRef, useState } from "react";
import "../Home/Home.css";
import lottie from "lottie-web";
import html from "../../assets/html.json"
import css from "../../assets/css.json"
import js from "../../assets/js.json"
import react from "../../assets/react.json"
import { saludo } from "../../js/variableConmutada";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Banner from "../../components/Banner/Banner";
import Animation from "../../components/Animation";

function Home() {
  useEffect(()=>{
    Aos.init({duration:1000});
      },[])

  //background de imagen
  const [backgroundDay, setBackgroundDay] = useState(true)

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
      </Banner> : 
      <Banner backgroundDay={backgroundDay}>
      <img className="object-cover " src="./images/calle/fondo2.jpg" alt=""   />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover " src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover " src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
      </Banner>
     }
    
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
            <h1 data-aos="fade-left"
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
        <button className="text-gray text-xl px-4 border-2 border-grayOscuro rounded-md bg-violet hover:bg-gray60 hover:text-white" id="myButton"  onClick={changeBackground}>{backgroundDay?
        <FontAwesomeIcon
        icon={faSun} style={{color: "#ffdd00",}} />:
        <FontAwesomeIcon
        icon={faMoon} style={{color: "rgb(193, 110, 238)",}} />} Cambiar fondo</button>
      </section>
      {/* <section id="" className="fixed top-9 first:left-28">
        <img src="/images/ellipse/Ellipse-4.png " />
        <img
          className="absolute top-2/4 right-1/3"
          src="/images/ellipse/Ellipse-1.png"
        />
      </section> */}
      <div className="mobile:mt-5 miniTablet:translate-y-[-20px] miniTablet:mt-0 ">
        <Animation />
      </div>
      

      <section data-aos="fade-down" data-aos-once="true" id="textHome">
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
      <section className="bg-grayOscuro  mt-6 rounded-xl w-5/6 flex flex-col m-auto p-3
      miniMobile:p-4
      mobile:p-6
      midMobile:p-8
      miniTablet:p-9 miniTablet:w-8/12
      tablet:pt-3 tablet:flex-row tablet:gap-6 tablet:w-full
      " id="Cards" >
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="text-white mt-3 bg-gray z-10
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
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="text-white mt-3 bg-gray z-10
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
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="text-white mt-3 bg-gray z-10
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
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="text-white mt-3 bg-gray z-10
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
        <div className="m-4"><b><h1 className="text-violet text-2xl mt-4 mb-4">Last landing<span className="text-white"> and website projects</span></h1></b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint esse doloremque ipsum magni ut consequuntur
            hic praesentium repellat quas.</p></div>
        <div className="m-4 relative flex justify-center">
          <img src="/images/frames/Frame1.png" alt="" />
          <img className="absolute top-5  midMobile:top-9 w-3/5" src="/images/cell.png" alt="" />
        </div>
      </section>
      <section className="text-white m-5">
        <div className="m-4"><b><h1 className="text-violet text-2xl mt-4 mb-4">Build<span className="text-white"> a whole new world</span></h1></b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint esse doloremque ipsum magni ut consequuntur
            hic praesentium repellat quas.</p></div>
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