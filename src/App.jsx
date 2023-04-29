import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import lottie from "lottie-web";
import robot from "./assets/robot.json";
import html from "./assets/html.json"
import css from "./assets/css.json"
import js from "./assets/js.json"
import react from "./assets/react.json"
import instagram from "./assets/instagram.json"
import linkedin from "./assets/linkedin.json"
import facebook from "./assets/facebook.json"
import { saludo } from "./js/variableConmutada";
import { faEnvelope, faLocationDot, faMoon, faPhone, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  //background de imagen
  const [backgroundDay, setBackgroundDay] = useState(true)

  //logica para carrucel
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const changeBackground = () => {
    setBackgroundDay(!backgroundDay)
  }
  const Siguiente = () =>{
            //Se comprueba que el slideshow contenga elementos
        if(slideshow.current.children.length > 0){
            //Obtenemos el primer valor del slideshow
            const primerElemento = slideshow.current.children[0];
            //Esta es la transicion a la que se accede en el elemento slideshow
            slideshow.current.style.transition = `2000ms ease-out all`;
            const tamañoSlide= slideshow.current.children[0].offsetWidth;
            //mover el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion =()=> {
                //Reinciamos la posicion deL Slideshow.
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform =  `translateX(0)`;
            
            //Tomamos el primer elemento y lo mandamos al final
            slideshow.current.appendChild(primerElemento);
            slideshow.current.removeEventListener('transitionend', transicion)
            }
            //EventListener para cuando termina la transicion.
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    const reiniciarIntervalo = () =>{
      intervaloSlideshow.current = setInterval(()=>{
        Siguiente(intervaloSlideshow);
    }, 1000);
    }
    useEffect(()=>{
       reiniciarIntervalo()
    },[]);


  //refencia ancho
  const containerWidth = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);




  //active menu nav
  const [isOpen, setisOpen] = useState(false);

  const handleActive = () => {
    setisOpen(!isOpen);
  };





  //UseEffect para capturar el ancho
  useEffect(() => {
    //funcion y disparador para almacenar el width en el useState()
    function handleResize() {
      const elementWidth = containerWidth.current.offsetWidth;
      setWidth(elementWidth);
    }
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);




  


  //animaciones
  const containerAnimation = useRef(null);
  const containerAnimation2 = useRef(null);
  const containerAnimation3 = useRef(null);
  const containerAnimation4 = useRef(null);
  const containerAnimation5 = useRef(null);
  const containerAnimation6 = useRef(null);
  const containerAnimation7 = useRef(null);
  const containerAnimation8 = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerAnimation.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: robot,
    });
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
    const anim6 = lottie.loadAnimation({
      container: containerAnimation6.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: instagram,
    });
    const anim7 = lottie.loadAnimation({
      container: containerAnimation7.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: linkedin,
    });
    const anim8 = lottie.loadAnimation({
      container: containerAnimation8.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: facebook,
    });
    return () => {
      anim.destroy();
      anim2.destroy();
      anim3.destroy();
      anim4.destroy();
      anim5.destroy();
      anim6.destroy();
      anim7.destroy();
      anim8.destroy();
    };
  }, [isOpen]);



//logica para formulario
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    /*
     *En el contenedor padre se esta usando m-auto para centrar todos elementos y se usa h-screen
     *para que ocupe toda la pantalla y empezar con mobile first
     *Linea 18 clase sticky para dejar el componente header fijo en pantalla y centrar con flex
     */
     <>
     <section className="top-0 z-50 sticky">
        {width >= 640 ? (
          <Header />
        ) : (
          <HeaderMobile handleActive={handleActive} isOpen={isOpen} />
        )}
      </section>
      <div className="absolute w-full top-13 z-[-5] flex justify-center rounded-lg overflow-hidden h-96 bg-cover" >
        {
          backgroundDay? <div className="flex flex-row" ref={slideshow}>
        <img id="imagen" className="object-cover" src="./images/calle/fondo.jpg" alt=""  />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
        <img className="object-cover" src="./images/calle/fondo.jpg" alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo.jpg" alt="" />
        </div> : <div className="flex flex-row">
        <img className="object-cover" src="./images/calle/fondo2.jpg" alt="" ref={slideshow}  />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        <img className="object-cover" src="./images/calle/fondo2.jpg"  alt="" />
        <img className="scale-x-[-1] object-cover" src="./images/calle/fondo2.jpg" alt=""  />
        </div>
        }
      </div>
    <div
      ref={containerWidth}
      className="App m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent
     "
    >
      
      <section className="m-4">
        <div>
          <b>
            <h1
              className="sombras text-violetClaro text-center
            first:text-2xl
            midMobile:text-3xl
            tablet:text-4xl"
            >
              {saludo}
            </h1>
          </b>
        </div>
      </section>
      <section className="flex justify-center">
        <button className="text-gray px-4 border-2 border-grayOscuro rounded-md bg-violet"  onClick={changeBackground}>{backgroundDay?
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

      <section
        ref={containerAnimation}
        id="animation"
        className="items-center z-20 m-auto tablet:w-2/4 first:w-3/4 pt-7 scale-x-[-1]"
      ></section>

      <section id="textHome">
        <div className="flex justify-center items-center m-4 text-center">
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
        <button className="text-white px-4 border-2 border-white rounded-md ">click here</button>
      </section>
      <section className="bg-grayOscuro  mt-6 rounded-xl w-5/6 flex flex-col m-auto p-3
      miniMobile:p-4
      mobile:p-6
      midMobile:p-8
      miniTablet:p-9 miniTablet:w-8/12
      tablet:pt-3 tablet:flex-row tablet:gap-6 tablet:w-full
      " id="Cards" >
        <div className="text-white mt-3 bg-gray z-10
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
        <div className="text-white mt-3 bg-gray z-10
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
        <div className="text-white mt-3 bg-gray z-10
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
        <div className="text-white mt-3 bg-gray z-10
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
      <div className="
      pb-10
      midTablet:flex
      midTablet:items-center
      midTablet:flex-row-reverse
      midTablet:justify-center
      midTablet:w-full
      midTablet:absolute
      midTablet:left-0 p-5
      midTablet:bg-circle-gradient
      laptop:justify-center
      ">
        <section className="desktop:w-3/5 midDesktop:w-5/12">
          <div className="rounded-2xl bg-circle-gradient text-white overflow-hidden
        midTablet:bg-circle-gradient2
        midTablet:translate-x-[-30px]
        midTablet:z-[-10]
        midTablet:w-full"
          >
            <b><h1 className="text-center pt-6 text-violet text-2xl mb-4 overflow-hidden">Contact me</h1></b>
            <form onSubmit={handleSubmit} className="inputBox flex flex-col justify-center gap-2 p-3 text-black items-center
          midTablet:flex-row
          midTablet:flex-wrap
          midTablet:justify-around
          midTablet:m-3
          ">
              <div className="flex flex-col relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet"
                  placeholder="Write your name here" type="text" id="firstName"/>
                <label htmlFor="firstName" className="absolute left-0 px-0 py-1 duration-0.3">First name</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Write your last name here" id="lastName"/>
                <label htmlFor="lastName" className="absolute left-0 px-0 py-1 transition duration-0.3">Last name</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Write your email here" id="email" />
                <label htmlFor="email" className="absolute left-0 px-0 py-1 transition duration-0.3">Email address</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Cellphone number" id="cellPhone"/>
                <label htmlFor="cellPhone" className="absolute left-0 px-0 py-1 transition duration-0.3">Cellphone number</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <textarea className="outline-none border-b mt-8 bg-transparent focus:text-violet"
                  placeholder="Write your message here..." id="message"></textarea>
                <label htmlFor="message" className="absolute left-0 px-0 py-1 transition duration-0.3" id="message">Message</label>
              </div>
              <div className="midTablet:m-2 midTablet:relative flex">
              <button className="text-white px-4 border-2 border-white rounded-md my-5 mx-auto">send</button>
            </div>
            </form>
            
          </div>
        </section>
        <section className="colorear text-white mt-10 mx-2 rounded-2xl p-5 
      tablet:h-2/4 z-10">
          <b><h1 className="text-center text-violet text-2xl overflow-hidden">Contact information</h1></b>
          <ul className="list-none mt-5 mb-10 text-sm overflow-hidden">
            <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon icon={faLocationDot} /></span><h1>Calle 35 #54-22, Bello obrero</h1></li>
            <li className="flex flex-wrap mt-5" ><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faEnvelope} /></span><h1>diegoposada1999@gmail.com</h1></li>
            <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faPhone} /></span><h1>3207689885</h1></li>
          </ul>
          <ul className="flex justify-around text-4xl flex-wrap">
            <li><a href=""><span className="w-12 block" ref={containerAnimation8}></span></a></li>
            <li><a href=""><span className="w-12 block" ref={containerAnimation6}></span></a></li>
            <li><a href=""><span className="w-12 block" ref={containerAnimation7}></span></a></li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
}

export default App;
