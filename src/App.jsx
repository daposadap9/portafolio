import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import lottie from "lottie-web";
import robot from "./assets/robot.json";
import { saludo } from "./js/variableConmutada";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const containerWidth = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setisOpen] = useState(false);

  const handleActive = () => {
    setisOpen(!isOpen);
  };

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

  const containerAnimation = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerAnimation.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: robot,
    });
    return () => {
      anim.destroy();
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    /*
     *En el contenedor padre se esta usando m-auto para centrar todos elementos y se usa h-screen
     *para que ocupe toda la pantalla y empezar con mobile first
     *Linea 18 clase sticky para dejar el componente header fijo en pantalla y centrar con flex
     */
    <div
      ref={containerWidth}
      className="App m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-gray50
      mobile:max-w-screen-mobile mobile:bg-gray50
      midMobile:max-w-screen-midMobile midMobile:bg-gray50
      miniTablet:max-w-screen-miniTablet miniTablet:bg-gray50
      tablet:max-w-screen-tablet tablet:bg-gray50
     "
    >
      <section className="sticky top-0 z-50">
        {width >= 640 ? (
          <Header />
        ) : (
          <HeaderMobile handleActive={handleActive} isOpen={isOpen} />
        )}
      </section>
      <section className="m-4">
        <div>
          <b>
            <h1
              className="text-violet text-center 
            first:text-2xl
            midMobile:text-3xl
            tablet:text-4xl"
            >
              {saludo}
            </h1>
          </b>
        </div>
      </section>
      {/* <section id="" className="absolute top-9 first:left-28">
        <img src="/images/ellipse/Ellipse-4.png" />
        <img
          className="absolute top-2/4 right-1/3"
          src="/images/ellipse/Ellipse-1.png"
        />
      </section> */}
      <section
        ref={containerAnimation}
        id="animation"
        className="items-center z-20 m-auto tablet:w-2/4 first:w-3/4"
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
        <div className="text-white mt-3 bg-gray 
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4 tablet:mt-6
        "
        >
          <div className="flex justify-center"><img src="/images/cards/logo1.png" alt="" /></div>
          <p className="text-center mt-2">Experience the world through VR glases
          </p>
        </div>
        <div className="text-white mt-6 bg-gray 
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4">
          <div className="flex justify-center"><img src="/images/cards/logo2.png" alt="" /></div>
          <p className="text-center mt-2">View all your surrounding with 360
          </p>
        </div>
        <div className="text-white mt-6 bg-gray 
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4">
          <div className="flex justify-center"><img src="/images/cards/logo3.png" alt="" /></div>
          <p className="text-center mt-2">Incredible gaming experience
          </p>
        </div>
        <div className="text-white mt-6 bg-gray 
        p-6 rounded-xl
        mobile:p-10
        midMobile:p-14
        miniTablet:p-16
        tablet:p-4">
          <div className="flex justify-center"><img src="/images/cards/logo4.png" alt="" /></div>
          <p className="text-center mt-2">Making meetings and tours easier
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
      <section>
        <div className="bg-gray50 rounded-2xl text-white">
          <b><h1 className="text-center pt-6">Contact me</h1></b>
          <form onSubmit={handleSubmit} className="inputBox flex flex-col justify-center gap-2 p-3 text-black">
            <div className="flex flex-col m-2 relative">
              <input className="outline-none mt-8 border-b bg-morado h-14" placeholder="Write your name here" type="text" />
              <span className="absolute left-0 px-0 py-1 duration-0.3">First name</span>
            </div>
            <div className="inputBox flex flex-col m-2 relative">
              <input className="outline-none mt-8 border-b bg-morado h-14" type="text" placeholder="Write your last name here" />
              <span className="absolute left-0 px-0 py-1 transition duration-0.3">Last name</span>
            </div>
            <div className="inputBox flex flex-col m-2 relative">
              <input className="outline-none mt-8 border-b bg-morado h-14" type="text" placeholder="Write your email here" />
              <span className="absolute left-0 px-0 py-1 transition duration-0.3">Email address</span>
            </div>
            <div className="inputBox flex flex-col m-2 relative">
              <input className="outline-none mt-8 border-b bg-morado h-14" type="text" placeholder="Write your cellphone number here" />
              <span className="absolute left-0 px-0 py-1 transition duration-0.3">Cellphone number</span>
            </div>
            <div className="inputBox flex flex-col m-2 relative">
              <textarea className="outline-none border-b mt-8 bg-morado pt-6" placeholder="Write your message here..."></textarea>
              <span className="absolute left-0 px-0 py-1 transition duration-0.3">Message</span>
            </div>
            <button className="text-white px-4 border-2 border-white rounded-md w-3/6 my-5 mx-auto">send</button>
          </form>
        </div>
      </section>
      <section className="colorear text-white mt-10 mx-2 rounded-2xl p-5">
        <h1 className="text-center">Contact information</h1>
        <ul className="list-none mt-5 mb-10 text-sm overflow-hidden">
          <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon icon={faLocationDot} /></span><h1>Calle 35 #54-22, Bello obrero</h1></li>
          <li className="flex flex-wrap mt-5" ><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faEnvelope} /></span><h1>diegoposada1999@gmail.com</h1></li>
          <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faPhone} /></span><h1>3207689885</h1></li>
        </ul>
        <ul className="flex gap-12 justify-center text-3xl flex-wrap">
          <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
