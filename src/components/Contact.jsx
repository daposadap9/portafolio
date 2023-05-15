import React, { useEffect, useRef } from 'react'
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagram from "../assets/instagram.json"
import linkedin from "../assets/linkedin.json"
import facebook from "../assets/facebook.json"
import lottie from "lottie-web";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const containerAnimation6 = useRef(null);
    const containerAnimation7 = useRef(null);
    const containerAnimation8 = useRef(null);

    const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, e.target, import.meta.env.VITE_APP_PUBLIC_KEY)
    .then((res)=>console.log(res.text))
    .catch((error) => console.log(error))
    }


    //animaciones
    useEffect(() => {
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
          anim6.destroy();
          anim7.destroy();
          anim8.destroy();
        };
      }, []);

    //animaciones

  return (
    <div className="
      pb-10
      items-center
      midTablet:flex
      midTablet:flex-row-reverse
      midTablet:justify-center
      midTablet:w-full
      midTablet:absolute
      midTablet:left-0 p-5
      midTablet:bg-circle-gradient
      tv:px-[300px] midtv:px-[800px] midtv:w-screen
      " id='contact'>
        <section className="desktop:w-3/5 midDesktop:w-5/12">
          <div className="rounded-2xl bg-circle-gradient text-white overflow-hidden
        midTablet:bg-circle-gradient2
        midTablet:translate-x-[-30px]
        midTablet:z-[-10]
        midTablet:w-full
        max-w-3xl mr-auto
        midtv:mx-auto
        "
          >
            <b><h1 className="text-center pt-6 text-violet text-2xl mb-4 overflow-hidden">Contact me</h1></b>
          <form onSubmit={handleSubmit} className="inputBox flex flex-col justify-center gap-2 p-3 text-black items-center
          miniTablet:flex-row
          miniTablet:flex-wrap
          midTablet:flex-row
          midTablet:flex-wrap
          midTablet:justify-around
          midTablet:m-3
          ">
              <div className="flex flex-col relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet"
                  placeholder="Write your name here" type="text" id="firstName" name='from_name' required/>
                <label htmlFor="firstName" className="absolute left-0 px-0 py-1 duration-0.3">First name</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Write your last name here" id="lastName" name='last_name' required/>
                <label htmlFor="lastName" className="absolute left-0 px-0 py-1 transition duration-0.3">Last name</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Write your email here" id="email" name='email' required/>
                <label htmlFor="email" className="absolute left-0 px-0 py-1 transition duration-0.3">Email address</label>
              </div>
              <div className="inputBox flex flex-col m-2 relative">
                <input className="outline-none mt-8 border-b bg-transparent h-14 focus:text-violet" type="text"
                  placeholder="Cellphone number" id="cellPhone" name='cellphone' required/>
                <label htmlFor="cellPhone" className="absolute left-0 px-0 py-1 transition duration-0.3">Cellphone number</label>
              </div>
              <div className="inputBox flex flex-col m-2 w-72 midTablet:mt-10">
              <label htmlFor="message" className="flex w-50% mx-20 px-0" name="message" id="message">Message</label>
                <textarea className="outline-none border-b mt-3 bg-transparent focus:text-violet w-2/4 mx-auto text-center"
                  placeholder="Write your message here..." id="message" required></textarea>
                
              </div>
              <div className="inputBox flex flex-col m-2 relative w-full">
              <button className="text-white border-white border-2 rounded-md boton buttonAnimated w-28 mx-auto">send</button>
            </div>
            </form>
            
          </div>
        </section>
        <section className="colorear text-white mt-10 mx-2 rounded-2xl p-5 
      tablet:h-2/4 z-[9] midtv:absolute midtv:mr-[1100px]">
          <b><h1 className="text-center text-violet text-2xl overflow-hidden">Contact information</h1></b>
          <ul className="list-none mt-5 mb-10 text-sm overflow-hidden midtv:mb-4">
            <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon icon={faLocationDot} /></span><h1>Calle 35 #54-22, Bello obrero</h1></li>
            <li className="flex flex-wrap mt-5" ><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faEnvelope} /></span><h1>diegoposada1999@gmail.com</h1></li>
            <li className="flex flex-wrap mt-5"><span className="mr-4"><FontAwesomeIcon className='ul__icon' icon={faPhone} /></span><h1>3207689885</h1></li>
          </ul>
          <ul className="flex
          justify-around
          miniTablet:justify-center
          miniTablet:gap-10
          midTablet:gap-0
          midTablet:justify-around
          text-4xl flex-wrap">
            <li><a href="https://www.instagram.com/diego_a_posada/" target='_blank'><span className="w-12 block" ref={containerAnimation8}></span></a></li>
            <li className='bg-carton px-4 rounded-full'><a className='relative justify-center flex bg-carton px-2' target='_blank' href="https://www.twitch.tv/kenpiad"><span className="w-12 block absolute" ref={containerAnimation6}></span></a></li>
            <li><a href="https://www.linkedin.com/in/diego-alejandro-posada-posada-2aa562129" target='_blank'><span className="w-12 block" ref={containerAnimation7}></span></a></li>
          </ul>
        </section>
        </div>
  )
}

export default Contact