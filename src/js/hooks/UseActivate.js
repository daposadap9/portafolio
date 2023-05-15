import { useState } from "react";

const UseActivate = () => {

    const [isOpen, setisOpen] = useState(false);
    
    const handleActive = () => {
    setisOpen(!isOpen);

    //logica para desactivar el scroll vertical cada vez que se activa el componente nav
    if (isOpen) {
      document.documentElement.style.overflow = "auto";
    } else {
      document.documentElement.style.overflow = "hidden";
    }
  };

  return {isOpen, handleActive, setisOpen}
}

export default UseActivate