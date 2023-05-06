import { useState } from "react";

const UseActivate = () => {

    const [isOpen, setisOpen] = useState(false);
    
    const handleActive = () => {
    setisOpen(!isOpen);
  };

  return {isOpen, handleActive}
}

export default UseActivate