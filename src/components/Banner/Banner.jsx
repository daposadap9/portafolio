import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";


const Banner = ({children}) => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    const Siguiente = () =>{
            //Se comprueba que el slideshow contenga elementos
        try{
            if(slideshow.current && slideshow.current.children && slideshow.current.children.length > 0){
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
        catch(err){
            console.log(err)
        }
        
    }
    const reiniciarIntervalo = () =>{
      intervaloSlideshow.current = setInterval(()=>{
        Siguiente(intervaloSlideshow);
    }, 0);
    }
    useEffect(()=>{
       reiniciarIntervalo()
       // Listener para detener el intervalo cuando se cambia de pestaña
       document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(intervaloSlideshow.current);
        } else {
            reiniciarIntervalo();
        }
    });
    return () => {
        clearInterval(intervaloSlideshow.current);
        document.removeEventListener('visibilitychange', () => {});
    }
    },[]);
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 1}}
      exitBeforeEnter
      className="absolute w-full top-13 z-[-5] flex justify-center rounded-lg overflow-hidden h-[480px]" >
        <div
          className="flex flex-row" ref={slideshow}>
        {children}
        </div>
      </motion.div>
  )
}

export default Banner