import React, { useEffect, useRef } from 'react'
import robot from "../assets/robot.json"
import lottie from "lottie-web";

const Animation = () => {
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
      }, []);
  return (
    <section
        ref={containerAnimation}
        id="animation"
        className="items-center z-20 m-auto pt-44 scale-x-[-1]
        first:w-5/5 first:pt-28  
        miniMobile:pt-24 
        mobile:w-3/4 mobile:pt-28
        midMobile:pt-14
        miniTablet:w-2/3 
        tablet:w-2/4 "
      ></section>
  )
}

export default Animation